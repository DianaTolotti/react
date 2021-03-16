import React from 'react'
import FormSearchLeads from '../components/formsearch'
import Bodypage from '../components/body'
import Header from '../components/header'
import ButtonAdd from '../components/buttonadd'
import TableSearch from '../components/tablesearch'
import '../App.css'

const SearchLeads = () => (
      <div>
          <Header />
            <Bodypage>
                <h1 className="tittle">Consulta de Leads</h1>
                <FormSearchLeads />
                <ButtonAdd />
                <TableSearch />
            </Bodypage>
      </div>
  )

export default SearchLeads




