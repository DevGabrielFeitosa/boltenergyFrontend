import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import DataTable, { TableColumn } from 'react-data-table-component'
import { PagedResponse, PowerPlant } from './types'

function App() {
  const [data, setData] = useState<PowerPlant[]>([])
  const [loading, setLoading] = useState(false)
  const [totalRows, setTotalRows] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState('mdaPotenciaOutorgadaKw')
  const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('DESC')
  const [searchTerm, setSearchTerm] = useState('')

  const formatPower = (kw: number) => {
    return (kw / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + ' MW'
  }

  const fetchData = useCallback(async (page: number, size: number, sortBy: string, sortDir: string, search: string) => {
    setLoading(true)
    try {
      const params = {
        page: page - 1,
        size,
        sortBy,
        sortDirection: sortDir,
        ...(search && { search })
      }

      const response = await axios.get<PagedResponse>('/api/v1/power-plants', { params })
      setData(response.data.content)
      setTotalRows(response.data.totalElements)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(currentPage, perPage, sortField, sortDirection, searchTerm)
  }, [currentPage, perPage, sortField, sortDirection, searchTerm, fetchData])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setPerPage(newPerPage)
    setCurrentPage(page)
  }

  const handleSort = async (column: TableColumn<PowerPlant>, sortDirection: 'asc' | 'desc') => {
    setSortField(column.sortField as string)
    setSortDirection(sortDirection.toUpperCase() as 'ASC' | 'DESC')
    setCurrentPage(1)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const columns: TableColumn<PowerPlant>[] = [
    {
      name: '#',
      selector: row => row.ranking,
      sortable: false,
      width: '70px',
      cell: row => <strong>{row.ranking}º</strong>
    },
    {
      name: 'Empreendimento',
      selector: row => row.nomEmpreendimento || '',
      sortable: true,
      sortField: 'nomEmpreendimento',
      grow: 2
    },
    {
      name: 'Potência',
      selector: row => row.mdaPotenciaOutorgadaKw,
      sortable: true,
      sortField: 'mdaPotenciaOutorgadaKw',
      cell: row => <span style={{ color: '#27ae60', fontWeight: 600 }}>{formatPower(row.mdaPotenciaOutorgadaKw)}</span>,
      width: '150px'
    },
    {
      name: 'UF',
      selector: row => row.sigUFPrincipal || '',
      sortable: true,
      sortField: 'sigUFPrincipal',
      cell: row => <span className="badge badge-uf">{row.sigUFPrincipal}</span>,
      width: '80px'
    },
    {
      name: 'Tipo',
      selector: row => row.sigTipoGeracao || '',
      sortable: true,
      sortField: 'sigTipoGeracao',
      cell: row => <span className="badge badge-type">{row.sigTipoGeracao}</span>,
      width: '100px'
    },
    {
      name: 'Origem',
      selector: row => row.dscOrigemCombustivel || '',
      sortable: true,
      sortField: 'dscOrigemCombustivel',
      width: '150px'
    },
    {
      name: 'Situação',
      selector: row => row.dscSituacaoObra || '',
      sortable: true,
      sortField: 'dscSituacaoObra',
      width: '150px'
    }
  ]

  return (
    <div className="container">
      <h1>Maiores Geradores de Energia do Brasil</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar por nome, UF, tipo ou origem..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onSort={handleSort}
        sortServer
        defaultSortFieldId={3}
        defaultSortAsc={false}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        highlightOnHover
        striped
        responsive
        noDataComponent="Nenhum registro encontrado"
        paginationComponentOptions={{
          rowsPerPageText: 'Linhas por página:',
          rangeSeparatorText: 'de',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'Todos'
        }}
      />
    </div>
  )
}

export default App

