import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Users, Info } from '@geist-ui/react-icons'
import confetti from 'canvas-confetti'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
import CountUp from 'react-countup'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: none; }
`

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) =>
    `linear-gradient(120deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 100%)`};
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 700px) {
    padding-bottom: 1rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2rem 0 2rem;
  position: relative;
  animation: ${fadeIn} 0.7s;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 0.5rem 0 0.5rem;
    gap: 1.2rem;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`

const ServiceBadge = styled.span`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.arrow};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  padding: 7px 22px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.secondary}22;
  letter-spacing: 1px;
  opacity: 0.95;
  position: absolute;
  left: 50%;
  top: 18px;
  transform: translateX(-50%);
  z-index: 2;
`

const QuickMenu = styled.div`
  display: flex;
  gap: 18px;
  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`

const QuickCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}11;
  padding: 1rem 1.5rem;
  min-width: 90px;
  min-height: 48px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    box-shadow: 0 4px 24px ${({ theme }) => theme.colors.primary}33;
    transform: translateY(-4px) scale(1.04);
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  & > .icon {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }
  @media (max-width: 500px) {
    padding: 0.7rem 0.7rem;
    min-width: 70px;
    font-size: 0.85rem;
  }
`

const ServiceBadgeCard = styled.span`
  display: block;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textSecondary || '#888'};
  font-size: 0.85rem;
  font-weight: 400;
  border-radius: 0;
  background: none;
  box-shadow: none;
  letter-spacing: 0.2px;
  text-align: center;
  opacity: 0.85;
`

const MainSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  animation: ${fadeIn} 0.8s 0.1s backwards;
  @media (max-width: 700px) {
    margin-top: 1rem;
    padding: 0 0.2rem;
    gap: 1rem;
  }
`

const HeroCard = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.primary}22 0%, ${theme.colors.secondary}22 100%)`};
  border-radius: 2rem;
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.primary}22;
  padding: 3.5rem 2rem 2.5rem 2rem;
  min-width: 220px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 420px;
  border: 2.5px solid ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.2s;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  animation: ${fadeIn} 0.9s 0.2s backwards;
  @media (max-width: 700px) {
    padding: 2rem 0.5rem 1.2rem 0.5rem;
    min-width: 160px;
    width: 98vw;
    margin-bottom: 1rem;
  }
`

