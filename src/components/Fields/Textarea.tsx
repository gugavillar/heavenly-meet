import { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
  error?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          'flex w-full resize-none rounded border border-dark-800 bg-dark-300 px-5 py-4 text-sm outline-dark-800',
          error ? 'border-red-500 outline-red-500' : '',
          className,
        )}
        rows={4}
        ref={ref}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
