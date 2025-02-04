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
    console.log('contagemFisica4343', contagemFisica);
  }, [contagemFisica]);

  const [visibleModalCamera, setVisibleModalCameraa] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [itemIndex, setitemIndex] = useState([]);
  const [detected, setDetected] = useState(false);
  const [dadosColetados, setDadosColetados] = useState([]);
  const [mostFrequent, setMostFrequent] = useState('');
  const [attGrid, setAttGrid] = useState(false);
  const [percorreu, setPercorreu] = useState(false);
  const [eanExist, setEanExist] = useState([]);
  const [updatedFilters, setupdatedFilters] = useState([]);
  const dispatch = useDispatch();
  const cameraRef = useRef<HTMLDivElement>(null);

  const nfe = contagemFisica[0]?.chave_acesso;
  // const eanIndex: number = filtros.findIndex((item) => item.campo == "ean");

  useEffect(() => {
    dispatch(getDadosFiltros('ContagemFisica'));
  }, []);
  useEffect(() => {
    // setEanExist(filtros.filter((item) => item.campo === "ean"))
    // console.log('eanExist', eanExist)
  }, [filtros]);
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
          Quagga.onDetected((data) => {
            if (!detected) {
              dadosColetados.push(data.codeResult.code);
              setDetected(true);
            }
          });
          console.log('Initialization finished. Ready to start');
        }
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
    setAttGrid(!attGrid);
  };

  function findMostFrequent(arr) {
    // Objeto para armazenar a contagem de cada elemento
    const frequency = {};

    // Contando a frequência de cada elemento
    arr.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    // Variáveis para armazenar o número mais frequente e sua contagem
    let maxCount = 0;
    let mostFrequent = null;

    // Encontrando o elemento com a maior contagem
    for (const num in frequency) {
      if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num; // Já é uma string, então não precisamos converter
      }
    }
    setMostFrequent(mostFrequent);
    return mostFrequent;
  }

  const chamada = (mostFrequent: string) => {
    const eanAtualIgual = eanExist[0]?.valor === mostFrequent ? true : false;
    const filtroNfe = {
      campo: 'chave_acesso',
      compare: 'equal',
      valor: nfe || '',
    };
    let naoTemEan = true;
    const updateData = filtros.map((item) => {
      if (item.campo === 'ean') {
        console.log('entro');
        naoTemEan = false;
        if (item.valor !== mostFrequent) {
          console.log('entro');
          return { ...item, valor: mostFrequent }; // Retorna um novo objeto com o valor atualizado
        }
        console.log('updateData', updateData);
        dispatch(postDadosFiltros([...filtros, updateData], 'ContagemFisica'));
      }
      // Retorna o objeto original se não precisa ser atualizado
    });
    const filtroEan = {
      campo: 'ean',
      compare: 'equal',
      valor: mostFrequent || '',
    };
    if (naoTemEan) {
      console.log('entro', filtroEan);
      naoTemEan = true;
      dispatch(postDadosFiltros([...filtros, filtroEan], 'ContagemFisica'));
      console.log('filtros', filtroEan);
    }
    // console.log('updateData', updateData)

    const data = contagemFisica.filter((item) => item.ean === mostFrequent);
    setitemIndex(data);
    console.log('itemIndex', itemIndex);

    if (itemIndex.length == 0) {
      toast.warning('Item não encontrado!', {
        theme: 'colored',
      });
      const filtroClean = {
        campo: 'chave_acesso',
        compare: 'equal',
        valor: contagemFisica[0]?.chave_acesso,
      };
      dispatch(postDadosFiltros([...filtros, filtroClean], 'ContagemFisica'));
      return;
    }

    if (itemIndex.length >= 1) {
      dispatch(
        putContagemFisica({
          id: itemIndex[0]?.id,
          qtde_contada: +itemIndex[0]?.qtde_contada + 1,
        })
      );
      setPercorreu(!percorreu);
    }

    // if (contagemFisica.length > 0 && sla.length > 0) {
    //   setFirstTime(false)
    //   console.log("foi", attGrid);
    //   dispatch(
    //     putContagemFisica({
    //       id: contagemFisica[0]?.id,
    //       qtde_contada: +contagemFisica[0]?.qtde_contada + 1,
    //     })
    //   );
    //   if (eanIndex === -1) {
    //     dispatch(postDadosFiltros([...filtros, filtroEan], "ContagemFisica"));
    //     console.log("foi");
    //   }
    //   setAttGrid(!attGrid);
    // }
    // const updateData = (filtros.map((item) => {
    //   if (item.campo === "ean") {
    //     if (item.valor !== mostFrequent) {
    //       return { ...item, valor: mostFrequent }; // Retorna um novo objeto com o valor atualizado
    //     }
    //   }
    //   return item; // Retorna o objeto original se não precisa ser atualizado
    // }))
    // filtros[eanIndex].valor = mostFrequent;
    // console.log('updatedFilters', updateData)

    // dispatch(postDadosFiltros([...updatedFilters], "ContagemFisica"));
    // dispatch(postDadosFiltros([filtroNfe], "ContagemFisica"));

    // setPercorreu(!percorreu);
  };
  useEffect(() => {
    dispatch(postDadosFiltros([...filtros], 'ContagemFisica'));
  }, [percorreu]);
  useEffect(() => {
    console.log('first', contagemFisica.length, mostFrequent);
    if (contagemFisica.length === 0 && mostFrequent === '') return;
    if (contagemFisica.length > 0) {
      console.log('contagemFisica', contagemFisica);
      const FirstItem = contagemFisica.filter(
        (item) => item.ean === mostFrequent
      );
      console.log('updatedFilters', updatedFilters);
      const sla: any = updatedFilters.filter((item) => item.campo === 'ean');
      console.log('ean--------------', sla);
      // if (contagemFisica.length > 0 && sla.length > 0) {
      //   setFirstTime(false)
      //   console.log("foi", attGrid);
      //   dispatch(
      //     putContagemFisica({
      //       id: contagemFisica[0]?.id,
      //       qtde_contada: +contagemFisica[0]?.qtde_contada + 1,
      //     })
      //   );
      //   if (eanIndex === -1) {
      //     dispatch(postDadosFiltros([...filtros, filtroEan], "ContagemFisica"));
      //     console.log("foi");
      //   }
      //   setAttGrid(!attGrid);
      // }
    }
    console.log('contagemFisica', contagemFisica);
  }, [percorreu]);
  useEffect(() => {
    //   if(attGrid) {dispatch(getDadosFiltros("ContagemFisica"));
    //   console.log('foi', attGrid)
    // }
    if (contagemFisica.length > 0) {
    }
  }, [attGrid]);
  useEffect(() => {
    // if (eanExist && contagemFisica.length === 0) {
    //   toast.warning("Item não encontrado!", {
    //     theme: "colored",
    //   });
    //   const filtroClean = {
    //     campo: "chave_acesso",
    //     compare: "equal",
    //     valor: filtros[0]?.valor,
    //   };
    //   dispatch(postDadosFiltros([filtroClean], "ContagemFisica"));
    // }
  }, [contagemFisica]);
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
