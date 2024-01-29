import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = ComponentProps<'article'> & {
  children: ReactNode
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <article
      className={twMerge(
        `
        overflow-x-auto rounded-xl bg-white 
        p-5
        shadow
        scrollbar
        scrollbar-track-gray-100
        scrollbar-thumb-gray-400
       
      `,
        className,
        `
      `,
      )}
      {...props}
    >
      {children}
    </article>
  )
}
