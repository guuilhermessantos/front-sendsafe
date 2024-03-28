/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string
      shapeLow: string
      primary: string
      primaryHover: string
      mode: string
      modeHover: string
      // primary: string
      text: string
      shape: string
      arrow: string
    }
  }
}
