import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = ComponentProps<'article'> & {
  children: ReactNode
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <article
      className={twMerge('rounded-xl bg-white p-5 shadow', className)}
      {...props}
    >
      {children}
    </article>
  )
}
