'use client'

import { type PropsWithChildren } from 'react'
import { cn } from '@shared/lib/utils'
import { type PropsWithClassName } from '@shared/lib/types'

export type IconWrapperProps = PropsWithClassName &
  PropsWithChildren & {
    viewBox: string
  }

export type IconProps = PropsWithClassName

export function IconWrapper({
  viewBox,
  className,
  children,
}: IconWrapperProps) {
  return (
    <svg
      viewBox={viewBox}
      className={cn('flex-no-shrink inline h-5 w-5 fill-current', className)}
    >
      {children}
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 20 20"
      {...props}
    >
      <title>GitHub</title>
      <path d="M10 0c5.52 0 10 4.59 10 10.25 0 4.53-2.86 8.37-6.83 9.73-.51.1-.69-.22-.69-.5l.01-2.8c0-.96-.32-1.58-.68-1.9 2.23-.26 4.57-1.12 4.57-5.06a4 4 0 0 0-1.03-2.75c.1-.26.45-1.3-.1-2.72 0 0-.84-.27-2.75 1.05a9.4 9.4 0 0 0-5 0C5.59 3.98 4.75 4.25 4.75 4.25a3.78 3.78 0 0 0-.1 2.72 4.03 4.03 0 0 0-1.03 2.75c0 3.93 2.33 4.8 4.55 5.06-.28.26-.54.71-.63 1.38-.57.26-2.02.71-2.91-.86 0 0-.53-.98-1.53-1.05 0 0-.98-.02-.07.62 0 0 .65.32 1.1 1.5 0 0 .6 1.83 3.38 1.21l.01 1.9c0 .28-.18.6-.68.5A10.23 10.23 0 0 1 0 10.25C0 4.6 4.48 0 10 0"></path>
    </IconWrapper>
  )
}

export function ReactIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 512 512"
      {...props}
    >
      <title>React</title>
      <path d="m411 181-16-5 3-11c11-57 4-102-22-118-25-14-66 1-108 37l-12 11-8-7c-43-39-87-55-113-40-25 15-32 58-22 112l4 16-18 5c-51 18-83 46-83 75s35 59 88 77l13 5-4 17c-10 53-2 95 23 109 26 15 69 0 111-37l10-9 13 11c41 36 81 50 106 35 26-15 34-60 23-115l-3-13 9-2c55-19 91-48 91-78 0-29-33-57-85-75Zm-129-81c35-31 68-43 83-35 16 10 23 47 13 96l-3 10a488 488 0 0 0-64-10 481 481 0 0 0-40-51l11-10ZM158 280l13 25 15 25a435 435 0 0 1-44-7c4-14 10-28 16-43Zm0-48-16-42 44-7-15 24-13 25Zm11 24q9-20 20-39l23-37a581 581 0 0 1 88 0l23 37 21 39-21 39-23 37a630 630 0 0 1-87 0q-13-18-24-37t-20-39Zm172 49 14-25a440 440 0 0 1 16 42 434 434 0 0 1-45 7l15-24Zm13-73-13-25-15-24c15 2 30 4 44 8a440 440 0 0 1-16 41Zm-98-108a440 440 0 0 1 28 35q-28-2-56 0c9-13 19-24 28-35ZM146 66c16-9 51 4 89 37l7 7a491 491 0 0 0-41 51 499 499 0 0 0-64 10l-3-15c-9-47-3-81 12-90Zm-24 252-12-4c-23-8-42-18-56-30-11-10-17-20-17-28 0-18 26-40 69-55l17-6a494 494 0 0 0 23 61 502 502 0 0 0-24 62Zm111 93c-18 17-37 28-53 34-15 5-27 5-34 1-15-8-21-42-13-87l4-16a481 481 0 0 0 64 9 501 501 0 0 0 42 51l-10 8Zm24-23c-10-10-20-22-29-34h28l29-1a439 439 0 0 1-28 35Zm124 29c-3 15-8 25-15 30-16 8-48-3-83-33l-12-11a485 485 0 0 0 40-51 478 478 0 0 0 65-10l3 11c5 25 6 47 2 64Zm18-103-8 3a483 483 0 0 0-25-61 482 482 0 0 0 24-60l14 4c44 15 71 38 71 56 1 18-29 42-76 58Z" />
      <path d="M256 299a43 43 0 1 0-43-43 43 43 0 0 0 43 43Z" />
    </IconWrapper>
  )
}

