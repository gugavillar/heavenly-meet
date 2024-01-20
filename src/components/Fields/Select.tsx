import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ComponentPropsWithRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type OptionsArray = Record<string, string | number>

type SelectProps = ComponentPropsWithRef<'select'> & {
  label?: string
  options: Array<OptionsArray>
  optionKeyLabel: string
  optionKeyValue: string
  error?: boolean
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      options,
      optionKeyLabel,
      optionKeyValue,
      error,
      ...props
    },
    ref,
  ) => {
    if (!options?.length) throw new Error('Options must be an array')

    return (
      <div className="relative">
        <select
          className={twMerge(
            'flex w-full rounded border border-dark-800 bg-dark-300 px-5 py-4 text-sm outline-dark-800',
            error ? 'border-red-500 outline-red-500' : '',
            className,
          )}
          ref={ref}
          {...props}
        >
          {label ? (
            <option selected disabled value="">
              {label}
            </option>
          ) : null}
          {options?.map((option) => (
            <option key={option[optionKeyValue]} value={option[optionKeyValue]}>
              {option[optionKeyLabel]}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-4 top-4 h-6 w-6 text-dark-800" />
      </div>
    )
  },
)

Select.displayName = 'Select'
