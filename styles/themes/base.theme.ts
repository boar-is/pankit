import { type ColorPalette, type Theme } from '@/styles/themes/types'

export const baseTheme = ({
  white,
  gray,
  primary,
  secondary,
  destructive,
  orange,
  yellow,
  green,
  blue,
  purple,
  pink,
  red,
}: ColorPalette): Theme => ({
  name: 'base',
  selectors: [':root'],
  theme: {
    colors: {
      border: gray['50'],
      input: gray['50'],
      ring: gray['50'],
      background: white,
      foreground: gray['950'],
      muted: {
        DEFAULT: gray['100'],
        foreground: gray['500'],
      },
      accent: {
        DEFAULT: gray['100'],
        foreground: gray['900'],
      },
      popover: {
        DEFAULT: white,
        foreground: gray['950'],
      },
      primary: {
        DEFAULT: primary['500'],
        foreground: primary['50'],
      },
      secondary: {
        DEFAULT: secondary['500'],
        foreground: secondary['50'],
      },
      destructive: {
        DEFAULT: destructive['500'],
        foreground: destructive['50'],
      },
      highlight: {
        gray: {
          content: gray['600'],
          DEFAULT: gray['200'],
          foreground: gray['700'],
        },
        orange: {
          content: orange['600'],
          DEFAULT: orange['200'],
          foreground: orange['700'],
        },
        yellow: {
          content: yellow['600'],
          DEFAULT: yellow['200'],
          foreground: yellow['700'],
        },
        green: {
          content: green['600'],
          DEFAULT: green['200'],
          foreground: green['700'],
        },
        blue: {
          content: blue['600'],
          DEFAULT: blue['200'],
          foreground: blue['700'],
        },
        purple: {
          content: purple['600'],
          DEFAULT: purple['200'],
          foreground: purple['700'],
        },
        pink: {
          content: pink['600'],
          DEFAULT: pink['200'],
          foreground: pink['700'],
        },
        red: {
          content: red['600'],
          DEFAULT: red['200'],
          foreground: red['700'],
        },
      },
    },
  },
})
