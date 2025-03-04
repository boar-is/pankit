import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const idUrl = (id: string) => `url(#${id})`

export const initials = (fullName?: string | null) => {
  if (!fullName) {
    return ''
  }

  const allNames = fullName.trim().split(' ')
  return allNames.reduce((acc, curr, index) => {
    if (index === 0 || index === allNames.length - 1) {
      acc = `${acc}${curr.charAt(0).toUpperCase()}`
    }
    return acc
  }, '')
}

export const vr = (variable: string) => `var(${variable})`

export const hexToRgb = (hex: string, delimiter = ' ') =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    ?.map((x) => parseInt(x, 16))
    ?.join(delimiter) ?? '255 255 255'
