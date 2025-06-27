import { DefaultTheme } from 'styled-components'

// Paleta azul moderna para tema escuro (com mais contraste)
const themeDark: DefaultTheme = {
  colors: {
    // Fundo e superfícies
    background: '#0a0f1a', // fundo principal (quase preto)
    backgroundAlt: '#16213a', // fundo alternativo (bem escuro)
    shape: '#222e4a', // cards, menus (mais claro)
    shapeLow: '#293759', // superfícies secundárias

    // Primárias
    primary: '#3b82f6', // azul principal
    primaryHover: '#2563eb', // azul mais escuro para hover
    secondary: '#38bdf8', // azul claro secundário
    secondaryHover: '#0ea5e9',

    // Texto
    text: '#f8fafc', // branco puro para contraste
    textSecondary: '#b6c2d1', // cinza claro para textos menos importantes

    // Estados
    success: '#22d3ee',
    error: '#f87171',
    warning: '#fde68a',
    info: '#38bdf8',
    disabled: '#293759',

    // Outros
    border: '#334155', // mais claro para destacar divisões
    mode: '#222e4a', // switch
    modeHover: '#293759',
    arrow: '#FFFFFF'
  }
}

export default themeDark
