import { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import { Modal } from './style';
import { XCircle } from '@geist-ui/react-icons';
import Quagga from 'quagga';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanDadosFiltros,
  getDadosFiltros,
  postDadosFiltros,
} from 'src/store/modules/filtros/actions';
import { RootState } from 'src/store/modules/rootReducer';
import { toast } from 'react-toastify';
import {
  getContagemFisica,
  putContagemFisica,
} from 'src/store/modules/contagem-fisica/actions';

interface IProps {
  fields: any;
  setValue: any;
}

const ModalCamera = ({ fields, setValue }: IProps) => {
  const {
    contagemFisica: { contagemFisica },
    dadosFiltros: { filtros, modulo },
  }: any = useSelector((state: RootState) => ({
    contagemFisica: state.contagemFisica,
    dadosFiltros: state.dadosFiltros,
  }));
  useEffect(() => {
    console.log('fields', fields[0]?.qtde_contada)
  }, [fields]);

  const [visibleModalCamera, setVisibleModalCameraa] = useState(false);
  const [ean, setEan] = useState('0012345678905');
  const [detected, setDetected] = useState(false);
  const [dadosColetados, setDadosColetados] = useState([]);
  const [mostFrequent, setMostFrequent] = useState('');
  const [updateQtde, setUpdateQtde] = useState(false);
  const dispatch = useDispatch();
  const cameraRef = useRef<HTMLDivElement>(null);
  const eanExist = filtros.filter(item => item.campo === 'ean');
  useEffect(() => {
    dispatch(getDadosFiltros('ContagemFisica'));
  }, []);
  const initReader = () => {
    setVisibleModalCameraa(true);
  };

  useEffect(() => {
    if (visibleModalCamera && cameraRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: cameraRef.current,
          },
          decoder: {
            readers: ['ean_reader', 'code_128_reader', 'code_39_reader'],
          },
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          Quagga.start();
          Quagga.onDetected(data => {
            if (!detected) {
              dadosColetados.push(data.codeResult.code);
              setDetected(true);
            }
          });
          console.log('Initialization finished. Ready to start');
        },
      );
    }
  }, [visibleModalCamera]);
  useEffect(() => {
    if (detected) {
      setTimeout(() => {
        Quagga.stop();
        tratativa();
        setDetected(false);
      }, 500);
    }
  }, [detected]);
  const tratativa = () => {
    setVisibleModalCameraa(false);
    const mostFrequent = findMostFrequent(dadosColetados);
    chamada(mostFrequent);
  };

  function findMostFrequent(arr) {
    // Verifica se o array está vazio ou indefinido
    if (!arr || arr.length === 0) {
      return null; // Ou um valor padrão adequado
    }

    // Objeto para armazenar a contagem de cada elemento
    const frequency = {};

    // Contando a frequência de cada elemento
    arr.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    // Variáveis para armazenar o número mais frequente e sua contagem
    let maxCount = 0;
    let mostFrequent = null;

    // Encontrando o elemento com a maior contagem
    for (const num in frequency) {
      if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
      }
    }
    setMostFrequent(mostFrequent);
    setDadosColetados([]);
    return mostFrequent;
  }

  const chamada = (mostFrequent: string) => {
    console.log('filtros-------------------------', filtros, mostFrequent)
    const FirstItem = contagemFisica.filter(item => item.ean === mostFrequent);
console.log('slaaaaaaaaaa0--------------', FirstItem)
if (FirstItem.length == 1) {
  console.log('FirstItem159', FirstItem);
  dispatch(
    putContagemFisica({
      id: FirstItem[0]?.id,
      qtde_contada: +FirstItem[0]?.qtde_contada + 1,
    }),
  );
  // setValue(
  //   `contagemFisica.${0}.qtde_contada` as const,
  //   (+FirstItem[0]?.qtde_contada + 1) as never,
  // );
}
setUpdateQtde(!updateQtde)

    const eanAtualIgual = eanExist[0]?.valor === mostFrequent ? true : false;
    // if (contagemFisica.length == 0 && mostFrequent === '') return;

    // sla(mostFrequent, FirstItem)
  };
  const sla = (mostFrequentt: string, FirstItem) => {
    console.log(
      '=====================contagemFisica=======================',
      contagemFisica,
      '=====================mostFrequence=======================',
      mostFrequentt,
      '=====================FirstItem=======================',
      FirstItem,
      '=====================filtros=======================',
      filtros,
    );
    // if (FirstItem.length > 0) {
    //   console.log('FirstItem159', FirstItem);
    //   dispatch(
    //     putContagemFisica({
    //       id: FirstItem[0]?.id,
    //       qtde_contada: +FirstItem[0]?.qtde_contada + 1,
    //     }),
    //   );
    //   // setValue(
    //   //   `contagemFisica.${0}.qtde_contada` as const,
    //   //   (+FirstItem[0]?.qtde_contada + 1) as never,
    //   // );
    // }
  }
  useEffect(() => {
    const eanIndex: number = filtros.findIndex(item => item.campo == 'ean');
    console.log('foi1', eanIndex)
    if (eanIndex !== -1) {
      console.log('foi2 ', eanIndex)
      const updatedFilters = filtros.map(item => {
        if (item.campo === 'ean') {
          if (item.valor !== mostFrequent) {
            console.log('entro')
            return { ...item, valor: mostFrequent }; // Retorna um novo objeto com o valor atualizado
          }
        }
        return item; // Retorna o objeto original se não precisa ser atualizado
      });
      console.log('updatedFilters', updatedFilters)
      // filtros[eanIndex].valor = mostFrequent;
      dispatch(postDadosFiltros([...updatedFilters], 'ContagemFisica'));

      // setUpdateQtde(!updateQtde);
    }
    const filtroEan = {
      campo: 'ean',
      compare: 'equal',
      valor: mostFrequent || '',
    };
    if (eanIndex === -1) {
      dispatch(postDadosFiltros([...filtros, filtroEan], 'ContagemFisica'));
      // setUpdateQtde(!updateQtde);
    }
    // if (eanExist && contagemFisica.length === 0) {
    //   toast.warning('Item não encontrado!', {
    //     theme: 'colored',
    //   });
    //   const filtroClean = {
    //     campo: 'chave_acesso',
    //     compare: 'equal',
    //     valor: filtros[0]?.valor,
    //   };
    //   dispatch(postDadosFiltros([filtroClean], 'ContagemFisica'));
    // }

  }, [updateQtde]);
  return (
    <>
      <button onClick={initReader}>
        <img
          width={60}
          src="https://lh6.googleusercontent.com/proxy/DCP5kKHMgQtURu5OFVSKUiMFED8bz2DqNK8BQIuQcTQntJAGK0QCIBj-C9y22OvbvYdek2m8PKJBZnsR8dOrWX6jH8CKRjWM-Hi3Hy0B4bReYPZcjHrSlpuS"
          alt=""
        />
      </button>
      {visibleModalCamera && (
        <Modal className="modal">
          <XCircle onClick={() => setVisibleModalCameraa(false)} />
          <div id="camera" ref={cameraRef} className="camera">
            <div className="backCamera1"></div>
            <div className="backCamera2"></div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalCamera;
