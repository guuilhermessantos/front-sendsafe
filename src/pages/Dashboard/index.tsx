import React from 'react'
import styled from 'styled-components'
import { BarChart2, Users, FileText, CheckCircle } from '@geist-ui/react-icons'

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.background};
  padding: 32px 0;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 24px;
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
  border-radius: 16px;
  box-shadow: 0 2px 16px ${props => props.theme.colors.primary}11;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px ${props => props.theme.colors.primary}33;
  }
`

const CardIcon = styled.div`
  font-size: 2.2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
`

const CardLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
`

const CardValue = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
`

const ChartSection = styled.div`
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

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.primary}22 0%,
    ${props => props.theme.colors.secondary}22 100%
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1px;
`

const QuickActions = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: flex-end;
`

const ActionButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.arrow};
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px ${props => props.theme.colors.primary}22;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: ${props => props.theme.colors.primaryHover};
    box-shadow: 0 4px 16px ${props => props.theme.colors.primary}33;
  }
`

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <CardsGrid>
        <Card>
          <CardIcon>
            <BarChart2 />
          </CardIcon>
          <CardLabel>Vendas no mês</CardLabel>
          <CardValue>R$ 12.500</CardValue>
        </Card>
        <Card>
          <CardIcon>
            <Users />
          </CardIcon>
          <CardLabel>Novos clientes</CardLabel>
          <CardValue>37</CardValue>
        </Card>
        <Card>
          <CardIcon>
            <FileText />
          </CardIcon>
          <CardLabel>Notas emitidas</CardLabel>
          <CardValue>142</CardValue>
        </Card>
        <Card>
          <CardIcon>
            <CheckCircle />
          </CardIcon>
          <CardLabel>Pedidos entregues</CardLabel>
          <CardValue>128</CardValue>
        </Card>
      </CardsGrid>
      <ChartSection>
        <h2
          style={{
            color: '#888',
            fontWeight: 600,
            marginBottom: 16,
            fontSize: '1.2rem'
          }}
        >
          Resumo de Atividades
        </h2>
        <ChartPlaceholder>
          Gráfico interativo aqui (ex: vendas, pedidos, etc)
        </ChartPlaceholder>
      </ChartSection>
      <QuickActions>
        <ActionButton>Nova Nota</ActionButton>
        <ActionButton>Exportar Relatório</ActionButton>
        <ActionButton>Adicionar Cliente</ActionButton>
      </QuickActions>
    </DashboardContainer>
  )
}

export default Dashboard
