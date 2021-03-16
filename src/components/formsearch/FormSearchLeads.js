import React from 'react'
import {Formik, Form as FormikForm, Field } from 'formik'
import '../formsearch/FormSearchLeads.css'
import '../buttonadd/ButtonAdd.css'


  const FormSearchLeads = () => (

   <Formik>
      <FormikForm className="Form" >
        <div className="Form-Group">
            <h2>Filtros</h2>
            <label htmlFor="nameLead">Nome</label>
            <Field className="Form-Field" name="nameLead" type="text"/>
        </div>
        <div className="Form-Group">
            <label htmlFor="cpf">CPF</label>
            <Field  className="Form-Field" name="cpf" type="text"/>
        </div>
        <div className="divButtonRight">
          <button name="button" className="buttonOrange">Filtrar</button>
        </div>
      </FormikForm>
    </Formik>
    )

export default FormSearchLeads;
