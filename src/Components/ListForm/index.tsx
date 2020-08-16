import React from 'react';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';

import api from '../../services/api';

import { useLeads } from '../../context/Leads';

import { StyledForm, Row, Column, Label } from './styles'


const ListForm = () => {

    const { leads, setLeads } = useLeads();

    function handleFetchFilterLeads(values) {
        api.get(`/leads?nome=${values.name}&cpf=${values.cpf}`).then(response => {
            setLeads(response.data)
        })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: ''
        },
        onSubmit: values => {
            handleFetchFilterLeads(values)
        },
    })

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
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