export function NextIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Next.js</title>
      <circle
        cx="128"
        cy="128"
        r="128"
      />
      <path
        className="fill-background"
        d="M213 224 98 77H77v102h17V99l105 135 14-10Z"
      />
      <path
        className="fill-background"
        d="M164 77h17v70h-17z"
      />
    </IconWrapper>
  )
}

export function VercelIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 222"
      {...props}
    >
      <title>Vercel</title>
      <path d="m128 0 128 222H0z" />
    </IconWrapper>
  )
}

export function PrismaIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 310"
      {...props}
    >
      <title>Prisma</title>
      <path d="M254 236 148 10c-3-6-8-10-15-10-6 0-12 3-15 8L3 195c-4 6-4 13 0 19l56 87c5 7 13 10 21 7l163-48c5-1 9-5 11-10 3-4 3-10 0-14Zm-23 9L92 286c-5 2-9-2-8-6l50-238c1-4 7-5 9-1l92 195a7 7 0 0 1-4 9Z" />
    </IconWrapper>
  )
}

export function EsLintIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 225"
      {...props}
    >
      <title>ESLint</title>
      <path
        className="opacity-75"
        d="m78 81 49-28h3l49 28 2 3v56l-2 3-49 29h-3l-49-29-2-3V84l2-3"
      />
      <path d="M254 107 196 6c-2-3-6-6-10-6H70c-4 0-8 3-10 6L2 107c-3 4-3 8 0 12l58 100c2 4 6 6 10 6h116c4 0 8-2 10-6l58-100c3-4 3-8 0-12Zm-48 49-2 4-74 42h-4l-74-42-2-4V71l2-4 74-43h4l74 43 2 4v85Z" />
    </IconWrapper>
  )
}

export function TypeScriptIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 256"
      {...props}
    >
      <title>TypeScript</title>
      <path d="M20 0h216c11 0 20 9 20 20v216c0 11-9 20-20 20H20c-11 0-20-9-20-20V20C0 9 9 0 20 0Z" />
      <path
        className="fill-background"
        d="M150.5 200.5V228c4.5 2.3 9.8 4 16 5.2a105 105 0 0 0 38.2-.2 47 47 0 0 0 15.7-6.3A31.9 31.9 0 0 0 235 198a30.7 30.7 0 0 0-8.7-23.2c-2.8-3-6.2-5.6-10.2-8-4-2.3-8.4-4.5-13.3-6.6L193 156a49.5 49.5 0 0 1-7.3-4.3 19 19 0 0 1-4.7-4.7 9.8 9.8 0 0 1-1.6-5.6c0-1.9.5-3.6 1.4-5.1 1-1.5 2.4-2.8 4.2-4 1.8-1 4-1.9 6.6-2.5 2.5-.6 5.4-.9 8.6-.9a54.8 54.8 0 0 1 29.4 8.7v-25.9a67.5 67.5 0 0 0-13.8-3.5c-5-.8-10.7-1.2-17.2-1.2s-12.8.7-18.6 2.1c-5.9 1.4-11 3.6-15.5 6.6a33 33 0 0 0-10.6 11.5 33.5 33.5 0 0 0-3.9 16.6c0 8.2 2.4 15.2 7.1 21 4.8 5.8 12 10.8 21.7 14.8a153 153 0 0 1 19.1 9.2c2.4 1.6 4.3 3.4 5.7 5.3a10.7 10.7 0 0 1 .7 11.4c-.8 1.5-2.1 2.9-3.9 4-1.8 1.1-4 2-6.6 2.6a52.5 52.5 0 0 1-43.3-11.7Zm-46-68.8H140V109H41v22.7h35.3V233h28.2V131.7Z"
      />
    </IconWrapper>
  )
}

export function TailwindIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Tailwind CSS</title>
      <path d="M12 6c-2.7 0-4.3 1.4-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.4.9 1 2 2.1 4.5 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.3-.9-1-2-2.2-4.5-2.2zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.4 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.3.9 1 2 2.2 4.5 2.2 2.7 0 4.3-1.4 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4-1-1-2.1-2.1-4.6-2.1z" />
    </IconWrapper>
  )
}

