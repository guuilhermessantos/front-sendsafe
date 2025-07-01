import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  CheckCircle,
  AlertTriangle,
  Package,
  FileText,
  ArrowRight
} from '@geist-ui/react-icons'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
  padding: 24px 0;
`

const Stepper = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`

const Step = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.textSecondary};
  font-size: 1.08rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary + '11' : 'transparent'};
  border-radius: 8px;
  padding: 6px 14px;
  transition: background 0.2s, color 0.2s;
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  width: 90%;
  max-width: 1100px;
  margin-bottom: 24px;
`

const StatusCard = styled.div`
  background: ${props => props.theme.colors.shape};
  border-radius: 12px;
  box-shadow: 0 2px 12px ${props => props.theme.colors.primary}11;
  padding: 18px 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
`

const StatusLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.95rem;
`

const StatusValue = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: bold;
`

const StatusIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.primary};
`

const MainGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 90%;
  max-width: 1100px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`

const Section = styled.div<{ active?: boolean }>`
  background: ${props => props.theme.colors.shape};
  border-radius: 12px;
  box-shadow: 0 2px 12px ${props => props.theme.colors.primary}11;
  padding: 20px 16px;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: ${({ active }) => (active === false ? 0.5 : 1)};
  pointer-events: ${({ active }) => (active === false ? 'none' : 'auto')};
  @media (max-width: 900px) {
    padding: 14px 6px;
  }
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`

const EtiquetaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 220px;
  overflow-y: auto;
  font-size: 0.98rem;
  li {
    padding: 6px 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 8px;
    &:last-child {
      border-bottom: none;
    }
  }
`

const EtiquetaInput = styled.input`
  width: 100%;
  padding: 14px 12px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  background: ${props => props.theme.colors.shapeLow};
  color: ${props => props.theme.colors.text};
  margin-bottom: 8px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: ${props => props.theme.colors.primaryHover};
  }
`

const ResultBox = styled.div<{ ok: boolean }>`
  background: ${({ ok, theme }) =>
    ok ? theme.colors.success + '22' : theme.colors.error + '22'};
  color: ${({ ok, theme }) => (ok ? theme.colors.success : theme.colors.error)};
  border-radius: 8px;
  padding: 14px 10px;
  font-weight: 600;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
`

const Instruction = styled.div`
  width: 90%;
  max-width: 700px;
  margin-bottom: 18px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.05rem;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 0.97rem;
  }
`

const MOCK_EMBALADAS: string[] = []

const Bipagem: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (!token) {
        router.replace('/login')
      }
    }
  }, [])

  // Etapa: 0 = bipar embaladas, 1 = bipar conferência
  const [step, setStep] = useState(0)
  const [embaladas, setEmbaladas] = useState<string[]>(MOCK_EMBALADAS)
  const [conferidas, setConferidas] = useState<string[]>([])
  const [input, setInput] = useState('')

  // Lógica de conferência
  const faltando = embaladas.filter(e => !conferidas.includes(e))
  const ok = faltando.length === 0 && conferidas.length > 0

  function handleAddEtiqueta(e: React.FormEvent) {
    e.preventDefault()
    const etq = input.trim().toUpperCase()
    if (!etq) return setInput('')
    if (step === 0) {
      if (!embaladas.includes(etq)) setEmbaladas(prev => [...prev, etq])
    } else {
      if (!conferidas.includes(etq)) setConferidas(prev => [...prev, etq])
    }
    setInput('')
  }

  function handleNextStep() {
    setStep(1)
    setInput('')
  }
  function handleReset() {
    setStep(0)
    setEmbaladas([])
    setConferidas([])
    setInput('')
  }

  return (
    <>
      <Head>
        <title>Bipagem | SendSafe</title>
      </Head>
      <Container>
        <Instruction>
          Siga as etapas para conferir as etiquetas de envio:
        </Instruction>
        <Stepper>
          <Step active={step === 0}>1. Bipar Embaladas</Step>
          <ArrowRight style={{ opacity: 0.5 }} />
          <Step active={step === 1}>2. Bipar Conferência</Step>
        </Stepper>
        <StatusGrid>
          <StatusCard>
            <StatusIcon>
              <Package />
            </StatusIcon>
            <StatusLabel>Embaladas</StatusLabel>
            <StatusValue>{embaladas.length}</StatusValue>
          </StatusCard>
          <StatusCard>
            <StatusIcon>
              <FileText />
            </StatusIcon>
            <StatusLabel>Conferidas</StatusLabel>
            <StatusValue>{conferidas.length}</StatusValue>
          </StatusCard>
          <StatusCard>
            <StatusIcon>
              <AlertTriangle />
            </StatusIcon>
            <StatusLabel>Faltando</StatusLabel>
            <StatusValue>{faltando.length}</StatusValue>
          </StatusCard>
          <StatusCard>
            <StatusIcon>
              {ok ? (
                <CheckCircle color="#22c55e" />
              ) : (
                <AlertTriangle color="#f87171" />
              )}
            </StatusIcon>
            <StatusLabel>Status</StatusLabel>
            <StatusValue>{ok ? 'OK' : 'Faltando'}</StatusValue>
          </StatusCard>
        </StatusGrid>
        <MainGrid>
          <Section active={step === 0}>
            <SectionTitle>1. Bipar Etiquetas Embaladas</SectionTitle>
            <form onSubmit={handleAddEtiqueta} style={{ width: '100%' }}>
              <EtiquetaInput
                placeholder="Bipe ou digite a etiqueta..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus={step === 0}
                disabled={step !== 0}
              />
            </form>
            <EtiquetaList>
              {embaladas.map(etq => (
                <li key={etq}>
                  <FileText style={{ fontSize: 16 }} /> {etq}
                </li>
              ))}
            </EtiquetaList>
            <button
              type="button"
              style={{
                marginTop: 10,
                padding: '10px 0',
                borderRadius: 8,
                background: '#2563eb',
                color: '#fff',
                fontWeight: 600,
                border: 'none',
                cursor: embaladas.length === 0 ? 'not-allowed' : 'pointer',
                opacity: embaladas.length === 0 ? 0.5 : 1,
                transition: 'opacity 0.2s'
              }}
              disabled={embaladas.length === 0}
              onClick={handleNextStep}
            >
              Avançar para Conferência
            </button>
          </Section>
          <Section active={step === 1}>
            <SectionTitle>2. Bipar Etiquetas para Conferência</SectionTitle>
            <form onSubmit={handleAddEtiqueta} style={{ width: '100%' }}>
              <EtiquetaInput
                placeholder="Bipe ou digite a etiqueta..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus={step === 1}
                disabled={step !== 1}
              />
            </form>
            <EtiquetaList>
              {conferidas.map(etq => (
                <li key={etq}>
                  <FileText style={{ fontSize: 16 }} /> {etq}
                </li>
              ))}
            </EtiquetaList>
            {conferidas.length > 0 && (
              <ResultBox ok={ok}>
                {ok ? (
                  <>
                    <CheckCircle /> Tudo conferido!
                  </>
                ) : (
                  <>
                    <AlertTriangle /> Faltando: {faltando.join(', ')}
                  </>
                )}
              </ResultBox>
            )}
            {step === 1 && (
              <button
                type="button"
                style={{
                  marginTop: 10,
                  padding: '10px 0',
                  borderRadius: 8,
                  background: '#e5e7eb',
                  color: '#222',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={handleReset}
              >
                Reiniciar Processo
              </button>
            )}
          </Section>
        </MainGrid>
      </Container>
    </>
  )
}

export default Bipagem
