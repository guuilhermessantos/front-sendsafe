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
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }: { open: boolean }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`

const ProdutoItem = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  input {
    flex: 1;
    padding: 8px;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background: #1abc9c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #16a085;
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

  // React.useEffect(() => {
  //   reset({ produtos })
  // }, [produtos])

  function parseValorUnitario(valor) {
    // Remove "R$ " e espaços em branco
    let num = valor.replace(/\s?R\$\s?/, '')
    // Remove pontos de milhares
    num = num.replace(/\./g, '')
    // Troca vírgula decimal por ponto
    num = num.replace(/,/g, '.')
    // Converte para número
    return parseFloat(num)
  }

  const onSubmit = async (data: FormValues) => {
    // Converte valorUnitario de string para número em cada produto
    const produtosConvertidos = data.produtos.map(produto => ({
      ...produto,
      valorUnitario: parseValorUnitario(produto.valorUnitario) // se a máscara usa vírgula decimal
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
        <h2>Editar Produtos da Nota {notaId}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <ProdutoItem key={field.id}>
              <input
                {...register(`produtos.${index}.nome`)}
                placeholder="Nome do Produto"
              />
              <input
                type="number"
                step="1"
                min={0}
                {...register(`produtos.${index}.quantidade`)}
                placeholder="Quantidade"
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
                    style={{
                      width: '8rem',
                      padding: '0.4rem',
                      fontSize: '1rem'
                    }}
                  />
                )}
              />
              <input type="hidden" {...register(`produtos.${index}.id`)} />
            </ProdutoItem>
          ))}

          <Button type="submit">Salvar</Button>
          <Button
            type="button"
            onClick={onClose}
            style={{ marginLeft: '12px', background: '#ccc', color: '#000' }}
          >
            Cancelar
          </Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  )
}