const Mascot = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 18px;
  animation: mascotFlyIn 1.2s cubic-bezier(0.4, 2, 0.6, 1);
  @keyframes mascotFlyIn {
    0% {
      transform: translateY(60px) scale(0.7);
      opacity: 0;
    }
    60% {
      transform: translateY(-12px) scale(1.08);
      opacity: 1;
    }
    80% {
      transform: translateY(6px) scale(0.98);
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
`

const MascotAnimated = styled(Mascot)`
  animation: mascot-bounce 1.5s infinite cubic-bezier(0.6, 0, 0.4, 1);
  @keyframes mascot-bounce {
    0%,
    100% {
      transform: translateY(0) scale(1, 1);
    }
    20% {
      transform: translateY(-12px) scale(1.04, 0.96);
    }
    40% {
      transform: translateY(-7px) scale(0.98, 1.02);
    }
    60% {
      transform: translateY(-2px) scale(1.01, 0.99);
    }
  }
  .mascot-arm-wave {
    transform-origin: 20px 70px;
    animation: mascot-arm-wave 1.5s infinite cubic-bezier(0.6, 0, 0.4, 1);
  }
  @keyframes mascot-arm-wave {
    0%,
    100% {
      transform: rotate(-18deg);
    }
    20% {
      transform: rotate(-38deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(-24deg);
    }
  }
  .mascot-blink {
    animation: mascot-blink 3.2s infinite;
    transform-origin: center;
  }
  @keyframes mascot-blink {
    0%,
    92%,
    100% {
      transform: scaleY(1);
    }
    94%,
    98% {
      transform: scaleY(0.15);
    }
  }
`

const MascotCute = styled(Mascot)`
  animation: mascot-bounce 1.6s infinite cubic-bezier(0.6, 0, 0.4, 1);
  @keyframes mascot-bounce {
    0%,
    100% {
      transform: translateY(0) scale(1, 1);
    }
    20% {
      transform: translateY(-10px) scale(1.04, 0.96);
    }
    40% {
      transform: translateY(-6px) scale(0.98, 1.02);
    }
    60% {
      transform: translateY(-2px) scale(1.01, 0.99);
    }
  }
`

const HeroNumber = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
  font-size: 4.5rem;
  line-height: 1;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}22;
  @media (max-width: 700px) {
    font-size: 2.2rem;
  }
`

const HeroLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  font-size: 1.7rem;
  margin-top: 12px;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`

const UpdateBadge = styled.span`
  position: absolute;
  top: 24px;
  right: 32px;
  background: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  padding: 6px 18px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}11;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    top: 10px;
    right: 10px;
    font-size: 0.8rem;
    padding: 4px 10px;
  }
`

const StatsGrid = styled.div`
  width: 100%;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s 0.3s backwards;
  @media (max-width: 700px) {
    gap: 0.7rem;
    margin-bottom: 1rem;
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 1.1rem;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}11;
  padding: 1.2rem 1rem;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  @media (max-width: 700px) {
    padding: 0.7rem 0.3rem;
    min-height: 60px;
  }
`

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2px;
`

const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-size: 2.2rem;
`

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 1.1rem;
`

const ActionsBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-bottom: 24px;
  animation: ${fadeIn} 1.1s 0.4s backwards;
`

const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.arrow};
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}22;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: ${({ theme }) =>
      theme.colors.primaryHover || theme.colors.primary};
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary}33;
  }
`

const ExclusiveServicesSection = styled.section`
  width: 100%;
  max-width: 700px;
  min-width: 350px;
  margin: 0 auto 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.shape || '#f4f6fa'};
  border-radius: 16px;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}11;
  padding: 8px 0 4px 0;
`

const ExclusiveTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.98rem;
  font-weight: 600;
  margin: 12px 0 8px 0;
  letter-spacing: 0.1px;
  text-align: center;
`

const ExclusiveCardsRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (max-width: 500px) {
    gap: 0.5rem;
  }
`

// Divider visual
const Divider = styled.hr`
  width: 100%;
  max-width: 700px;
  border: none;
  border-top: 1.5px solid ${({ theme }) => theme.colors.primary}22;
  margin: 24px 0 12px 0;
`

// Skeleton Loader
const Skeleton = styled.div`
  width: 100%;
  height: 32px;
  background: linear-gradient(90deg, #f3f3f3 25%, #ececec 50%, #f3f3f3 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.2s infinite linear;
  border-radius: 8px;
  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

// Tooltip simples
const Tooltip = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  & .tooltip-text {
    visibility: hidden;
    width: 160px;
    background: #222;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 6px 8px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.85rem;
  }
  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`

// Gráfico de barras SVG simples
const BarChartWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 1rem;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.primary}11;
  padding: 1.1rem 0.7rem 0.5rem 0.7rem;
  margin: 0 auto 0.7rem auto;
  @media (max-width: 700px) {
    padding: 0.5rem 0.1rem 0.2rem 0.1rem;
  }
`

const BarChartTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  text-align: left;
`

