'use client'
import {
  Squares2X2Icon,
  UserIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import { ComponentPropsWithRef } from 'react'

export const MENU = [
  {
    url: '/dashboard',
    label: 'Dashboard',
    icon: (props: ComponentPropsWithRef<'svg'>) => (
      <Squares2X2Icon {...props} />
    ),
  },
  {
    url: '/inscritos',
    label: 'Inscritos',
    icon: (props: ComponentPropsWithRef<'svg'>) => <UserIcon {...props} />,
  },
  {
    url: '/financeiro',
    label: 'Financeiro',
    icon: (props: ComponentPropsWithRef<'svg'>) => (
      <CurrencyDollarIcon {...props} />
    ),
  },
  {
    url: '/contatos',
    label: 'Contatos',
    icon: (props: ComponentPropsWithRef<'svg'>) => <MegaphoneIcon {...props} />,
  },
  {
    url: '/grupos',
    label: 'Grupos',
    icon: (props: ComponentPropsWithRef<'svg'>) => <UserGroupIcon {...props} />,
  },
  {
    url: '/quartos',
    label: 'Quartos',
    icon: (props: ComponentPropsWithRef<'svg'>) => <HomeIcon {...props} />,
  },
]
