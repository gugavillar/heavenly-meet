// eslint-disable-next-line import/named
import { screen, render } from '@testing-library/react'
import { nanoid } from 'nanoid'

import { TableHeader } from '../TableHeader'

jest.mock('nanoid', () => {
  return {
    nanoid: () => (Math.random() * 8).toFixed(2),
  }
})

const TABLE_HEADER = [
  { label: 'column 1', accessor: 'column 1' },
  { label: 'column 2', accessor: 'column 2' },
  { label: 'column 3', accessor: 'column 3' },
]

const setup = () => {
  render(
    <table>
      <TableHeader tableHeaderData={TABLE_HEADER} />
    </table>,
  )
  return screen.getAllByTestId('table-header-label')
}

describe('Table Header Component', () => {
  it('Should table have 3 elements', () => {
    nanoid()
    const tableHeaderElement = setup()
    expect(tableHeaderElement).toHaveLength(3)
  })
})