function MascotXML() {
  return (
    <MascotAnimated>
      <svg
        width="100"
        height="130"
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Corpo do arquivo com canto dobrado */}
        <g transform="rotate(-6 50 65)">
          <path
            d="M22 32 Q20 36 20 44 V110 Q20 120 30 120 H70 Q80 120 80 110 V50 Q80 40 70 40 H55 Q50 40 50 35 V25 Q50 20 45 20 H30 Q25 20 22 32 Z"
            fill="#fff"
            stroke="#222"
            strokeWidth="3"
          />
          {/* Canto dobrado */}
          <path
            d="M50 20 L70 40 H55 Q50 40 50 35 V20 Z"
            fill="#e0e7ef"
            stroke="#222"
            strokeWidth="2"
          />
          {/* Tag <xml> no topo */}
          <rect x="28" y="38" width="44" height="18" rx="5" fill="#f1f5f9" />
          <text
            x="50"
            y="52"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="13"
            fill="#2563eb"
          >
            &lt;xml&gt;
          </text>
          {/* Olhos grandes */}
          <ellipse
            cx="44"
            cy="75"
            rx="7"
            ry="8"
            fill="#fff"
            stroke="#222"
            strokeWidth="2"
          />
          <ellipse
            cx="62"
            cy="75"
            rx="7"
            ry="8"
            fill="#fff"
            stroke="#222"
            strokeWidth="2"
          />
          {/* Pupilas animadas */}
          <ellipse
            className="mascot-blink"
            cx="44"
            cy="77"
            rx="2.5"
            ry="3"
            fill="#222"
          />
          <ellipse
            className="mascot-blink"
            cx="62"
            cy="77"
            rx="2.5"
            ry="3"
            fill="#222"
          />
          {/* Brilho dos olhos */}
          <ellipse cx="43" cy="75" rx="1" ry="1.3" fill="#fff" opacity="0.7" />
          <ellipse cx="61" cy="75" rx="1" ry="1.3" fill="#fff" opacity="0.7" />
          {/* Sobrancelhas */}
          <rect
            x="40"
            y="69"
            width="7"
            height="1.2"
            rx="0.6"
            fill="#1e40af"
            transform="rotate(-12 40 69)"
          />
          <rect
            x="58"
            y="69"
            width="7"
            height="1.2"
            rx="0.6"
            fill="#1e40af"
            transform="rotate(12 58 69)"
          />
          {/* Sorriso largo */}
          <path
            d="M48 85 Q53 92 66 85"
            stroke="#fbbf24"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bochechas rosadas */}
          <ellipse
            cx="38"
            cy="83"
            rx="2.5"
            ry="1.5"
            fill="#fbbf24"
            opacity="0.5"
          />
          <ellipse
            cx="68"
            cy="83"
            rx="2.5"
            ry="1.5"
            fill="#fbbf24"
            opacity="0.5"
          />
          {/* Braço levantado (aceno) */}
          <g className="mascot-arm-wave">
            <path
              d="M22 70 Q10 60 24 55"
              stroke="#222"
              strokeWidth="3.5"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="58"
              rx="3"
              ry="5"
              fill="#fbbf24"
              stroke="#222"
              strokeWidth="1.2"
            />
          </g>
          {/* Braço para baixo */}
          <path
            d="M78 90 Q92 100 76 110"
            stroke="#222"
            strokeWidth="3.5"
            fill="none"
          />
          <ellipse
            cx="78"
            cy="112"
            rx="3"
            ry="5"
            fill="#fbbf24"
            stroke="#222"
            strokeWidth="1.2"
          />
          {/* Perninhas em movimento */}
          <path
            d="M40 118 Q38 126 50 126"
            stroke="#222"
            strokeWidth="3"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="126"
            rx="2.2"
            ry="3"
            fill="#222"
            opacity="0.18"
          />
          <path
            d="M60 118 Q62 126 70 124"
            stroke="#222"
            strokeWidth="3"
            fill="none"
          />
          <ellipse
            cx="70"
            cy="124"
            rx="2.2"
            ry="3"
            fill="#222"
            opacity="0.18"
          />
        </g>
      </svg>
    </MascotAnimated>
  )
}

