import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  DivContainer,
  FileName,
  HiddenInput,
  HighlightText,
  Input,
  InputContainer,
  Label,
  NormalText,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TextWrapper
} from './styled'
import styled, { keyframes } from 'styled-components'
import Pagination from '../../components/Pagination'
import Quagga from 'quagga'
import BarcodeReader from 'react-barcode-reader'
import ModalCamera from '../../components/modalCamera'
import { Modal } from '@geist-ui/react'
import { XCircle, Download } from '@geist-ui/react-icons'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
import { ModalEditNota } from '../../components/ModalEditarProdutos'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  controlSwitch?: string
}

interface IFile {
  files: FileList
}

interface IGetTag {
  download: any
  id: number
  chave: string
  fornecedor: string
  dataEmissao: string
  produtos: any
}

interface IPagination {
  page: number
  totalPages: number
  totalItems: number
}

type Produto = {
  id: number
  etiqueta: string
  status: string
  dataHora: string
}

const Section = styled.div`
  background: ${props => props.theme.colors.shape};
  border-radius: 16px;
  box-shadow: 0 2px 16px ${props => props.theme.colors.primary}11;
  width: 90%;
  max-width: 1100px;
  margin-bottom: 32px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
  padding: 32px 0;
  @media (max-width: 900px) {
    padding: 16px 0 8px 0;
  }
`

const TopSection = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  gap: 18px;
  align-items: stretch;
  margin-bottom: 8px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 6px;
    width: 100%;
    max-width: 100%;
    padding: 0 4px;
  }
`

const UploadSection = styled(Section)`
  flex: 4;
  min-width: 320px;
  max-width: 900px;
  margin-bottom: 0;
  padding: 16px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 0;
    padding: 10px 4px 8px 4px;
  }
`

const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 0.35;
  min-width: 130px;
  max-width: 180px;
  justify-content: stretch;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: row;
    gap: 8px;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: stretch;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
    align-items: stretch;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  width: 90%;
  max-width: 1100px;
  margin-bottom: 32px;
`

const Card = styled.div`
  background: ${props => props.theme.colors.shape};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${props => props.theme.colors.primary}11;
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
  height: 100%;
  justify-content: center;
  @media (max-width: 900px) {
    min-width: 90px;
    max-width: 120px;
    font-size: 0.95rem;
    padding: 6px 6px;
  }
  @media (max-width: 600px) {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    font-size: 0.9rem;
    padding: 4px 4px;
  }
`

const CardLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.95rem;
`

const CardValue = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 1.15rem;
  font-weight: bold;
`

const TableSection = styled(Section)`
  padding: 24px 8px 0 8px;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
  width: 90%;
  max-width: 1100px;
  box-sizing: border-box;
  overflow-x: visible;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    padding: 12px 0 0 0;
    min-height: 420px;
  }
  @media (max-width: 600px) {
    padding: 8px 0 0 0;
    min-height: 320px;
  }
`

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 0;
  @media (max-width: 900px) {
    width: 100vw;
    margin-left: -16px;
    padding-right: 8px;
  }
  @media (max-width: 600px) {
    width: 100vw;
    margin-left: -8px;
    padding-right: 4px;
  }
`

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-bottom: 18px;
  background: transparent;
`

const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 32px auto;
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const SummaryCard = styled.div`
  background: ${props => props.theme.colors.shape};
  border-radius: 12px;
  box-shadow: 0 2px 8px ${props => props.theme.colors.primary}11;
  padding: 18px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 180px;
  margin-bottom: 8px;
`

const SummaryLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 4px;
`

const SummaryValue = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
`

const UploadLabelBox = styled.label`
  width: 100%;
  min-height: 80px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.shapeLow};
  border: 2px dashed ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s;
  position: relative;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}11;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 16px 6px 10px 6px;
  &.drag-active {
    background: ${({ theme }) => theme.colors.primary + '11'};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 900px) {
    min-height: 60px;
    padding: 10px 2px 8px 2px;
  }
  @media (max-width: 600px) {
    min-height: 40px;
    padding: 6px 1px 4px 1px;
  }
`

const UploadIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`

const UploadLabel = styled(Label)`
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: none;
  padding: 0;
  margin-bottom: 6px;
  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`

const UploadFileName = styled(FileName)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.97rem;
  font-style: italic;
`

