'use client'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'
import { isValidElement } from 'react'
import { twJoin } from 'tailwind-merge'

import { TableHeaderProps } from './TableHeader'

type TableBodyProps = {
  tableHeaderData: TableHeaderProps['tableHeaderData']
  tableBodyData: Array<{
    [key: string]: any
    id: string
  }>
  slug?: string
  linkBase?: string
}

type TableDataProps = {
  data: TableBodyProps['tableBodyData'][number]
  tableHeaderData: TableHeaderProps['tableHeaderData']
  linkBase?: string
  slug?: string
  hasInternalPage?: boolean
}

const TableData = ({
  data,
  tableHeaderData,
  linkBase,
  slug,
  hasInternalPage,
}: TableDataProps) => {
  const { push } = useRouter()

  const handleNavigateToInternalPage = (url: string) => push(url)

  return tableHeaderData?.map(({ accessor }) => {
    const key = nanoid()
    const hasHandleClick = hasInternalPage && !isValidElement(data[accessor])
    return (
      <td
        key={key}
        className="px-4 py-6"
        {...(hasHandleClick && {
          onClick: () =>
            handleNavigateToInternalPage(`${linkBase}/${data.id}/${slug}`),
        })}
      >
        {data[accessor]}
      </td>
    )
  })
}

export const TableBody = ({
  tableBodyData,
  tableHeaderData,
  linkBase,
  slug,
}: TableBodyProps) => {
  const hasInternalPage = Boolean(linkBase)

  return (
    <tbody>
      {tableBodyData?.map((data, index) => {
        const isLastRow = index === tableBodyData.length - 1
        return (
          <tr
            key={data.id}
            className={twJoin(
              'text-sm',
              !isLastRow && 'border-b border-slate-200',
              hasInternalPage && 'cursor-pointer hover:bg-slate-200',
            )}
          >
            <TableData
              data={data}
              tableHeaderData={tableHeaderData}
              {...(hasInternalPage && { hasInternalPage })}
              {...(linkBase && { linkBase })}
              {...(slug && { slug })}
            />
          </tr>
        )
      })}
    </tbody>
  )
}
