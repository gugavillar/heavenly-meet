import { ReactNode } from 'react'

import { Logo } from './Logo'

type DesktopMenuProps = {
  children: ReactNode
}

export const DesktopMenu = ({ children }: DesktopMenuProps) => {
  return (
    <aside className="hidden max-w-[300px] flex-col rounded-br-3xl rounded-tr-3xl bg-white px-12 py-14 shadow-lg lg:flex">
      <Logo className="text-center" />
      <nav>
        <ul className="space-y-4">{children}</ul>
      </nav>
    </aside>
  )
}
