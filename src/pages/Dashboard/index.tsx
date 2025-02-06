import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  DivContainer,
  HighlightText,
  Input,
  InputContainer,
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
import { XCircle } from '@geist-ui/react-icons'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  controlSwitch?: string
}

interface ITag {
  tag: string
}

interface IGetTag {
  id: number
  tag: string
  status: string
  data_hora: string
}

interface IPagination {
  page: number
  totalPages: number
  totalItems: number
}

const Dashboard: React.FC<IProps> = ({ ...rest }) => {
  const data = [
    { id: 1, nome: 'João', idade: 28, cidade: 'São Paulo' },
    { id: 2, nome: 'Maria', idade: 22, cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Carlos', idade: 35, cidade: 'Belo Horizonte' },
    { id: 4, nome: 'Ana', idade: 27, cidade: 'Porto Alegre' }
  ]
  // const videoRef = useRef<HTMLDivElement>(null)

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

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<ITag>({
    criteriaMode: 'all',
    mode: 'onBlur'
  })

  const fetchTags = async (page: number) => {
    try {
      const response = await api.get('/historical-tag', {
        params: {
          page: page, // Passando a página correta
          limit: 8 // Definindo um limite de itens por página
        }
      })
      const data = response.data
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
  }, [pagination.page]) // A cada mudança de página, as tags serão recarregadas

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

  const onSubmit = async (data: ITag) => {
    try {
      const response = await api.post('/historical-tag', {
        tag: data.tag,
        status: 'ativo',
        data_hora: new Date().toISOString()
      })
      console.log('response', response)

      toast.success(`etiqueta criada: ${data.tag}`)
      // Após o POST, recarregar a tabela para pegar os dados atualizados
      fetchTags(pagination.page) // Recarrega a tabela na página atual
    } catch (error) {
      toast.error(`etiqueta: ${data.tag}`)
    }
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
              do seu pedido! 🚚 ✅
            </NormalText>
          </TextWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Input
                type="text"
                placeholder="Bipe a etiqueta..."
                {...register('tag', {
                  required: 'O campo é obrigatório'
                })}
              />
              {isMobile ? (
                <ModalCamera onSubmit={onSubmit} />
              ) : (
                <Button type="submit">Enviar</Button>
              )}
            </InputContainer>
          </form>
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
              {tags.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.tag}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    {format(parseISO(row.data_hora), 'dd/MM/yyyy HH:mm:ss')}
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
