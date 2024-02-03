import { Card, FieldContainer, Select, Table, TableHeader } from '@/components'
import { TableBody } from '@/components/Table/TableBody'

// TODO remover quando tiver integração
const TABLE_HEADER = [
  { label: 'Nome', accessor: 'name' },
  { label: 'Data de nascimento', accessor: 'birthdate' },
  { label: 'Telefone', accessor: 'phone' },
  { label: 'Cidade', accessor: 'city' },
]

// TODO remover quando tiver integração
const TABLE_BODY = [
  {
    id: '1',
    name: 'John Doe',
    birthdate: '01/01/2000',
    phone: '(11) 99999-9999',
    city: 'New York, NY',
  },
  {
    id: '2',
    name: 'John Doe',
    birthdate: '01/01/2000',
    phone: '(11) 99999-9999',
    city: 'New York, NY',
  },
  {
    id: '3',
    name: 'John Doe',
    birthdate: '01/01/2000',
    phone: '(11) 99999-9999',
    city: 'New York, NY',
  },
  {
    id: '4',
    name: 'John Doe',
    birthdate: '01/01/2000',
    phone: '(11) 99999-9999',
    city: 'New York, NY',
  },
]

// TODO remover quando tiver integração
const SELECT_OPTIONS = [
  { label: 'Todos', value: 'all' },
  { label: 'Voluntários', value: 'voluntary' },
  { label: 'Participantes', value: 'participants' },
]

export default function RegisteredPage() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className="mb-8 text-3xl">Listagem dos inscritos</h1>
        <FieldContainer className="mb-8 w-1/4">
          <Select
            options={SELECT_OPTIONS}
            optionKeyLabel="label"
            optionKeyValue="value"
          />
        </FieldContainer>
      </div>
      <Card>
        <Table headerTable={<TableHeader tableHeaderData={TABLE_HEADER} />}>
          <TableBody
            tableHeaderData={TABLE_HEADER}
            tableBodyData={TABLE_BODY}
          />
        </Table>
      </Card>
    </>
  )
}
