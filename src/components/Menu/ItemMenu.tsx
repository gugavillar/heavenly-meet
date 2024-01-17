'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentPropsWithRef, ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type ItemMenuProps = {
  itens: Array<{
    url: string
    label: string
    icon: (props: ComponentPropsWithRef<'svg'>) => ReactNode
  }>
}

type MenuLinkProps = ItemMenuProps['itens'][number] & {
  isActive: boolean
}

const MenuLink = ({ icon, label, url, isActive }: MenuLinkProps) => {
  return (
    <Link
      href={url}
      className={twJoin(
        'flex h-14 w-48 items-center gap-4 rounded-md p-4',
        isActive
          ? 'bg-brand-500 bg-opacity-10'
          : 'group transition-colors hover:bg-brand-500 hover:bg-opacity-10',
      )}
    >
      {icon({
        className: twJoin(
          'h-6 w-6',
          isActive
            ? 'text-brand-500'
            : 'text-zinc-800 transition-colors group-hover:text-brand-500',
        ),
      })}
      <span
        className={twJoin(
          isActive
            ? 'text-brand-500'
            : 'text-zinc-800 transition-colors group-hover:text-brand-500',
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export const ItemMenu = ({ itens }: ItemMenuProps) => {
  const path = usePathname()

  if (!itens?.length) return null

  return itens.map((item) => {
    const isActive = path === item.url
    return <MenuLink key={item.label} isActive={isActive} {...item} />
  })
}