const UploadButton = styled(Button)`
  width: 100%;
  margin: 0;
  margin-top: 10px;
  padding: 12px 0;
  font-size: 1rem;
  border-radius: 8px;
  @media (max-width: 900px) {
    padding: 10px 0;
    font-size: 0.95rem;
  }
  @media (max-width: 600px) {
    padding: 8px 0;
    font-size: 0.9rem;
  }
`

const Dashboard: React.FC<IProps> = ({ ...rest }) => {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [fileName, setFileName] = useState('')

  const [historico, setHistorico] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 20 // Supondo que você tenha 20 páginas
  // const [isCameraActive, setIsCameraActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [tags, setTags] = useState<IGetTag[]>([])
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    totalPages: 1,
    totalItems: 0
  })

  const [produtosSelecionados, setProdutosSelecionados] = useState([])
  const [notaIdSelecionada, setNotaIdSelecionada] = useState<number | null>(1)
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
    reset
  } = useForm<IFile>({
    criteriaMode: 'all',
    mode: 'onBlur'
  })

  const abrirModal = async (produtos, notaId) => {
    setNotaIdSelecionada(notaId)
    setProdutosSelecionados(produtos)
    setOpenModal(true)
  }

  const fetchTags = async (page: number) => {
    try {
      const response = await api.get('/nota-fiscal', {
        params: {
          page: page, // Passando a página correta
          limit: 8 // Definindo um limite de itens por página
        }
      })
      const data = response.data
      console.log('data', data)
      setTags(data.data)
      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalItems: data.totalItems
      })
    } catch (error) {
      console.error('Erro ao buscar tags:', error)
    }
  }

  useEffect(() => {
    fetchTags(pagination.page) // Carregar as tags ao montar o componente
  }, [pagination.page]) // A cada mudança de página, as tags serão recarregadas]
  const handleDownload = async notaId => {
    try {
      // const response = await fetch(
      //   `http://localhost:5000/nota-fiscal/${notaId}/xml-download`
      // )

      const response = await api.get(`/nota-fiscal/${notaId}/xml-download`, {
        responseType: 'blob' // importante para baixar arquivos
      })

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `nota-${notaId}.xml`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
      alert('Erro ao baixar XML')
    }
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePageChange = (page: number) => {
    setPagination(prevState => ({
      ...prevState,
      page
    }))
  }

  useEffect(() => {
    console.log('tags', tags)
  }, [tags])

  const onSubmit = async (data: IFile) => {
    try {
      setLoading(true)
      const file = data.files[0]
      if (!file) {
        toast.error('Nenhum arquivo selecionado')
        setLoading(false)
        return
      }
      if (!file.name.endsWith('.xml')) {
        toast.error('Por favor, selecione um arquivo XML válido')
        setLoading(false)
        return
      }
      const formData = new FormData()
      Array.from(data.files).forEach(file => {
        formData.append('files', file)
      })
      await api.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      toast.success('XML enviado com sucesso!')
      setFileName('')
      reset()
      fetchTags(pagination.page)
    } catch (error) {
      toast.error('Erro ao enviar XML')
    } finally {
      setLoading(false)
    }
  }

  // Drag & Drop Handlers
  const handleDrag = (e: React.DragEvent<Element>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    else if (e.type === 'dragleave') setDragActive(false)
  }
  const handleDrop = (e: React.DragEvent<Element>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name)
      if (inputRef.current) {
        const dt = new DataTransfer()
        dt.items.add(e.dataTransfer.files[0])
        inputRef.current.files = dt.files
      }
    }
  }

  // Resumo
  const totalNotas = pagination.totalItems
  const fornecedoresUnicos = Array.from(new Set(tags.map(t => t.fornecedor)))
    .length
  const ultimaNota =
    tags.length > 0
      ? tags.reduce((a, b) => (a.dataEmissao > b.dataEmissao ? a : b))
      : null
  const ultimaData = ultimaNota
    ? format(parseISO(ultimaNota.dataEmissao), 'dd/MM/yyyy HH:mm:ss')
    : '--'

  return (
    <PageContainer>
      <TopSection>
        <UploadSection>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <UploadLabelBox
              className={dragActive ? 'drag-active' : ''}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <UploadIcon>📁</UploadIcon>
              <span
                style={{
                  fontWeight: 600,
                  color: '#2563eb',
                  fontSize: '1.08rem',
                  marginBottom: 6
                }}
              >
                Selecione ou arraste o XML aqui
              </span>
              <Controller
                name="files"
                control={control}
                rules={{ required: 'Selecione um arquivo XML' }}
                render={({ field: { onChange, ...field } }) => (
                  <HiddenInput
                    id="file-upload"
                    type="file"
                    accept=".xml"
                    ref={inputRef}
                    onChange={e => {
                      onChange(e.target.files)
                      setFileName(e.target.files?.[0]?.name || '')
                    }}
                    name={field.name}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                  />
                )}
              />
              {fileName && (
                <UploadFileName>Arquivo selecionado: {fileName}</UploadFileName>
              )}
            </UploadLabelBox>
            <UploadButton type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </UploadButton>
          </form>
        </UploadSection>
        <CardsColumn>
          <Card>
            <CardLabel>Total de Notas</CardLabel>
            <CardValue>{totalNotas}</CardValue>
          </Card>
          <Card>
            <CardLabel>Fornecedores Únicos</CardLabel>
            <CardValue>{fornecedoresUnicos}</CardValue>
          </Card>
          <Card>
            <CardLabel>Último Envio</CardLabel>
            <CardValue>{ultimaData}</CardValue>
          </Card>
        </CardsColumn>
      </TopSection>
      <TableSection>
        {!isMobile && (
          <TableWrapper>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Download</TableHeaderCell>
                  <TableHeaderCell>id</TableHeaderCell>
                  <TableHeaderCell>Chave</TableHeaderCell>
                  <TableHeaderCell>Fornecedor</TableHeaderCell>
                  <TableHeaderCell>Data Hora Emissão</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tags.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className="icon-cell">
                      <Download
                        onClick={() => handleDownload(row.id)}
                        className="icon-download"
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.chave}</TableCell>
                    <TableCell>{row.fornecedor}</TableCell>
                    <TableCell>
                      {format(parseISO(row.dataEmissao), 'dd/MM/yyyy HH:mm:ss')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        )}
        {isMobile && (
          <>
            <div
              style={{
                width: '100%',
                maxHeight: '60vh',
                overflowY: 'auto',
                padding: '0.5rem 0.1rem',
                background: '#f7f7fa',
                borderRadius: '1rem',
                marginBottom: '0.7rem',
                border: 'none'
              }}
            >
              {tags.map(row => (
                <div
                  key={row.id}
                  style={{
                    background: '#fff',
                    borderRadius: '0.9rem',
                    boxShadow: '0 1px 6px #0001',
                    marginBottom: '1.1rem',
                    padding: '1.1rem 1rem 0.8rem 1rem',
                    width: '100%',
                    border: '1px solid #ececec',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.7rem'
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: '#2563eb',
                        fontSize: '1.08rem',
                        minWidth: 90
                      }}
                    >
                      Download
                    </span>
                    <Download
                      onClick={() => handleDownload(row.id)}
                      className="icon-download"
                      style={{
                        cursor: 'pointer',
                        fontSize: 28,
                        color: '#2563eb',
                        background: '#e8f0fe',
                        borderRadius: '50%',
                        padding: 6
                      }}
                    />
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: '#888',
                        fontSize: '1rem',
                        minWidth: 90
                      }}
                    >
                      Fornecedor
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: '#222',
                        fontSize: '1.08rem'
                      }}
                    >
                      {row.fornecedor}
                    </span>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: '#888',
                        fontSize: '1rem',
                        minWidth: 90
                      }}
                    >
                      Data
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: '#222',
                        fontSize: '1.08rem'
                      }}
                    >
                      {format(parseISO(row.dataEmissao), 'dd/MM/yyyy HH:mm:ss')}
                    </span>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: '#888',
                        fontSize: '1rem',
                        minWidth: 90
                      }}
                    >
                      Chave
                    </span>
                    <span
                      style={{
                        wordBreak: 'break-all',
                        color: '#444',
                        fontSize: '0.98rem'
                      }}
                    >
                      {row.chave}
                    </span>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: '#888',
                        fontSize: '1rem',
                        minWidth: 90
                      }}
                    >
                      ID
                    </span>
                    <span style={{ color: '#444', fontSize: '0.98rem' }}>
                      {row.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                width: '100%',
                marginTop: '0.2rem',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </TableSection>
    </PageContainer>
  )
}

export default Dashboard
