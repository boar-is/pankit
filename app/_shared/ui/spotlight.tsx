'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

const spotlightVariants = tv({
  base: 'relative inset-0 overflow-hidden before:pointer-events-none before:absolute before:z-10 before:translate-x-[var(--spotlight-x)] before:translate-y-[var(--spotlight-y)] before:rounded-full before:bg-muted-foreground/5',
  variants: {
    size: {
      large:
        'before:left-[-800px] before:top-[-800px] before:h-[1600px] before:w-[1600px] before:blur-[200px]',
    },
    color: {
      blue: 'before:dark:bg-highlight-blue/10',
      yellow: 'before:dark:bg-highlight-yellow/10',
      red: 'before:dark:bg-highlight-red/10',
      green: 'before:dark:bg-highlight-green/10',
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
  ...props
}: SlotProps & SpotlightVariantProps) {
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
    <SpotlightContext.Provider value={{ color }}>
      <Slot
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
