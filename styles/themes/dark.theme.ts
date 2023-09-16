import { type ColorPalette, type Theme } from '@/styles/themes/types'

export const darkTheme = ({
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
  name: 'dark',
  selectors: ['.dark'],
  theme: {
    colors: {
      border: gray['800'],
      input: gray['800'],
      ring: gray['800'],
      background: gray['950'],
      foreground: gray['50'],
      muted: {
        DEFAULT: gray['900'],
        foreground: gray['400'],
      },
      accent: {
        DEFAULT: gray['800'],
        foreground: gray['50'],
      },
      popover: {
        DEFAULT: gray['950'],
        foreground: gray['50'],
      },
      primary: {
        DEFAULT: primary['700'],
        foreground: primary['50'],
      },
      secondary: {
        DEFAULT: secondary['700'],
        foreground: secondary['50'],
      },
      destructive: {
        DEFAULT: destructive['700'],
        foreground: destructive['50'],
      },
      highlight: {
        gray: {
          content: gray['400'],
          DEFAULT: gray['600'],
          foreground: gray['100'],
        },
        orange: {
          content: orange['400'],
          DEFAULT: orange['600'],
          foreground: orange['100'],
        },
        yellow: {
          content: yellow['400'],
          DEFAULT: yellow['600'],
          foreground: yellow['100'],
        },
        green: {
          content: green['400'],
          DEFAULT: green['600'],
          foreground: green['100'],
        },
        blue: {
          content: blue['400'],
          DEFAULT: blue['600'],
          foreground: blue['100'],
        },
        purple: {
          content: purple['400'],
          DEFAULT: purple['600'],
          foreground: purple['100'],
        },
        pink: {
          content: pink['400'],
          DEFAULT: pink['600'],
          foreground: pink['100'],
        },
        red: {
          content: red['400'],
          DEFAULT: red['600'],
          foreground: red['100'],
        },
      },
    },
  },
})
