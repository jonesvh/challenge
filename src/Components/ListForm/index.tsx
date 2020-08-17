import React, { useEffect } from 'react';
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

        handleCreateQuery(values)

        api.get(handleCreateQuery(values), {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setLeads(response.data)
        })
    }

    function handleCreateQuery(values) {
        let query
        if (values.name && values.cpf)
            query = `/leads?nome=${values.name}&cpf=${NumberOnly(values.cpf)}&_sort=id&_order=desc`
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

    function handleFetchAllLeads() {
        api.get('/leads?_sort=id&_order=desc', {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
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
            } else {
                handleFetchAllLeads()
            }
        },
    })

    useEffect(() => {
        handleFetchAllLeads()
    }, [])

    return (
        <StyledForm onSubmit={formik.handleSubmit} autoComplete="off">
            <Row>
                <Label>Filters</Label>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="name"
                        label="Name"
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