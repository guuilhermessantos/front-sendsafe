import styled from 'styled-components'

// interface IPropsHome {
//   // controlSwitch: string
//   // controlSide?: string
// }

export const DivBurguer = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 12000;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  margin: 0;
  width: auto;
  height: auto;
  @media (max-width: 480px) {
    top: 8px;
    left: 8px;
  }
`

interface IPropsSwitch {
  controlSwitch: string
  controlSide?: string
  controlDisplay?: string
  controlHamburg?: string
}

export const SwitchMenuBurguer = styled.span<IPropsSwitch>`
  z-index: 1000;
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.mode};
  margin-top: 0.2rem;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.primary}11;
  transition: box-shadow 0.15s, background 0.2s;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondaryHover}66,
      0 1px 4px ${({ theme }) => theme.colors.primary}11;
  }
  :before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    top: 50%;
    transition: all 0.3s ease-in-out;
    left: ${props => (props.controlSwitch === 'light' ? '5px' : '25px')};
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.shapeLow};
  }
  .switch-sun {
    font-size: 15px;
    position: absolute;
    left: 6px;
    top: 52%;
    transform: translateY(-50%);
    opacity: ${props => (props.controlSwitch === 'light' ? '100' : '0')};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .switch-moon {
    font-size: 15px;
    position: absolute;
    right: 6px;
    top: 52%;
    transform: translateY(-50%);
    opacity: ${props => (props.controlSwitch === 'light' ? '0' : '100')};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: opacity 0.3s;
    pointer-events: none;
  }
`

export const BurgerButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 13000;
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.primary}11;
  opacity: 0.85;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.15s, opacity 0.2s,
    backdrop-filter 0.2s;
  outline: none;
  overflow: hidden;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}22;
    transform: scale(1.04);
    opacity: 1;
    backdrop-filter: blur(2px);
  }
  span {
    display: block;
    width: 18px;
    height: 2.5px;
    margin: 2.5px 0;
    background: ${({ theme }) => theme.colors.arrow};
    border-radius: 2px;
    transition: 0.3s;
    position: relative;
  }
  &.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
  }
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary}44 0%,
    ${({ theme }) => theme.colors.secondary}66 100%
  );
  z-index: 11000;
  backdrop-filter: blur(6px) saturate(120%);
  transition: opacity 0.4s;
  animation: fadeInBackdrop 0.4s;
  @keyframes fadeInBackdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 4px 24px 0 ${({ theme }) => theme.colors.primary}18;
  z-index: 11002;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.18, 1), box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  padding: 100px 1.5rem 1.5rem 1.5rem;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left: none;
  backdrop-filter: blur(8px);
  nav {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      font-size: 1.08rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      padding: 0.7rem 0.9rem;
      border-radius: 7px;
      background: none;
      box-shadow: none;
      position: relative;
      outline: none;
      transition: background 0.18s, color 0.18s;
      &:hover,
      &:focus {
        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.colors.shapeLow} 60%,
          ${({ theme }) => theme.colors.primary}11 100%
        );
        color: ${({ theme }) => theme.colors.primary};
      }
      .icon {
        font-size: 1.2rem;
        filter: none;
      }
    }
    .toggle-theme {
      margin-top: 2.2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.7rem;
      background: ${({ theme }) => theme.colors.shapeLow};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      padding: 0.5rem 1rem;
      box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}08;
      .theme-label {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        margin-right: 0.2rem;
        user-select: none;
      }
    }
  }
  &.open {
    transform: translateX(0);
    box-shadow: 0 8px 32px 0 ${({ theme }) => theme.colors.primary}22;
  }
  @media (max-width: 480px) {
    width: 85vw;
    min-width: 140px;
    padding: 60px 0.5rem 0.5rem 0.5rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    nav a {
      font-size: 0.98rem;
      padding: 0.6rem 0.5rem;
    }
    nav .toggle-theme {
      padding: 0.4rem 0.5rem;
    }
  }
`
