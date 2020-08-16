import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import LinkButton from '../LinkButton';

import NumberOnly from '../../utils/numberOnly';

import api from '../../Services/api';

import { StyledForm, Row, Column, Label } from './styles'
import { useHistory, useLocation } from 'react-router';

const AddForm = () => {

    const [isUpdate, setIsUpdate] = useState(false)
    const [labelButton, setLabelButton] = useState("")
    const [initialValues, setInitialValues] = useState({
        id: 0,
        name: '',
        cpf: '',
        email: '',
        maritalStatus: '',
        spouseName: ''
    })

    const location = useLocation();

    const history = useHistory()

    const [maritalStatusOptions, setMaritalStatusOptions] = useState([
        { nomeEstadoCivil: "" }
    ])

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: yup.object().shape({
            name:
                yup
                    .string()
                    .required("Name is a required field"),
            cpf:
                yup
                    .string()
                    .required("CPF is a required field"),
            email:
                yup
                    .string()
                    .email()
                    .required(),
            maritalStatus:
                yup
                    .number(),
            spouseName:
                yup
                    .string()
                    .when('maritalStatus', {
                        is: 1,
                        then:
                            yup
                                .string()
                                .required('Nome do Cônjuge is a required field when Estado civil is Casado(a)')
                    })
        }),
        onSubmit: values => {
            if (isUpdate) {
                handleUpdateLead(values)
            } else {
                handleCreateNewLead(values)
            }
        },
    })

    const handleUpdateLead = (values) => {
        api.put(`/leads/${values.id}`, {
            nome: values.name,
            email: values.email,
            cpf: NumberOnly(values.cpf),
            estadoCivil: values.maritalStatus,
            nomeConjugue: values.spouseName
        }).then(() => {
            alert('Cadastro atualizado com sucesso')
            history.push('/')
        }).catch((err) => {
            console.log(err)
            alert('Erro ao atualizar cadastro.')
        })
    }

    const handleCreateNewLead = (values) => {
        api.post('/leads', {
            nome: values.name,
            email: values.email,
            cpf: NumberOnly(values.cpf),
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

    const handleLoadLead = (dados) => {
        setIsUpdate(true)
        setInitialValues({
            id: dados.id,
            name: dados.nome,
            cpf: dados.cpf,
            email: dados.email,
            maritalStatus: dados.estadoCivil,
            spouseName: dados.nomeConjugue,
        })
    }

    useEffect(() => {

        api.get('/tiposEstadoCivil').then(response => {
            setMaritalStatusOptions(response.data)
        })

        if (location.state !== undefined && location.state !== 0) {
            setLabelButton("Atualizar")
            api.get(`leads/${location.state}`).then(response => {
                handleLoadLead(response.data)
            })
        }else{
            setLabelButton("Cadastrar")
        }
    }, [])

    return (
        <StyledForm onSubmit={formik.handleSubmit} autoComplete="off">
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
                        mask={"999.999.999-99"}
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
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
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
                     {formik.touched.spouseName && formik.errors.spouseName ? (
                        <div>{formik.errors.spouseName}</div>
                    ) : null}
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
                        label={labelButton}
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