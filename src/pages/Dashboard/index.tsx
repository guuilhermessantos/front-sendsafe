import React, { useEffect, useRef, useState } from 'react'
import { DivContainer } from './styled'
import styled, { keyframes } from 'styled-components'
import Pagination from '../../components/Pagination'
import * as Quagga from 'quagga'
import BarcodeReader from 'react-barcode-reader'
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  controlSwitch?: string
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: ${props => props.theme.colors?.arrow};
  border-radius: 8px;
  overflow: hidden;
  height: 100px;
`

const TableHeader = styled.thead`
  background-color: ${props => props.theme.colors?.primary};
  color: #fff;
`

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  color: white;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`

const TableBody = styled.tbody``

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors?.mode};
`

const TableCell = styled.td`
  padding: 12px 15px;
  font-size: 14px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #28a745;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover {
    background-color: #218838;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 100%;
  /* margin: 20px; */
  line-height: 1.5;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 1.125rem;
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 10px;
  }
`

const HighlightText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-right: 8px;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const NormalText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap; /* Não permite quebras de linha até o final do texto */

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

const Dashboard: React.FC<IProps> = ({ ...rest }) => {
  const data = [
    { id: 1, nome: 'João', idade: 28, cidade: 'São Paulo' },
    { id: 2, nome: 'Maria', idade: 22, cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Carlos', idade: 35, cidade: 'Belo Horizonte' },
    { id: 4, nome: 'Ana', idade: 27, cidade: 'Porto Alegre' }
  ]
  // const videoRef = useRef<HTMLDivElement>(null)

  const [etiqueta, setEtiqueta] = useState('')
  const [historico, setHistorico] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 20 // Supondo que você tenha 20 páginas
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // const [isCameraActive, setIsCameraActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false)

  useEffect(() => {
    // Detecta se o dispositivo é mobile
    setIsMobile(window.innerWidth <= 768) // Ajuste o valor conforme seu design
  }, [])

  // Função para iniciar QuaggaJS no mobile
  const startQuagga = () => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#scanner-container') // Elemento onde o vídeo será renderizado
        },
        decoder: {
          readers: [
            'code_128_reader',
            'ean_reader',
            'ean_13_reader',
            'upc_reader'
          ]
        }
      },
      err => {
        if (err) {
          console.log('Erro ao iniciar Quagga: ', err)
          return
        }
        Quagga.start()
      }
    )

    Quagga.onDetected(data => {
      console.log('Código detectado: ', data.codeResult.code)
      // Aqui você pode fazer o que for necessário com o código detectado
    })
  }

  // Função para ativar/desativar a câmera
  const toggleCamera = () => {
    if (isCameraActive) {
      // Quagga.stop()
      setIsCameraActive(false)
    } else {
      startQuagga()
      setIsCameraActive(true)
    }
  }

  // Função para ler o código com o scanner físico (web)
  const handleBarcodeRead = (data: string) => {
    console.log('Código de barras lido: ', data)
    // Aqui você pode fazer o que for necessário com o código detectado
  }

  useEffect(() => {
    if (isCameraActive) {
      startCamera()
    } else {
      stopQuagga() // Para o Quagga quando desativar a câmera
    }
  }, [isCameraActive])

  const startCamera = async () => {
    setError(null)

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError('Seu navegador não suporta acesso à câmera.')
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: 'environment' } } // Força câmera traseira
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()

        startQuagga() // Inicia QuaggaJS após a câmera abrir
      }
    } catch (err) {
      console.error('Erro ao acessar a câmera:', err)
      setError(
        'Erro ao acessar a câmera. Verifique as permissões do navegador!'
      )
    }
  }

  // const startQuagga = () => {
  //   Quagga.init(
  //     {
  //       inputStream: {
  //         type: 'LiveStream',
  //         target: videoRef.current, // Usa o vídeo como input
  //         constraints: { facingMode: 'environment' }
  //       },
  //       decoder: {
  //         readers: ['code_128_reader', 'ean_reader', 'ean_8_reader'] // Suporta Code-128, EAN-13, EAN-8
  //       }
  //     },
  //     err => {
  //       if (err) {
  //         console.error('Erro ao iniciar Quagga:', err)
  //         return
  //       }
  //       Quagga.start()
  //     }
  //   )

  //   Quagga.onDetected(data => {
  //     alert(`Código de barras detectado: ${data.codeResult.code}`)
  //     stopQuagga() // Para após detectar um código
  //     setIsCameraActive(false) // Fecha a câmera
  //   })
  // }

  const stopQuagga = () => {
    // Quagga.stop()
  }

  const handleBipagem = () => {
    if (!etiqueta.trim()) return
    setHistorico([{ ...historico }, { sequencia: etiqueta }])
    setEtiqueta('')
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <DivContainer>
      {/* <div className="div-bubbles">
        {test.map((item, index) => (
          <Bubbles key={index} sequencia={item}></Bubbles>
        ))}
      </div> */}
      <div className="div-info">
        <div className="info">
          <TextWrapper>
            <NormalText>
              <HighlightText>Bipe</HighlightText>a etiqueta, e confira o status
              do seu pedido! 🚚✅
            </NormalText>
          </TextWrapper>
          <InputContainer>
            <Input
              type="text"
              placeholder="Bipe a etiqueta..."
              value={etiqueta}
              onChange={e => setEtiqueta(e.target.value)}
            />
            <Button onClick={handleBipagem}>Enviar</Button>
          </InputContainer>
          {/* Condicionalmente renderiza o botão de ativar/desativar câmera em dispositivos móveis */}
          {isMobile && !isCameraActive && (
            <button onClick={toggleCamera}>Ativar Câmera</button>
          )}
          {isMobile && isCameraActive && (
            <button onClick={toggleCamera}>Desativar Câmera</button>
          )}

          {/* Se não for mobile, exibe o leitor de código de barras */}
          {!isMobile && <BarcodeReader onBarcodeRead={handleBarcodeRead} />}

          {/* Container onde o QuaggaJS vai renderizar a câmera */}
          <div
            id="scanner-container"
            style={{ width: '100%', height: '400px' }}
          ></div>
        </div>
      </div>

      <div className="right">
        <div className="info-table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Sequencia</TableHeaderCell>
                <TableHeaderCell>Num Etiqueta</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Data Hora</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.idade}</TableCell>
                  <TableCell>{row.cidade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </DivContainer>
  )
}

export default Dashboard