export function PrettierIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 16 16"
      {...props}
    >
      <title>Prettier</title>
      <path d="M3.707 1.815c-.257.116-.425.352-.447.627-.025.308.116.563.397.719l.143.079h4.4l.137-.072c.277-.146.428-.418.403-.726-.022-.275-.19-.511-.447-.627-.117-.053-.165-.054-2.293-.054s-2.176.001-2.293.054m7.033-.017c-.311.111-.532.476-.483.797.043.278.263.541.518.616.19.057.763.058.951.002.181-.054.382-.235.46-.417.073-.171.068-.456-.013-.623-.074-.152-.258-.321-.404-.37-.162-.056-.878-.059-1.029-.005M3.707 5.309c-.597.269-.605 1.093-.014 1.374.133.063.141.063 1.056.063l.922.001.164-.082c.271-.135.412-.363.412-.665 0-.302-.141-.53-.412-.665l-.164-.082-.922.001c-.869 0-.929.004-1.042.055m4.586-.031c-.315.096-.532.39-.532.722 0 .395.289.709.681.74.309.025.564-.116.718-.397.067-.122.078-.172.078-.343 0-.171-.011-.221-.078-.343-.095-.174-.245-.307-.408-.362-.127-.044-.345-.051-.459-.017m2.944.018c-.154.055-.32.206-.404.367-.059.113-.072.172-.072.337 0 .242.08.42.255.569.208.179.227.181 1.534.172 1.142-.007 1.173-.009 1.277-.065.258-.14.412-.392.412-.676 0-.284-.154-.536-.412-.676-.105-.056-.132-.057-1.294-.062-.989-.005-1.205.001-1.296.034M3.779 8.785c-.353.126-.551.426-.519.784.018.194.089.336.239.475.207.191.262.201 1.049.191l.692-.008.124-.073c.336-.198.477-.622.317-.959-.084-.178-.282-.355-.456-.406-.189-.057-1.291-.059-1.446-.004m4 0c-.353.126-.551.426-.519.784.024.267.194.502.447.616.117.052.167.054 2.028.054 2.146.001 2.064.008 2.272-.195.156-.151.215-.286.228-.513.014-.248-.057-.419-.241-.585-.229-.206-.159-.199-2.259-.198-1.49.001-1.875.008-1.956.037m-3.971 3.492c-.688.189-.743 1.125-.084 1.423.093.042.232.047 1.529.047H6.68l.125-.063c.257-.127.448-.419.448-.684 0-.265-.191-.557-.448-.684l-.125-.063-1.373-.005c-1.055-.004-1.403.002-1.499.029" />
    </IconWrapper>
  )
}

export function StripeIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 32 32"
      {...props}
    >
      <title>Stripe</title>
      <path d="M16.5 4C10.7 4 7 7.1 7 12c0 4.7 4.3 6.1 7.1 7 1.3.5 2.9 1 2.9 1.5 0 .4-1 .5-1.5.5-2 0-4.8-.8-7-1.9L7 18.4v7.8l.6.2c2.4 1 5.1 1.6 7.6 1.6 6.1 0 9.8-2.8 9.8-7.6 0-5.2-4.4-6.6-7.3-7.5-1-.4-2.7-.9-2.7-1.3 0-.3 0-.6 1.2-.6 1.9 0 4.5.8 6.3 1.9l1.5.9V5.5l-.6-.2C21.2 4.5 18.8 4 16.5 4zm0 2c1.8 0 3.7.3 5.5 1v3.4A14 14 0 0 0 16.2 9c-2.9 0-3.2 1.8-3.2 2.6 0 1.9 2 2.5 4 3.2 3.5 1 6 2.1 6 5.6 0 5-5.5 5.6-7.8 5.6-2 0-4.2-.4-6.2-1.2v-3.3a19 19 0 0 0 6.5 1.5c3 0 3.5-1.5 3.5-2.5 0-2-2-2.6-4.2-3.3C11.4 16 9 15 9 11.9 9 8.3 11.9 6 16.5 6z" />
    </IconWrapper>
  )
}

