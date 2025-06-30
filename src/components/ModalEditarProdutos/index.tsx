import React from 'react'
import styled from 'styled-components'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import api from '../../services/api'
import { NumericFormat } from 'react-number-format'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 41, 59, 0.45);
  display: ${({ open }: { open: boolean }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 16px;
`

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.shape || '#fff'};
  padding: 2.8rem 2.5rem 2.2rem 2.5rem;
  border-radius: 18px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 40px rgba(30, 41, 59, 0.18);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  @media (max-width: 700px) {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    max-width: 98vw;
    min-width: 0;
  }
`

const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary || '#2563eb'};
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
  letter-spacing: 0.01em;
`

const ProdutoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-height: 45vh;
  overflow-y: auto;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    max-height: 55vh;
  }
`

const ProdutoItem = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  background: ${({ theme }) => theme.colors.shapeLow || '#f3f4f6'};
  border-radius: 8px;
  padding: 0.7rem 0.5rem;
  box-shadow: 0 1px 6px rgba(30, 41, 59, 0.04);
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    padding: 0.5rem 0.2rem;
  }
  input,
  .numeric-input {
    background: #fff;
    border: 1.5px solid #e5e7eb;
    border-radius: 6px;
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
    color: #222;
    outline: none;
    transition: border 0.2s;
    width: 100%;
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary || '#2563eb'};
    }
  }
  .numeric-input {
    width: 100%;
    min-width: 0;
    max-width: 240px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
`

const ProdutoNomeInput = styled.input`
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  color: #222;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary || '#2563eb'};
  }
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  margin-top: 1.2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    margin-top: 0.7rem;
  }
`

const Button = styled.button`
  padding: 0.7rem 1.7rem;
  background: ${({ theme }) => theme.colors.primary || '#2563eb'};
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.08);
  transition: background 0.18s, box-shadow 0.18s;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover || '#1d4ed8'};
    box-shadow: 0 4px 16px rgba(30, 41, 59, 0.13);
  }
  &.cancel {
    background: #e5e7eb;
    color: #222;
    &:hover {
      background: #f3f4f6;
      color: #111;
    }
  }
`

type Produto = {
  id: number
  nome: string
  quantidade: number
  valorUnitario: number
}

type FormValues = {
  produtos: Produto[]
}

interface Props {
  open: boolean
  onClose: () => void
  notaId: number
  produtos: Produto[]
  onUpdated: any
  page: number
}

export const ModalEditNota: React.FC<Props> = ({
  open,
  onClose,
  notaId,
  produtos,
  onUpdated,
  page
}) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { produtos }
  })

  const { fields } = useFieldArray({
    control,
    name: 'produtos'
  })

  React.useEffect(() => {
    reset({ produtos })
  }, [produtos])

  function parseValorUnitario(valor) {
    let num = valor.replace(/\s?R\$\s?/, '')
    num = num.replace(/\./g, '')
    num = num.replace(/,/g, '.')
    return parseFloat(num)
  }

  const onSubmit = async (data: FormValues) => {
    const produtosConvertidos = data.produtos.map(produto => ({
      ...produto,
      valorUnitario: parseValorUnitario(produto.valorUnitario)
    }))
    await api.put(`/nota-fiscal/${notaId}`, {
      produtos: produtosConvertidos
    })
    onUpdated(page)
    onClose()
  }

  return (
    <ModalOverlay open={open}>
      <ModalContent>
        <ModalTitle>Editar Produtos da Nota {notaId}</ModalTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProdutoList>
            {fields.map((field, index) => (
              <ProdutoItem key={field.id}>
                <ProdutoNomeInput
                  {...register(`produtos.${index}.nome`)}
                  placeholder="Nome do Produto"
                  autoComplete="off"
                  title={fields[index]?.nome || ''}
                />
                <input
                  type="number"
                  step="1"
                  min={0}
                  {...register(`produtos.${index}.quantidade`)}
                  placeholder="Quantidade"
                  autoComplete="off"
                />
                <Controller
                  name={`produtos.${index}.valorUnitario`}
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <NumericFormat
                      {...field}
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="R$ "
                      fixedDecimalScale
                      decimalScale={2}
                      allowNegative={false}
                      placeholder="R$ 0,00"
                      className="numeric-input"
                      style={{ fontSize: '1rem' }}
                    />
                  )}
                />
                <input type="hidden" {...register(`produtos.${index}.id`)} />
              </ProdutoItem>
            ))}
          </ProdutoList>
          <ButtonRow>
            <Button type="submit">Salvar</Button>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancelar
            </Button>
          </ButtonRow>
        </form>
      </ModalContent>
    </ModalOverlay>
  )
}
