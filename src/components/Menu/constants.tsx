'use client'
import { Squares2X2Icon, HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { ComponentPropsWithRef } from 'react'

export const MENU = [
  {
    url: '/',
    label: 'Home',
    icon: (props: ComponentPropsWithRef<'svg'>) => <HomeIcon {...props} />,
  },
  {
    url: '/dashboard',
    label: 'Dashboard',
    icon: (props: ComponentPropsWithRef<'svg'>) => (
      <Squares2X2Icon {...props} />
    ),
  },
  {
    url: '/pessoas',
    label: 'Pessoas',
    icon: (props: ComponentPropsWithRef<'svg'>) => <UserIcon {...props} />,
  },
]
