import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import MaskedInput from '../../MaskedInput';
import './Form.css'
import '../buttonadd/ButtonAdd.css'

const Form = ({id})  => {

    const initialValue = {
        nameLead: '',
        mail: '',
        cpf: '',
        civilstatus: '',
        spousename: ''
      }
  
      const validations = yup.object().shape({
        nameLead: yup.string().required(),
        cpf: yup.number().min(11).required(),
        mail: yup.string().email().required(),
        civilstatus: yup.string().email().required()
    });

    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    const [estados, setEstados] = useState([]);
        useEffect(() =>
        {
            axios.get('http://localhost:3333/estados')
            .then((response) => {
                setEstados(response.data)
            }).catch(error =>{
                console.log(error)
            }); 
        }, [] );   

    function onChange(ev) {
      const { name, value } = ev.target;
      setValues({ ...values, [name]: value });
    }
  
    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';

        const url = id
            ? `http://localhost:3333/leads/${id}`
            : `http://localhost:3333/leads`

        axios[method](url, values)
            .then((response) => {
                alert('Sucesso')
                history.push('/');
            });
    }

    Form.propTypes = {
        initialValues: PropTypes.object.isRequired
    }
    

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:3333/leads/${id}`)
                .then((response) => {
                    setValues(response.data);
            })        
        }
    }, []);

    return(
        <Formik onSubmit={onSubmit} validationSchema={validations}>
                <FormikForm className="Form">
                    
                    <div className="Form-Group">
                        <label htmlFor="nameLead" className="Form-Label">Nome</label>
                        <Field htmlFor="nameLead" className="Form-Field" name="nameLead" id="nameLead" onChange={onChange} placeholder="Digite seu nome" type="text" value={values.nameLead}/>
                        <ErrorMessage className="Form-Error" component="span" name="nameLead"/>
                    </div>
                    <div className="Form-Group">
                        <label htmlFor="cpf" className="Form-Label">CPF</label>
                        <MaskedInput htmlFor="cpf"  name="cpf" mask="999.999.999-99" 
                            value={values.cpf} onChange={onChange} id="cpf"/>
                        <ErrorMessage className="Form-Error" component="span" name="cpf"/>
                    </div>
                    <div className="Form-Group">
                        <label htmlFor="mail " className="Form-Label">E-mail</label>
                        <Field htmlFor="mail" className="Form-Field" name="mail" placeholder="Digite seu e-mail"
                            onChange={onChange} type="mail" value={values.mail} id="mail"/>
                        <ErrorMessage className="Form-Error" component="span" name="mail"/>
                    </div>
                    <div className="Form-Group">
                        <label htmlFor="civilstatus" className="Form-Label">Estado Civil</label>
                        <Field htmlFor="civilstatus" className="Form-Field" name="civilstatus" component="select" 
                            onChange={onChange} value={values.civilstatus} id="civilstatus">
                            <option value="" className="Form-Field">Selecione seu estado civil</option>
                            {estados.map((estado) => (
                                <option className="Form-Field"  key={estado.id} value={estado.id}>{estado.estado}</option>
                            ))}
                        </Field>
                        <ErrorMessage className="Form-Error" component="span" name="civilstatus"/>
                    </div>
                    <div className="Form-Group">
                        <label htmlFor="spousename" className="Form-Label">Nome do cônjuge</label>
                        <Field htmlFor="spousename" className="Form-Field" name="spousename" value={values.spousename}
                             onChange={onChange} placeholder="Digite o nome do seu cônjuge" type="text" id="spousename" />
                        <ErrorMessage className="Form-Error" component="span" name="spousename"/>
                    </div>
                    <div className="divButtonsScreenAdd">
                        <div className="divButtonCancel">
                            <Link to="/" className="buttonCancel">Cancelar</Link>
                        </div>
                        <div className="divButtonsScreenNew">
                            <button className="buttonOrange" type="submit"  onClick={onSubmit} >Adicionar</button>
                        </div>  

                    </div>
                </FormikForm>
            </Formik>
    );
}
   
export default Form