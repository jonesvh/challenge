import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import SchemaAddForm from './schema';

import Input from '../input';
import Button from '../button';
import Select from '../select';
import LinkButton from '../linkbutton';

import NumberOnly from '../../utils/numberOnly';

import { useHistory, useLocation } from 'react-router';

import api from '../../services/api';

import { StyledForm, Row, Column, Label } from './styles'

const AddForm = () => {
    const location = useLocation();
    const history = useHistory()

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
    const [maritalStatusOptions, setMaritalStatusOptions] = useState([
        { nomeEstadoCivil: "" }
    ])

    const {
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        values
    } = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: SchemaAddForm,
        onSubmit: values => {
            if (isUpdate) {
                handleUpdateLead(values)
            } else {
                handleCreateNewLead(values)
            }
        },
    })

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

    const handleToggleDisabledInput = () => {
        if (values.maritalStatus.toString() !== "1") {
            updateSpouseName()
            return true
        } else {
            return false
        }
    }

    const updateSpouseName = () => {
        values.spouseName = ''
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
            setLabelButton("Update")
            api.get(`leads/${location.state}`).then(response => {
                handleLoadLead(response.data)
            })
        } else {
            setLabelButton("Save")
        }
    }, [])

    return (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <Row>
                <Label>Lead</Label>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="name"
                        label="Name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        flex={1}
                        error={(errors.name?.length !== 0 && errors.name !== undefined) && touched.name}
                        msgerror={errors.name}
                    />
                </Column>
                <Column>
                    <Input
                        name="cpf"
                        label="CPF"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cpf}
                        flex={1}
                        mask={"999.999.999-99"}
                        error={(errors.cpf?.length !== 0 && errors.cpf !== undefined) && touched.cpf}
                        msgerror={errors.cpf}
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Input
                        name="email"
                        label="Email"
                        type="email "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        flex={1}
                        error={(errors.email?.length !== 0 && errors.email !== undefined) && touched.email}
                        msgerror={errors.email}
                    />
                </Column>

                <Column>

                    <Select
                        name="maritalStatus"
                        label="Marital Status"
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={values.maritalStatus}
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
                        label="Spouse Name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.spouseName}
                        flex={1}
                        disabled={handleToggleDisabledInput()}
                        error={(errors.spouseName?.length !== 0 && errors.spouseName !== undefined) && touched.spouseName}
                        msgerror={errors.spouseName}
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
                        label="Cancel"
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