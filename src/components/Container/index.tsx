import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <section className="flex-1 px-5 lg:px-16 lg:py-14">{children}</section>
}
