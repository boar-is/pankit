export type PropsWithClassName = {
  className?: string
}

export type PropsWithAsChild = {
  asChild?: boolean
}

export type PropsWithAsParent = {
  asParent?: boolean
}

export type Require<V extends object, K extends keyof V> = Omit<V, K> &
  Required<Pick<V, K>>

export type RequireAll<V extends object> = Require<V, keyof V>
