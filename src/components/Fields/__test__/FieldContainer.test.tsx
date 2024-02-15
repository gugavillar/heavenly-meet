// eslint-disable-next-line import/named
import { screen, render } from '@testing-library/react'
import { ReactNode } from 'react'

import { FieldContainer } from '../FieldContainer'

const setup = (
  children: ReactNode,
  label?: string,
  error?: string,
  className?: string,
) => {
  render(
    <FieldContainer
      {...(label && { label })}
      {...(error && { error })}
      {...(className && { className })}
    >
      {children}
    </FieldContainer>,
  )
}

describe('Field Container Component', () => {
  it('Should field container render correctly the children', () => {
    setup(<input type="text" placeholder="First name" />)
    const inputElement = screen.getByPlaceholderText(/First name/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('Should field container has no label element when no label', () => {
    setup(<input type="text" placeholder="First name" />)
    const labelElement = screen.getByTestId('field-container')
    expect(labelElement).not.toContainHTML('<label />')
  })

  it('Should field container has label element when label', () => {
    setup(<input type="text" placeholder="First name" />, 'First name')
    const labelElement = screen.getByTestId('field-container')
    expect(labelElement).toContainHTML('<label>First name</label>')
  })

  it('Should field container has no error span when no error', () => {
    setup(<input type="text" placeholder="First name" />)
    const errorElement = screen.getByTestId('field-container')
    expect(errorElement).not.toContainHTML('<span />')
  })

  it('Should field container has error span when error', () => {
    setup(
      <input type="text" placeholder="First name" />,
      'First name',
      'Error span',
    )
    const errorElement = screen.getByTestId('field-container')
    expect(errorElement).toHaveTextContent('Error span')
  })
})
