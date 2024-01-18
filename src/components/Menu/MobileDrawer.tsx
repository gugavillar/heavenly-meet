'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { ReactNode, useRef, useState } from 'react'

import { useClickOutside } from '@/hooks'

import { Sidebar } from '../Sidebar'

type ChildrenProps = {
  handleToggle: () => void
}

type MobileDrawerProps = {
  children: (props: ChildrenProps) => ReactNode
}

export const MobileDrawer = ({ children }: MobileDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen((prevState) => !prevState)

  useClickOutside({ isOpen, toggle: handleToggle, containerRef })

  return (
    <>
      <header className="flex h-24 w-full items-center justify-between px-5 py-6 lg:hidden">
        <Bars3Icon onClick={handleToggle} className="h-8 w-8" />
      </header>
      <Sidebar
        toggle={handleToggle}
        isOpen={isOpen}
        containerRef={containerRef}
      >
        {children({ handleToggle })}
      </Sidebar>
    </>
  )
}
