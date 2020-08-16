import React from 'react';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';
import api from '../../Services/api';

import NumberOnly from '../../utils/numberOnly';

import { useLeads } from '../../Context/Leads';

import { StyledForm, Row, Column, Label } from './styles'


const ListForm = () => {

    const { setLeads } = useLeads();

    function handleFetchFilterLeads(values) {

        api.get(`/leads?nome=${values.name}&cpf=${NumberOnly(values.cpf)}`).then(response => {
            setLeads(response.data)
        })
    }


    function handleFetchAllLeads() {
        api.get('/leads').then(response => {
            setLeads(response.data)
        })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: ''
        },
        onSubmit: values => {
            if (values.name || values.cpf) {
                handleFetchFilterLeads(values)
            }else{
                handleFetchAllLeads()
            }
        },
    })

    return (
        <StyledForm onSubmit={formik.handleSubmit} autoComplete="off">
            <Row>
                <Label>Filtros</Label>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="name"
                        label="Nome"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        flex={1}
                    />
                </Column>
                <Column>
                    <Input
                        name="cpf"
                        label="CPF"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.cpf}
                        flex={1}
                        mask="999.999.999-29"
                    />
                </Column>
            </Row>
            <Row>
                <Column
                    justifycontent="flex-end"
                >
                    <Button
                        label="Filtrar"
                        bgcolor="#F79028"
                        bgcolorhover="#e08427"
                        type="submit"
                    />
                </Column>
            </Row>
        </StyledForm>
    )
}

export default ListForm;