// eslint-disable-next-line import/named
import { screen, render } from '@testing-library/react'

import { Card } from '../index'

const setup = (children?: string, className?: string) => {
  const regExp = new RegExp(children ?? 'Card', 'i')
  render(<Card {...(className && { className })}>{children ?? 'Card'}</Card>)
  return screen.getByText(regExp)
}

describe('Card Component', () => {
  it('Should render card correct', () => {
    const cardElement = setup()
    expect(cardElement).toBeInTheDocument()
  })

  it('Should card component render children correctly', () => {
    const cardElement = setup('This is a card component')
    expect(cardElement.innerHTML).toBe('This is a card component')
  })

  it('Should card component can receive new classes correctly', () => {
    const cardElement = setup('Card', 'bg-red-500 flex text-black')
    expect(cardElement).toHaveClass(
      'overflow-x-auto rounded-xl bg-red-500 p-5 shadow scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-400 text-black',
    )
  })

  it('Should card component can receive a react node and render correctly', () => {
    render(
      <Card>
        <p>This is a card</p>
      </Card>,
    )
    const cardElement = screen.getByRole('article')
    expect(cardElement.innerHTML).toBe('<p>This is a card</p>')
  })
})
