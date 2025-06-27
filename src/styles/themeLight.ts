import { DefaultTheme } from 'styled-components'

// Paleta azul moderna para tema claro
const themeLight: DefaultTheme = {
  colors: {
    // Fundo e superfícies
    background: '#F4F8FB', // fundo principal
    backgroundAlt: '#E9F1FA', // fundo alternativo
    shape: '#FFFFFF', // cards, menus
    shapeLow: '#F0F4F8', // superfícies secundárias

    // Primárias
    primary: '#2563eb', // azul principal
    primaryHover: '#1d4fd7', // azul mais escuro para hover
    secondary: '#38bdf8', // azul claro secundário
    secondaryHover: '#0ea5e9',

    // Texto
    text: '#1e293b', // texto principal
    textSecondary: '#64748b', // texto secundário

    // Estados
    success: '#22c55e',
    error: '#ef4444',
    warning: '#facc15',
    info: '#0ea5e9',
    disabled: '#cbd5e1',

    // Outros
    border: '#e2e8f0',
    mode: '#cbd5e1', // switch
    modeHover: '#e0e7ef',
    arrow: '#FFFFFF'
  }
}

export default themeLight
