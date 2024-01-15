import { XMarkIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

import { Logo } from '../Menu/Logo'

type SidebarProps = {
  toggle: () => void
  isOpen: boolean
  children: ReactNode
}

export const Sidebar = ({ toggle, isOpen, children }: SidebarProps) => {
  const translate = isOpen ? 'translate-x-0' : '-translate-x-full'
  return (
    <aside
      className={`fixed top-0 h-screen w-2/3 max-w-72 rounded-br-3xl rounded-tr-3xl bg-white px-8 pb-8 pt-12 shadow-lg duration-500 ease-in-out ${translate}`}
    >
      <XMarkIcon className="fixed right-6 top-4 h-8 w-8" onClick={toggle} />
      <Logo />
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  )
}