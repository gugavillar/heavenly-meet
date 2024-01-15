'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentPropsWithRef, ReactNode } from 'react'

type ItemMenuProps = {
  itens: Array<{
    url: string
    label: string
    icon: (props: ComponentPropsWithRef<'svg'>) => ReactNode
  }>
}

const ActiveLink = ({ icon, label, url }: ItemMenuProps['itens'][number]) => {
  return (
    <Link
      href={url}
      className="flex h-14 w-48 items-center gap-4 rounded-md bg-brand-500 bg-opacity-10 p-4"
    >
      {icon({ className: 'text-brand-500 h-6 w-6' })}
      <span className="text-brand-500">{label}</span>
    </Link>
  )
}

const NotActiveLink = ({
  icon,
  label,
  url,
}: ItemMenuProps['itens'][number]) => {
  return (
    <Link
      href={url}
      className="group flex h-14 w-48 items-center gap-4 rounded-md p-4 transition-colors hover:bg-brand-500 hover:bg-opacity-10"
    >
      {icon({
        className:
          'text-zinc-800 h-6 w-6 transition-colors group-hover:text-brand-500',
      })}
      <span className="text-zinc-800 transition-colors group-hover:text-brand-500">
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
    return isActive ? (
      <ActiveLink key={item.label} {...item} />
    ) : (
      <NotActiveLink key={item.label} {...item} />
    )
  })
}
