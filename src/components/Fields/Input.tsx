import { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentPropsWithRef<'input'> & {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          'flex w-full rounded border border-dark-800 bg-dark-300 px-5 py-4 text-sm outline-dark-800',
          error ? 'border-red-500 outline-red-500' : '',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
