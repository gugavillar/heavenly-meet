import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type FieldContainerProps = ComponentProps<'div'> & {
  children: ReactNode
  label?: string
  error?: string
}
export const FieldContainer = ({
  children,
  label,
  error,
  className,
  ...props
}: FieldContainerProps) => {
  return (
    <div
      className={twMerge('flex w-full flex-col space-y-1', className)}
      {...props}
    >
      <label>{label}</label>
      {children}
      {error ? (
        <span className="flex items-center gap-1 text-sm font-light text-red-500">
          <ExclamationTriangleIcon className="h-4 w-4" />
          {error}
        </span>
      ) : null}
    </div>
  )
}
