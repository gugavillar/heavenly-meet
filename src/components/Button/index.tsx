import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color?: string
  icon?: ReactNode
  width?: string
  height?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon,
  width = 'w-40',
  height = 'h-12',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-md border-none',
        width,
        height,
        className,
        props.disabled ? 'cursor-not-allowed opacity-50' : '',
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
