import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import LinkButton from '../LinkButton';

import api from '../../services/api';

import { StyledForm, Row, Column, Label } from './styles'
import { useHistory } from 'react-router';

const AddForm = () => {

    const history = useHistory()

    const [maritalStatusOptions, setMaritalStatusOptions] = useState([
        { nomeEstadoCivil: "" }
    ])

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
            email: '',
            maritalStatus: '',
            spouseName: ''
        },
        validationSchema: yup.object().shape({
            name:
                yup
                    .string()
                    .required("Name is a required field"),
            cpf:
                yup
                    .number()
                    .required("CPF is a required field"),
            email:
                yup
                    .string()
                    .email()
                    .required(),
            maritalStatus:
                yup
                    .number()
                    .required(),
            spouseName:
                yup
                    .string()
                    .when('maritalStatus', {
                        is: 'married',
                        then:
                            yup
                                .string()
                                .required()
                    })
        }),
        onSubmit: values => {
            handleCreateNewLead(values)
        },
    })

    const handleCreateNewLead = (values) => {
        api.post('/leads', {
            nome: values.name,
            email: values.email,
            cpf: values.cpf,
            estadoCivil: values.maritalStatus,
            nomeConjugue: values.spouseName
        }).then(() => {
            alert('Cadastro realizado com sucesso')
            history.push('/')
        }).catch((err) => {
            console.log(err)
            alert('Erro ao efetuar cadastro.')
        })
    }

    const handleToggleDisabledInput = () => {
        if (formik.values.maritalStatus.toString() !== "1") {
            updateSpouseName()
            return true
        } else {
            return false
        }
    }

    const updateSpouseName = () => {
        formik.values.spouseName = ''
    }

    useEffect(() => {
        api.get('/tiposEstadoCivil').then(response => {
            setMaritalStatusOptions(response.data)
        })
    }, [])

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <Row>
                <Label>Dados</Label>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="name"
                        label="Nome"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        flex={1}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
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
                    {formik.touched.cpf && formik.errors.cpf ? (
                        <div>{formik.errors.cpf}</div>
                    ) : null}
                </Column>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="email"
                        label="Email"
                        type="email "
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        flex={1}
                    />

                    {formik.touched.cpf && formik.errors.cpf ? (
                        <div>{formik.errors.cpf}</div>
                    ) : null}
                </Column>

                <Column>

                    <Select
                        name="maritalStatus"
                        label="Estado Civil"
                        onChange={formik.handleChange}
                        value={formik.values.maritalStatus}
                        options={
                            maritalStatusOptions.map((e, index) => {
                                return { value: index, label: e.nomeEstadoCivil }
                            })
                        }
                    />
                </Column>
            </Row>
            <Row
                justifycontent="flex-start"
            >
                <Column>
                    <Input
                        name="spouseName"
                        label="Nome do Cônjuge"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.spouseName}
                        flex={1}
                        disabled={handleToggleDisabledInput()}
                    />
                </Column>
                <Column />
            </Row>
            <Row
                justifycontent="flex-end"
            >
                <Column
                    justifycontent="flex-start"
                >
                    <LinkButton
                        to="/"
                        label="Cancelar"
                        bgcolor="#989898"
                        bgcolorhover="#807f7f"
                    />
                </Column>
                <Column
                    justifycontent="flex-end"
                >
                    <Button
                        label="Cadastrar"
                        bgcolor="#F79028"
                        bgcolorhover="#e08427"
                        type="submit"
                    />
                </Column>
            </Row>
        </StyledForm>
    )
}

export default AddForm;