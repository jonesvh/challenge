import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Input from '../input';
import Button from '../button';
import NumberOnly from '../../utils/numberOnly';

import { useLeads } from '../../context/Leads';

import api from '../../services/api';

import { StyledForm, Row, Column, Label } from './styles'

const ListForm = () => {

    const { setLeads } = useLeads(); //hook para usar state global // atualiza a tabela do modulo pages/listleadpage

    const {
        handleSubmit,
        handleChange,
        values
    } = useFormik({
        initialValues: {
            name: '',
            cpf: ''
        },
        onSubmit: values => {
            if (values.name || values.cpf) {
                handleFetchFilterLeads(values)
            } else {
                handleFetchAllLeads()
            }
        },
    })

    const handleFetchAllLeads = () => {
        api.get('/leads?_sort=id&_order=desc', {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setLeads(response.data)
        })
    }

    const handleFetchFilterLeads = (values) => {

        handleCreateQuery(values)

        api.get(handleCreateQuery(values), {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setLeads(response.data)
        })
    }

    const handleCreateQuery = (values) => {
        let query
        let name = values.name
        let cpf = values.cpf
        if (name && cpf)
            query = `/leads?nome=${name}&cpf=${NumberOnly(values.cpf)}&_sort=id&_order=desc`
        else {
            if (!values.name && values.cpf) {
                query = `/leads?cpf=${NumberOnly(values.cpf)}&_sort=id&_order=desc`
            } else {
                if (values.name && !values.cpf) {
                    query = `/leads?nome=${values.name}&_sort=id&_order=desc`
                }
            }
        }
        return query
    }

    useEffect(() => {
        handleFetchAllLeads()
    }, [])

    return (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <Row>
                <Label>Filters</Label>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="name"
                        label="Name"
                        type="text"
                        onChange={handleChange}
                        value={values.name}
                        flex={1}
                    />
                </Column>
                <Column>
                    <Input
                        name="cpf"
                        label="CPF"
                        type="text"
                        onChange={handleChange}
                        value={values.cpf}
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
                        label="Search"
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