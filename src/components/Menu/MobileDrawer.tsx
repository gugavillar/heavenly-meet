'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { ReactNode, useState } from 'react'

import { Sidebar } from '../Sidebar'

type MobileDrawerProps = {
  children: ReactNode
}

export const MobileDrawer = ({ children }: MobileDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prevState) => !prevState)
  return (
    <>
      <header className="flex h-24 w-full items-center justify-between px-5 py-6 lg:hidden">
        <Bars3Icon onClick={handleToggle} className="h-8 w-8" />
      </header>
      <Sidebar toggle={handleToggle} isOpen={isOpen}>
        {children}
      </Sidebar>
    </>
  )
}
