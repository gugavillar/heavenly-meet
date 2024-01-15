import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Logo = ({ className, ...props }: ComponentProps<'h1'>) => {
  return (
    <h1 className={twMerge('mb-20', className)} {...props}>
      Logo
    </h1>
  )
}
