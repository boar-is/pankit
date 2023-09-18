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
export type ColorPalette = {
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
    background: Color
    foreground: Color
    muted: ColorPair
    card: ColorPair
    popover: ColorPair
    border: Color
    input: Color
    primary: ColorPair
    secondary: ColorPair
    accent: ColorPair
    destructive: ColorPair
    ring: Color
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
  typography: {
    DEFAULT: {
      css: {
        '--tw-prose-body': Color
        '--tw-prose-headings': Color
        '--tw-prose-lead': Color
        '--tw-prose-links': Color
        '--tw-prose-bold': Color
        '--tw-prose-counters': Color
        '--tw-prose-bullets': Color
        '--tw-prose-hr': Color
        '--tw-prose-quotes': Color
        '--tw-prose-quote-borders': Color
        '--tw-prose-captions': Color
        '--tw-prose-code': Color
        '--tw-prose-pre-code': Color
        '--tw-prose-pre-bg': Color
        '--tw-prose-th-borders': Color
        '--tw-prose-td-borders': Color
      }
    }
  }
}
