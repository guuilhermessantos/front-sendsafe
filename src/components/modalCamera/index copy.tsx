import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import { Modal } from "./style";
import { XCircle } from "@geist-ui/react-icons";
import Quagga from "quagga";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanDadosFiltros,
  getDadosFiltros,
  postDadosFiltros,
} from "src/store/modules/filtros/actions";
import { RootState } from "src/store/modules/rootReducer";
import { toast } from "react-toastify";
import { putContagemFisica } from "src/store/modules/contagem-fisica/actions";

const ModalCamera = (fields: any) => {
  const {
    contagemFisica: { contagemFisica },
    dadosFiltros: { filtros, modulo },
  }: any = useSelector((state: RootState) => ({
    contagemFisica: state.contagemFisica,
    dadosFiltros: state.dadosFiltros,
  }));

  const filtroClean = {
    campo: "chave_acesso",
    compare: "equal",
    valor: filtros[0].valor,
  };

  

  useEffect(() => {
    dispatch(getDadosFiltros("ContagemFisica"));
  }, []);
  const [visibleModalCamera, setVisibleModalCameraa] = useState(false);
  const [ean, setEan] = useState("");
  const [dadosColetados, setDadosColetados] = useState([]);
  const [firstId, setFirstId] = useState(0);
  const dispatch = useDispatch();
  const cameraRef = useRef<HTMLDivElement>(null);

  const initReader = () => {
    setEan("");
    setVisibleModalCameraa(true);
  };
  

  useEffect(() => {
    if (visibleModalCamera && cameraRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: cameraRef.current,
          },
          decoder: {
            readers: ["ean_reader", "code_128_reader", "code_39_reader"],
          },
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          Quagga.start();
          Quagga.onDetected((data) => {
            dadosColetados.push(data.codeResult.code);
            setTimeout(() => Quagga.stop(), 500);
            setTimeout(() => tratativa(), 500);
            // tratativa()
          });
          console.log("Initialization finished. Ready to start");
        }
      );
    }
console.log('dadosColetados', dadosColetados)
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

      return mostFrequent;
    }

    const tratativa = () => {
      setVisibleModalCameraa(false);
      const mostFrequent = findMostFrequent(dadosColetados);
      setEan(mostFrequent);
    };
  }, [visibleModalCamera]);
  const filtroEan = {
    campo: "ean",
    compare: "equal",
    valor: ean || "",
  };

  const chamada = () => {
    const eanExist = filtros.filter(x => x.campo == 'ean')
    if( eanExist) {}
  }
  useEffect(() => {
    console.log('ean', ean)
    if (ean != "") dispatch(postDadosFiltros([...filtros, filtroEan], "ContagemFisica"));
    setFirstId(contagemFisica[0]?.id)
  }, [ean]);

  
  
  useEffect(() => {
    console.log('teste', contagemFisica.length, ean)
    if (contagemFisica.length > 0 && ean != "") {
      const sla = contagemFisica.filter(item => item.ean === ean)
      console.log('sla', sla)
      console.log('first', firstId)
      dispatch(
        putContagemFisica({
          id: sla[0].id,
          qtde_contada: +sla[0].qtde_contada + 1
          ,
        })
      );
      // dispatch(postDadosFiltros([...filtros], "ContagemFisica"));
    }
  }, [firstId, ean]);


  useEffect(() => {
    setFirstId(contagemFisica[0]?.id)
    console.log('firstId435', firstId)
  }, [contagemFisica]);

  useEffect(() => {
    
    if (ean && contagemFisica.length === 0) {
      toast.warning("Item não encontrado!", {
        theme: "colored",
      });
      dispatch(postDadosFiltros([filtroClean], "ContagemFisica"));
     
    }
  }, [contagemFisica, ean]);
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
