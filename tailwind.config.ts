import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'
import animatePlugin from 'tailwindcss-animate'
// @ts-expect-error no esm module for this package
import themeSwapperPlugin from 'tailwindcss-theme-swapper'
import { baseTheme, type ColorPalette, darkTheme } from './styles/themes'
import colors from 'tailwindcss/colors'

const palette = {
  gray: colors.slate,
  primary: colors.blue,
  secondary: colors.red,
  destructive: colors.red,
} satisfies ColorPalette

const tailwindConfig: Config = {
  darkMode: 'class',
  safelist: ['dark'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        base: ['var(--font-base)', ...fontFamily.sans],
        title: ['var(--font-title)', ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    animatePlugin,
    themeSwapperPlugin({
      themes: [baseTheme(palette), darkTheme(palette)],
    }),
    formsPlugin,
    typographyPlugin,
  ],
}
export default tailwindConfig
