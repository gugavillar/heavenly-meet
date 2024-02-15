// eslint-disable-next-line import/named
import { screen, render } from '@testing-library/react'

import { Tag } from '../index'

const setup = (children?: string, className?: string) => {
  const regExp = new RegExp(children ?? 'tag', 'i')
  render(<Tag {...(className && { className })}>{children ?? 'tag'}</Tag>)
  return screen.getByText(regExp)
}

describe('Tag Component', () => {
  it('Should render tag correct', () => {
    const tagElement = setup()
    expect(tagElement).toBeInTheDocument()
  })

  it('Should children is render correct', () => {
    const tagElement = setup('active')
    expect(tagElement.innerHTML).toBe('active')
  })

  it('Should render tag correct with default class list', () => {
    const tagElement = setup()
    expect(tagElement).toHaveClass('rounded-2xl px-3 py-1')
  })

  it('Should tag update class list when receive in props', () => {
    const tagElement = setup(undefined, 'bg-red-500 rounded-xl')
    expect(tagElement).toHaveClass('rounded-xl px-3 py-1 bg-red-500')
  })
})
