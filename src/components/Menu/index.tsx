import { ReactNode } from 'react'

import { Wrapper } from './Wrapper'

type MenuProps = {
  children: ReactNode
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <main className="flex h-screen flex-1 flex-col lg:flex-row">
      <Wrapper />
      <section className="flex-1 px-5 lg:px-40 lg:py-14">{children}</section>
    </main>
  )
}
