import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react'
import { Button, Modal } from './style'
import { XCircle } from '@geist-ui/react-icons'
import Quagga from 'quagga'

import { toast } from 'react-toastify'

interface IProps {
  setEtiqueta?: any

  cameraRef?: any
}

const ModalCamera = ({
  setEtiqueta,

  cameraRef
}: IProps) => {
  const [detected, setDetected] = useState(false)
  const [dadosColetados, setDadosColetados] = useState<string[]>([])
  const [visibleModalCamera, setVisibleModalCamera] = useState(false)
  // const eanExist = filtros.filter(item => item.campo === 'ean')

  const initReader = () => {
    setVisibleModalCamera(true)
  }

  useEffect(() => {
    if (visibleModalCamera && cameraRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: cameraRef.current,
            constraints: {
              width: 1280,
              height: 720,
              facingMode: 'environment',
              focusMode: 'continuous', // Mantém o foco automático contínuo
              advanced: [{ focusMode: 'continuous' }]
            }
          },
          decoder: {
            readers: ['ean_reader', 'code_128_reader', 'code_39_reader']
          }
        },
        err => {
          if (err) {
            console.error('Quagga initialization error: ', err)
            return
          }
          Quagga.start()
          Quagga.onDetected(data => {
            if (!detected) {
              setDadosColetados(prev => [...prev, data.codeResult.code])
              setDetected(true)
            }
          })
          console.log('Initialization finished. Ready to start')
        }
      )
    }
  }, [visibleModalCamera])

  useEffect(() => {
    if (detected) {
      setTimeout(() => {
        Quagga.stop()
        handleDetection()
        setDetected(false)
      }, 500)
    }
  }, [detected])

  const handleDetection = () => {
    setVisibleModalCamera(false)
    const mostFrequentCode = findMostFrequent(dadosColetados)
    handleData(mostFrequentCode)
  }

  const findMostFrequent = (arr: string[]): string | null => {
    if (!arr || arr.length === 0) {
      return null
    }
    const frequency = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    let maxCount = 0
    let mostFrequent = null
    for (const num in frequency) {
      if (frequency[num] > maxCount) {
        maxCount = frequency[num]
        mostFrequent = num
      }
    }
    setDadosColetados([])
    return mostFrequent
  }

  const handleData = (mostFrequent: string) => {
    console.log('mostFrequent', mostFrequent)
    setEtiqueta(mostFrequent)
  }

  // useEffect(() => {
  //   dispatch(getContagemFisica({ ...filtros }));
  // }, [contagemFisica, filtros, dispatch]);

  return (
    <div>
      <Button className="button" onClick={initReader}>
        <i className="bx bx-barcode-reader" />
      </Button>
      {visibleModalCamera && (
        <Modal className="modal">
          <XCircle onClick={() => setVisibleModalCamera(false)} />
          <div id="camera" ref={cameraRef} className="camera">
            <div className="backCamera1"></div>
            <div className="backCamera2"></div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ModalCamera
