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

const Dashboard: React.FC<IProps> = ({ ...rest }) => {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [fileName, setFileName] = useState('')

  const [historico, setHistorico] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 20 // Supondo que você tenha 20 páginas
  // const [isCameraActive, setIsCameraActive] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [tags, setTags] = useState<IGetTag[]>([])
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    totalPages: 1,
    totalItems: 0
  })

  const [produtosSelecionados, setProdutosSelecionados] = useState([])
  const [notaIdSelecionada, setNotaIdSelecionada] = useState<number | null>(1)
  const [openModal, setOpenModal] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors }
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
    // Detecta se o dispositivo é mobile
    setIsMobile(window.innerWidth <= 768) // Ajuste o valor conforme seu design
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

  // const onSubmit = async (data: FormValues) => {
  //   const formData = new FormData()

  //   // Adiciona todos os arquivos XML ao FormData
  //   Array.from(data.xml).forEach((file, index) => {
  //     formData.append('xmls', file) // o nome 'xmls' deve bater com o campo esperado no backend
  //   })

  //   try {
  //     const response = await axios.post('/api/upload-xml', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })
  //     console.log('Upload realizado com sucesso:', response.data)
  //   } catch (error) {
  //     console.error('Erro no upload:', error)
  //   }
  // }

  const onSubmit = async (data: IFile) => {
    try {
      console.log('data.xml', data.files)
      // 1. Obtém o arquivo do input

      const file = data.files[0]

      // 2. Validações básicas
      if (!file) {
        toast.error('Nenhum arquivo selecionado')
        return
      }

      if (!file.name.endsWith('.xml')) {
        toast.error('Por favor, selecione um arquivo XML válido')
        return
      }

      // 3. Prepara o FormData como seu backend espera
      const formData = new FormData()
      // Adiciona todos os arquivos XML ao FormData
      Array.from(data.files).forEach((file, index) => {
        formData.append('files', file) // o nome 'xmls' deve bater com o campo esperado no backend
      })

      console.log('formData', formData)
      // 4. Envia para o endpoint /upload
      const response = await api.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Importante para uploads
        }
      })

      // 5. Trata a resposta do seu UploadController
      if (response.data.chave) {
        toast.success(`NFe ${response.data.chave} cadastrada com sucesso!`)
      } else {
        toast.success('XML processado com sucesso!')
      }

      // 6. Atualiza a UI (opcional)
      setFileName('')
    } catch (error) {
      // 7. Trata erros específicos do seu controller
      const backendError =
        error.response?.data?.error ||
        'Erro ao processar XML. Verifique o arquivo.'
      toast.error(backendError)
    }
  }

  return (
    <DivContainer>
      {openModal && (
        <ModalEditNota
          open={openModal}
          page={pagination.page}
          onClose={() => setOpenModal(false)}
          notaId={notaIdSelecionada}
          produtos={produtosSelecionados}
          onUpdated={() => fetchTags(pagination.page)}
        />
      )}
      <div className="div-info">
        <div className="info">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Label htmlFor="file-upload">📁 Selecionar XML</Label>
              <Controller
                name="files"
                control={control}
                rules={{
                  required: 'Selecione um arquivo XML'
                  // validate: {
                  //   validType: (files: FileList) =>
                  //     files[0]?.type.includes('xml') || 'Arquivo deve ser XML',
                  //   maxSize: (files: FileList) =>
                  //     files[0]?.size <= 5 * 1024 * 1024 || 'Tamanho máximo: 5MB'
                  // }
                }}
                render={({ field: { onChange, value, ...field } }) => (
                  <HiddenInput
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".xml"
                    onChange={e => {
                      onChange(e.target.files)
                      setFileName(e.target.files?.[0]?.name || '')
                    }}
                    {...field}
                  />
                )}
              />
              {FileName && <FileName>Arquivo selecionado: {fileName}</FileName>}
              <div>
                <Button type="submit">Enviar</Button>
              </div>
            </InputContainer>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="info-table">
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
                  <TableCell>
                    <Download
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDownload(row.id)}
                      className="svg-dl"
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => abrirModal(row.produtos, row.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    onClick={() => abrirModal(row.produtos, row.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {row.chave}
                  </TableCell>
                  <TableCell
                    onClick={() => abrirModal(row.produtos, row.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {row.fornecedor}
                  </TableCell>
                  <TableCell
                    onClick={() => abrirModal(row.produtos, row.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {format(parseISO(row.dataEmissao), 'dd/MM/yyyy HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </DivContainer>
  )
}

export default Dashboard
