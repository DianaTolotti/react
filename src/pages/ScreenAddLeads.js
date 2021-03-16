import React from 'react'
import Form from '../components/formadd'
import Bodypage from '../components/body'
import Header from '../components/header'
import {useParams} from 'react-router-dom'
import '../App.css'

function AddLeads(){

    const {id} = useParams();

    return(

        <div>
            <Header />
            <Bodypage>
                <h1 className="tittle">Cadastro de Leads</h1>
                <Form  id={id ? Number.parseInt(id, 10) : null}/>
            </Bodypage>
        </div>
    )
}

export default AddLeads
