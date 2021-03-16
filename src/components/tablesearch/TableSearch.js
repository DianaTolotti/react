import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table  from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import {Link} from 'react-router-dom'
import './TableSearch.css'

const Search = () => {

  const [leads, setLeads] = useState([]);

    useEffect(() =>
    {
        axios.get('http://localhost:3333/leads')
        .then((response) => {
            setLeads(response.data)
        }).catch(error =>{
            console.log(error)
        }); 
    }, [] );

    return(
      <TableContainer component={Paper} >
      <Table> 
        <TableHead className="rowTittle">
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">CPF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>

              <TableCell align="center">
               <button type="button"><Link to={`/edit/${lead.id}`} ><FiEdit /></Link></button>
              </TableCell>
              <TableCell align="center"  >
                <button type="button"><AiFillDelete/> </button>
              </TableCell>
              <TableCell align="center" >{lead.mail}</TableCell>
              <TableCell align="center"  >{lead.nameLead}</TableCell>
              <TableCell align="center"  >{lead.cpf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
    </TableContainer>
    );
}

export default Search;