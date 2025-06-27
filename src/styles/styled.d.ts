/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string
      backgroundAlt: string
      shape: string
      shapeLow: string
      primary: string
      primaryHover: string
      secondary: string
      secondaryHover: string
      mode: string
      modeHover: string
      text: string
      textSecondary: string
      success: string
      error: string
      warning: string
      info: string
      disabled: string
      border: string
      arrow: string
    }
  }
}
