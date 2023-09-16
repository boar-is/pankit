import { type DefaultColors } from 'tailwindcss/types/generated/colors'

export type Color = string
export type ColorPair = {
  DEFAULT: Color
  foreground: Color
}
export type ColorPairWithContent = ColorPair & {
  content: Color
}
export type Colors = Record<
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950',
  Color
>
export type ColorPalette = Omit<DefaultColors, 'gray'> & {
  gray: Colors
  primary: Colors
  secondary: Colors
  destructive: Colors
}

export type Theme = {
  name: string
  selectors: string[]
  theme: ColorsThemeConfig
}

export type ColorsThemeConfig = {
  colors: {
    border: Color
    input: Color
    ring: Color
    background: Color
    foreground: Color
    muted: ColorPair
    accent: ColorPair
    popover: ColorPair
    primary: ColorPair
    secondary: ColorPair
    destructive: ColorPair
    highlight: {
      gray: ColorPairWithContent
      orange: ColorPairWithContent
      yellow: ColorPairWithContent
      green: ColorPairWithContent
      blue: ColorPairWithContent
      purple: ColorPairWithContent
      pink: ColorPairWithContent
      red: ColorPairWithContent
    }
  }
}
