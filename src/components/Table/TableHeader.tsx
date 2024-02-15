import { nanoid } from 'nanoid'

export type TableHeaderProps = {
  tableHeaderData: Array<{
    label: string
    accessor: string
  }>
}

export const TableHeader = ({ tableHeaderData }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {tableHeaderData.map(({ label }) => {
          const key = nanoid()
          return (
            <th
              key={key}
              className="p-4 text-left"
              data-testid="table-header-label"
            >
              {label}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
