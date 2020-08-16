import React from 'react';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';

import { StyledForm, Row, Column, Label } from './styles'


const ListForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
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