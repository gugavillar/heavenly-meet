import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

type FieldContainerProps = {
  children: ReactNode
  label: string
  error: string
}
export const FieldContainer = ({
  children,
  label,
  error,
}: FieldContainerProps) => {
  return (
    <div className="flex w-full flex-col space-y-1">
      <label>{label}</label>
      {children}
      <span className="flex items-center gap-1 text-sm font-light text-red-500">
        <ExclamationTriangleIcon className="h-4 w-4" />
        {error}
      </span>
    </div>
  )
}
