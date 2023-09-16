import { type ColorPalette, type Theme } from '@/styles/themes/types'
import colors from 'tailwindcss/colors'

export const darkTheme = ({
  gray,
  primary,
  secondary,
  destructive,
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
          content: colors.orange['400'],
          DEFAULT: colors.orange['600'],
          foreground: colors.orange['100'],
        },
        yellow: {
          content: colors.yellow['400'],
          DEFAULT: colors.yellow['600'],
          foreground: colors.yellow['100'],
        },
        green: {
          content: colors.green['400'],
          DEFAULT: colors.green['600'],
          foreground: colors.green['100'],
        },
        blue: {
          content: colors.blue['400'],
          DEFAULT: colors.blue['600'],
          foreground: colors.blue['100'],
        },
        purple: {
          content: colors.purple['400'],
          DEFAULT: colors.purple['600'],
          foreground: colors.purple['100'],
        },
        pink: {
          content: colors.pink['400'],
          DEFAULT: colors.pink['600'],
          foreground: colors.pink['100'],
        },
        red: {
          content: colors.red['400'],
          DEFAULT: colors.red['600'],
          foreground: colors.red['100'],
        },
      },
    },
  },
})
