// eslint-disable-next-line import/named
import { screen, render, fireEvent, act } from '@testing-library/react'
import { RefObject, createRef } from 'react'

import { Input } from '../Input'

const setup = (ref?: RefObject<HTMLInputElement>, error?: boolean) => {
  render(<Input {...(ref && { ref })} {...(error && { error })} />)
  return screen.getByRole('textbox')
}

describe('Input Component', () => {
  it('Should render input field correctly', () => {
    const inputElement = setup()
    expect(inputElement).toBeInTheDocument()
  })

  it('Should input field receive ref correctly', () => {
    const ref: RefObject<HTMLInputElement> = createRef()
    const inputElement = setup(ref)
    fireEvent.change(inputElement, { target: { value: 'test' } })
    act(() => {
      const value = ref.current?.value
      expect(value).toBe('test')
    })
  })

  it('Should input field receive error correctly', () => {
    const inputElement = setup(undefined, true)
    expect(inputElement).toHaveClass('border-red-500 outline-red-500')
    expect(inputElement).not.toHaveClass('border-dark-800 outline-dark-800')
  })
})
