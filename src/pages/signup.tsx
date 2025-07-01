import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useRouter } from 'next/router'
import {
  FiUserPlus,
  FiMoon,
  FiSun,
  FiShield,
  FiZap,
  FiCheckCircle
} from 'react-icons/fi'
import BackgroundBubbles from '../components/BackgroundBubbles'
import Image from 'next/image'
import Head from 'next/head'

const FullScreenWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    120deg,
    ${props => props.theme.colors.background},
    ${props => props.theme.colors.backgroundAlt} 80%
  );
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const SideLeft = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2.5vw;
  background: none;
  @media (max-width: 900px) {
    flex: none;
    padding: 2.5rem 0 0 0;
  }
`

const SideRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  @media (max-width: 900px) {
    flex: none;
    padding-bottom: 2.5rem;
  }
`

const LogoBig = styled(Image)`
  filter: drop-shadow(0 2px 16px ${props => props.theme.colors.primary}33);
  margin-bottom: 1.2rem;
`

const Slogan = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 1.35rem;
  font-weight: bold;
  margin-bottom: 1.1rem;
  text-align: center;
  letter-spacing: 0.5px;
`

const BenefitsRow = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0 0 1.5rem 0;
  padding: 0;
  list-style: none;
  justify-content: center;
`

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.05rem;
  font-weight: bold;
`

const GlassCard = styled.div`
  background: ${props => props.theme.colors.shape}e6;
  box-shadow: 0 4px 24px 0 ${props => props.theme.colors.primary}22;
  backdrop-filter: blur(10px);
  border-radius: 18px;
  border: 1.2px solid ${props => props.theme.colors.border};
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 370px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.backgroundAlt}cc;
  border-radius: 7px;
  font-size: 0.91rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 0.7rem;
  padding: 0.22rem 0.7rem;
  font-weight: 500;
  box-shadow: 0 1px 4px ${props => props.theme.colors.primary}18;
`

const ThemeToggle = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: ${props => props.theme.colors.backgroundAlt};
  border: 1.5px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: ${props => props.theme.colors.primary}22;
    color: ${props => props.theme.colors.secondary};
    border: 1.5px solid ${props => props.theme.colors.primary};
  }
`

const AnimatedLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 2.1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
`

const ErrorMsg = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.5rem;
  text-align: center;
  animation: shake 0.3s;
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`

const NeonInput = styled(Input)`
  border: 2px solid transparent;
  background: ${props => props.theme.colors.shape};
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
    box-shadow: 0 0 8px 2px ${props => props.theme.colors.primary}99;
    outline: none;
  }
`

const NeonButton = styled(Button)`
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
  );
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px ${props => props.theme.colors.secondary}44;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 16px ${props => props.theme.colors.primary}55;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.secondary} 0%,
      ${props => props.theme.colors.primary} 100%
    );
    filter: brightness(1.08)
      drop-shadow(0 0 6px ${props => props.theme.colors.secondary});
  }
  &:active {
    transform: scale(0.98);
  }
`

const LinkText = styled.span`
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`

const TrustFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  img {
    width: 24px;
    height: 24px;
  }
  span {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.93rem;
    opacity: 0.7;
  }
`

const Signup: React.FC<{ toggleTheme: () => void; theme: string }> = ({
  toggleTheme,
  theme
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://back-sendsafe.onrender.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: name, email, senha: password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Erro ao cadastrar')
      localStorage.setItem('token', data.token)
      if (data.nome) localStorage.setItem('nome', data.nome)
      router.push('/Dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro | SendSafe</title>
      </Head>
      <FullScreenWrapper>
        <SideLeft>
          <LogoBig
            src={'/assets/confereTag.svg'}
            alt="Logo"
            width={128}
            height={128}
            style={{
              marginBottom: 12,
              opacity: 0.92,
              transition: 'opacity 0.8s'
            }}
          />
          <Slogan>Segurança, agilidade e confiança para o seu negócio.</Slogan>
          <BenefitsRow>
            <BenefitItem>
              <FiShield size={20} /> Proteção de dados
            </BenefitItem>
            <BenefitItem>
              <FiZap size={20} /> Processos ágeis
            </BenefitItem>
            <BenefitItem>
              <FiCheckCircle size={20} /> Suporte dedicado
            </BenefitItem>
          </BenefitsRow>
        </SideLeft>
        <SideRight>
          <GlassCard>
            <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </ThemeToggle>
            <AnimatedLines>
              <svg
                viewBox="0 0 370 370"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="0,40 370,0 370,330 0,370"
                  stroke={theme === 'light' ? '#2563eb22' : '#3b82f622'}
                  strokeWidth="2"
                />
                <polyline
                  points="0,80 370,40 370,290 0,330"
                  stroke={theme === 'light' ? '#38bdf822' : '#38bdf822'}
                  strokeWidth="1"
                />
              </svg>
            </AnimatedLines>
            <Image
              src={'/assets/confereTag.svg'}
              alt="Logo"
              width={64}
              height={64}
              style={{
                marginBottom: 12,
                opacity: 0.92,
                transition: 'opacity 0.8s'
              }}
            />
            <Title>Crie sua conta</Title>
            <Slogan>
              Segurança, agilidade e confiança para o seu negócio.
            </Slogan>
            {error && (
              <ErrorMsg style={{ animation: 'shake 0.3s' }}>{error}</ErrorMsg>
            )}
            <form onSubmit={handleSignup} style={{ width: '100%', zIndex: 2 }}>
              <NeonInput
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <NeonInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <NeonInput
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <NeonButton
                type="submit"
                disabled={loading}
                style={{ marginTop: 10, marginBottom: 6 }}
              >
                <FiUserPlus />
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </NeonButton>
            </form>
            <LinkText onClick={() => router.push('/login')}>
              Já tem conta? <b>Entrar</b>
            </LinkText>
            <TrustBadge>
              <FiShield size={16} style={{ marginRight: 6 }} /> 100% Seguro e
              confiável
            </TrustBadge>
          </GlassCard>
        </SideRight>
      </FullScreenWrapper>
    </>
  )
}

export default Signup