export function UkrainianFlagIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 30 30"
      {...props}
    >
      <title>Ukrainian Flag</title>
      <path
        className="fill-blue-500"
        d="M24 6H5C4 6 3 7 3 9v6h24V9c0-2-1-3-3-3Zm0 0"
      />
      <path
        className="fill-yellow-400"
        d="M27 21c0 2-1 3-3 3H5c-1 0-2-1-2-3v-6h24Zm0 0"
      />
    </IconWrapper>
  )
}

export function VercelEdgeIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 20 20"
      {...props}
    >
      <title>Vercel Edge</title>
      <path d="M10.6574 2.90814C10.6268 2.82954 10.5583 2.77187 10.4757 2.75501C10.393 2.73816 10.3075 2.76441 10.2485 2.82473L5.81436 7.36075C5.73192 7.44509 5.72018 7.57577 5.78626 7.67345C5.85235 7.77113 5.97803 7.80885 6.08697 7.76369L9.90239 6.18246L13.8926 12.565C13.9606 12.6737 14.1 12.7128 14.2146 12.6553C14.3291 12.5978 14.3811 12.4627 14.3345 12.3433L10.6574 2.90814ZM8.23968 9.08197C8.3038 8.97153 8.27369 8.83046 8.17006 8.75583C8.06644 8.68119 7.92309 8.69734 7.83866 8.79315L1.81201 15.6323C1.75416 15.6979 1.73514 15.7892 1.76194 15.8725C1.78874 15.9558 1.8574 16.0188 1.94268 16.0384L7.96933 17.4236C8.08396 17.45 8.20134 17.3923 8.25051 17.2854C8.29968 17.1786 8.26713 17.0519 8.17256 16.982L5.01038 14.6441L8.23968 9.08197ZM16.2431 10.7079C16.204 10.5929 16.0874 10.5232 15.9675 10.543C15.8477 10.5629 15.7598 10.6665 15.7598 10.788V14.6852L8.40437 14.8292C8.27597 14.8317 8.17068 14.9317 8.16156 15.0598C8.15245 15.1879 8.24252 15.3018 8.36927 15.3225L17.9617 16.8866C18.0478 16.9007 18.135 16.8685 18.1913 16.8019C18.2476 16.7353 18.2649 16.6441 18.2367 16.5615L16.2431 10.7079Z"></path>
    </IconWrapper>
  )
}

export function GitIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Git</title>
      <path d="M251 117 139 5c-6-7-16-7-23 0L93 28l29 29a20 20 0 0 1 25 25l28 29a20 20 0 1 1-11 11l-27-27v70l5 4a20 20 0 1 1-21-5V94l-6-4c-6-6-7-14-5-22L81 39 5 116c-7 7-7 17 0 23l112 112c6 7 16 7 23 0l111-111c7-7 7-17 0-23" />
    </IconWrapper>
  )
}

export function T3Icon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 258 198"
      {...props}
    >
      <title>T3</title>
      <path d="M165.3 24.1 188.5 0H0v24.1h165.3Zm-1.8 71.3 90-92.7h-32.8l-75.5 77 18.3 15.7Zm69.7 35a42.8 42.8 0 0 1-83.7 13l-3.3-10.5-19.3 19.3 1.7 4.2A67 67 0 1 0 224.5 73l-4.6-2.7-17.6 17.9 8 4.2a42.8 42.8 0 0 1 22.9 38ZM87.8 191.7v-147H63.7v147h24.1Z" />
    </IconWrapper>
  )
}

export function NextraIcon(props: IconProps) {
  return (
    <IconWrapper
      viewBox="0 0 144 144"
      {...props}
    >
      <title>Nextra</title>
      <path d="m108 31-3 4a46 46 0 0 1-65 0l-4-4a4 4 0 0 0-5 5l4 4c18 18 18 47 0 65l-4 3a4 4 0 1 0 5 6l4-4c18-18 47-18 65 0l3 4a4 4 0 0 0 6-6l-4-3a46 46 0 0 1 0-65l4-4a4 4 0 0 0-6-5Z" />
    </IconWrapper>
  )
}
