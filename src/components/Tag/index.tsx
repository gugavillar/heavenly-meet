import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TagProps = ComponentProps<'mark'>
export const Tag = ({ className, children, ...props }: TagProps) => {
  return (
    <mark className={twMerge('rounded-2xl px-3 py-1', className)} {...props}>
      {children}
    </mark>
  )
}
