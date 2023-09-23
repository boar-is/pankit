'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { type PropsWithAsParent } from '@shared/lib/types'

const spotlightVariants = tv({
  base: 'relative inset-0 overflow-hidden before:pointer-events-none before:absolute before:z-10 before:transform-gpu before:rounded-full before:bg-muted-foreground/5 md:before:translate-x-[var(--spotlight-x)] md:before:translate-y-[var(--spotlight-y)]',
  variants: {
    size: {
      medium:
        'before:left-[-200px] before:top-[-200px] before:h-[400px] before:w-[400px] before:blur-[100px] xl:before:left-[-400px] xl:before:top-[-400px] xl:before:h-[800px] xl:before:w-[800px]',
      large:
        'before:left-[-400px] before:top-[-400px] before:h-[800px] before:w-[800px] before:blur-[200px] xl:before:left-[-800px] xl:before:top-[-800px] xl:before:h-[1600px] xl:before:w-[1600px]',
    },
    color: {
      blue: 'before:bg-highlight-blue/20 before:dark:bg-highlight-blue/10',
      yellow:
        'before:bg-highlight-yellow/20 before:dark:bg-highlight-yellow/10',
      red: 'before:bg-highlight-red/20 before:dark:bg-highlight-red/10',
      green: 'before:bg-highlight-green/20 before:dark:bg-highlight-green/10',
    },
  },
  defaultVariants: {
    size: 'large',
    color: 'blue',
  },
})
export type SpotlightVariantProps = VariantProps<typeof spotlightVariants>

const SpotlightContext = createContext<SpotlightVariantProps>({})

export function Spotlight({
  color,
  size,
  asParent,
  ...props
}: SlotProps & SpotlightVariantProps & PropsWithAsParent) {
  const Comp = asParent ? 'div' : Slot
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number | null = null

    function onMouseMove({ pageX, pageY }: MouseEvent) {
      animationFrameId = requestAnimationFrame(() => {
        Array.from(ref.current?.children ?? [])
          .map((child) => child as HTMLElement)
          .forEach((child) => {
            child.style.setProperty(
              '--spotlight-x',
              `${pageX - child.offsetLeft}px`,
            )
            child.style.setProperty(
              '--spotlight-y',
              `${pageY - child.offsetTop}px`,
            )
          })
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      animationFrameId && cancelAnimationFrame(animationFrameId)
    }
  }, [ref])

  return (
    <SpotlightContext.Provider value={{ size, color }}>
      <Comp
        ref={ref}
        {...props}
      />
    </SpotlightContext.Provider>
  )
}

export function SpotlightItem({ className, ...props }: SlotProps) {
  const variantProps = useContext(SpotlightContext)

  return (
    <Slot
      className={spotlightVariants({ ...variantProps, className })}
      {...props}
    />
  )
}