const Dashboard: React.FC = () => {
  const [totalXML, setTotalXML] = useState<number>(0)
  const [xmls, setXmls] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Mock para gráfico: XMLs por mês
  const xmlsPorMes = [
    { mes: 'Jan', total: 12 },
    { mes: 'Fev', total: 18 },
    { mes: 'Mar', total: 22 },
    { mes: 'Abr', total: 15 },
    { mes: 'Mai', total: 27 },
    { mes: 'Jun', total: 19 }
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/nota-fiscal', {
          params: { page: 1, limit: 8 }
        })
        setTotalXML(response.data.totalItems)
        setXmls(response.data.data)
      } catch (err) {
        setTotalXML(0)
        setXmls([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const fornecedoresUnicos = Array.from(new Set(xmls.map(t => t.fornecedor)))
    .length
  // Última data real de XML salvo (mock se não houver)
  const ultimaDataXML =
    xmls.length > 0
      ? format(
          parseISO(xmls[0].createdAt || new Date().toISOString()),
          'dd/MM/yyyy HH:mm'
        )
      : format(new Date(), 'dd/MM/yyyy HH:mm')
  // Total de XMLs no mês (mock)
  const totalXMLMes = xmlsPorMes[xmlsPorMes.length - 1].total

  return (
    <DashboardContainer>
      {/* Card de boas-vindas */}
      <Header></Header>
      <MainSection>
        {/* Hero Card */}
        <HeroCard
          onClick={() =>
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } })
          }
        >
          <MascotXML />
          <HeroNumber>
            {loading ? (
              <Skeleton style={{ height: 48, width: 120 }} />
            ) : (
              <CountUp end={totalXML} duration={1.2} separator="," />
            )}
          </HeroNumber>
          <HeroLabel>Total de XMLs Salvos</HeroLabel>
          <UpdateBadge>Última atualização: {ultimaDataXML}</UpdateBadge>
        </HeroCard>
        <Divider />
        {/* Serviços Exclusivos */}
        <ExclusiveTitle>Serviços exclusivos</ExclusiveTitle>
        <ExclusiveServicesSection>
          <ExclusiveCardsRow>
            <QuickCard href="/UpdateXML">
              <i className="bx bx-barcode-reader icon" />
              Atualizar XML
            </QuickCard>
            <QuickCard href="/Bipagem">
              <i className="bx bx-barcode icon" />
              Bipagem
            </QuickCard>
          </ExclusiveCardsRow>
        </ExclusiveServicesSection>
        <Divider />
        {/* Estatísticas */}
        <ExclusiveTitle>Estatísticas</ExclusiveTitle>
        <StatsGrid>
          <StatCard>
            <StatIcon>
              <i className="bx bx-user-check icon" />
            </StatIcon>
            <StatValue>
              {loading ? (
                <Skeleton style={{ height: 28, width: 40 }} />
              ) : (
                fornecedoresUnicos
              )}
            </StatValue>
            <StatLabel>
              Fornecedores únicos
              <Tooltip>
                <Info
                  size={16}
                  style={{ marginLeft: 4, verticalAlign: 'middle' }}
                />
                <span className="tooltip-text">
                  Quantidade de fornecedores diferentes encontrados nos XMLs.
                </span>
              </Tooltip>
            </StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <i className="bx bx-calendar icon" />
            </StatIcon>
            <StatValue>
              {loading ? (
                <Skeleton style={{ height: 28, width: 80 }} />
              ) : (
                ultimaDataXML
              )}
            </StatValue>
            <StatLabel>
              Último XML salvo
              <Tooltip>
                <Info
                  size={16}
                  style={{ marginLeft: 4, verticalAlign: 'middle' }}
                />
                <span className="tooltip-text">
                  Data e hora do último XML salvo no sistema.
                </span>
              </Tooltip>
            </StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <i className="bx bx-bar-chart-alt-2 icon" />
            </StatIcon>
            <StatValue>
              {loading ? (
                <Skeleton style={{ height: 28, width: 40 }} />
              ) : (
                totalXMLMes
              )}
            </StatValue>
            <StatLabel>
              XMLs no mês
              <Tooltip>
                <Info
                  size={16}
                  style={{ marginLeft: 4, verticalAlign: 'middle' }}
                />
                <span className="tooltip-text">
                  Total de XMLs salvos neste mês.
                </span>
              </Tooltip>
            </StatLabel>
          </StatCard>
        </StatsGrid>
        {/* Gráfico de barras simples */}
        <BarChartWrapper>
          <BarChartTitle>Evolução de XMLs por mês</BarChartTitle>
          <svg width="100%" height="90" viewBox="0 0 220 90">
            {xmlsPorMes.map((item, idx) => {
              const max = Math.max(...xmlsPorMes.map(x => x.total))
              const barHeight = (item.total / max) * 60
              return (
                <g key={item.mes}>
                  <rect
                    x={20 + idx * 32}
                    y={80 - barHeight}
                    width={20}
                    height={barHeight}
                    rx={4}
                    fill="#2563eb"
                    opacity="0.85"
                  />
                  <text
                    x={30 + idx * 32}
                    y={88}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#888"
                  >
                    {item.mes}
                  </text>
                  <text
                    x={30 + idx * 32}
                    y={75 - barHeight}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#2563eb"
                  >
                    {item.total}
                  </text>
                </g>
              )
            })}
          </svg>
        </BarChartWrapper>
      </MainSection>
    </DashboardContainer>
  )
}

export default Dashboard
