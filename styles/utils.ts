import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const idUrl = (id: string) => `url(#${id})`
