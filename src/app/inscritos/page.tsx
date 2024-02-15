import {
  Card,
  FieldContainer,
  Select,
  Table,
  TableHeader,
  Button,
} from '@/components'
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
      <Button
        disabled
        className=" group relative mb-3 flex items-center bg-rgb-230-34-34 transition duration-700 hover:bg-[rgba(255,54,54,1)] hover:text-transparent"
      >
        <span className="  translate-x-[35px] transform text-sm font-bold text-white transition duration-700 group-hover:opacity-0">
          Delete
        </span>
        <span className=" absolute flex h-10 w-10 translate-x-[110px] transform items-center justify-center border-l border-solid border-[#c41b1b] transition duration-700 group-hover:w-40 group-hover:-translate-x-0  group-hover:border-l-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#eee"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className=""
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </Button>
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
