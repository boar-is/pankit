import { type ColorPalette, type Theme } from '@/styles/themes/types'
import colors from 'tailwindcss/colors'

export const baseTheme = ({
  gray,
  primary,
  secondary,
  destructive,
}: ColorPalette): Theme => ({
  name: 'base',
  selectors: [':root'],
  theme: {
    colors: {
      background: colors.white,
      foreground: gray['950'],
      muted: {
        DEFAULT: gray['100'],
        foreground: gray['500'],
      },
      card: {
        DEFAULT: colors.white,
        foreground: gray['950'],
      },
      popover: {
        DEFAULT: colors.white,
        foreground: gray['950'],
      },
      border: gray['50'],
      input: gray['50'],
      primary: {
        DEFAULT: primary['500'],
        foreground: primary['50'],
      },
      secondary: {
        DEFAULT: secondary['500'],
        foreground: secondary['50'],
      },
      accent: {
        DEFAULT: gray['100'],
        foreground: gray['900'],
      },
      destructive: {
        DEFAULT: destructive['500'],
        foreground: destructive['50'],
      },
      ring: gray['50'],
      highlight: {
        gray: {
          content: gray['600'],
          DEFAULT: gray['200'],
          foreground: gray['700'],
        },
        orange: {
          content: colors.orange['600'],
          DEFAULT: colors.orange['200'],
          foreground: colors.orange['700'],
        },
        yellow: {
          content: colors.yellow['600'],
          DEFAULT: colors.yellow['200'],
          foreground: colors.yellow['700'],
        },
        green: {
          content: colors.green['600'],
          DEFAULT: colors.green['200'],
          foreground: colors.green['700'],
        },
        blue: {
          content: colors.blue['600'],
          DEFAULT: colors.blue['200'],
          foreground: colors.blue['700'],
        },
        purple: {
          content: colors.purple['600'],
          DEFAULT: colors.purple['200'],
          foreground: colors.purple['700'],
        },
        pink: {
          content: colors.pink['600'],
          DEFAULT: colors.pink['200'],
          foreground: colors.pink['700'],
        },
        red: {
          content: colors.red['600'],
          DEFAULT: colors.red['200'],
          foreground: colors.red['700'],
        },
      },
    },
    typography: {
      DEFAULT: {
        css: {
          '--tw-prose-body': gray[700],
          '--tw-prose-headings': gray[900],
          '--tw-prose-lead': gray[600],
          '--tw-prose-links': gray[900],
          '--tw-prose-bold': gray[900],
          '--tw-prose-counters': gray[500],
          '--tw-prose-bullets': gray[300],
          '--tw-prose-hr': gray[300],
          '--tw-prose-quotes': gray[200],
          '--tw-prose-quote-borders': gray[200],
          '--tw-prose-captions': gray[500],
          '--tw-prose-code': gray[900],
          '--tw-prose-pre-code': gray[200],
          '--tw-prose-pre-bg': gray[800],
          '--tw-prose-th-borders': gray[300],
          '--tw-prose-td-borders': gray[200],
        },
      },
    },
  },
})
