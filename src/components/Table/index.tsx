import { ReactNode } from 'react'

type TableProps = {
  headerTable: ReactNode
  children: ReactNode
}
export const Table = ({ children, headerTable }: TableProps) => {
  return (
    <table className="w-full table-auto overflow-x-scroll whitespace-nowrap">
      {headerTable}
      {children}
    </table>
  )
}
