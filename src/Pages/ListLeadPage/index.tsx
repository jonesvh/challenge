import React, { useState, useEffect } from 'react';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'

import { Container, Content, Table, Tbody, ThHead, TrBody } from './styles'
import PageHeader from '../../Components/PageHeader';
import ListForm from '../../Components/ListForm';
import LinkButton from '../../Components/LinkButton';
//import InputMask from 'react-input-mask';

import api from '../../services/api';

interface Ilead {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    estadoCivil: string;
    nomeConjugue: string;
}

async function handleEditLead(id: number) {

}

function ListLeadPage() {

    function handleFetchLeads() {
        api.get('/leads').then(response => {
            setLeads(response.data)
        })
    }

    function handleDeleteLead(id: number) {
        api.delete(`/leads/${id}`).then(() => {
            handleFetchLeads()
        })
    }

    const [Leads, setLeads] = useState([
        { id: 0, nome: '', email: '', cpf: '', estadoCivil: '', nomeConjugue: '' }
    ])

    useEffect(() => {
        handleFetchLeads()
    }, [])

    return (
        <Container>
            <Content>
                <PageHeader title="Consulta de Leads" />
                <ListForm />
                <LinkButton
                    to="/add"
                    label="Novo Lead"
                    bgcolor="#F79028"
                    bgcolorhover="#e08427"
                />
                {Leads.length > 0 &&
                    <Table className="pure-table">
                        <thead>
                            <tr>
                                <ThHead></ThHead>
                                <ThHead></ThHead>
                                <ThHead>Email</ThHead>
                                <ThHead>Nome</ThHead>
                                <ThHead>CPF</ThHead>
                            </tr>
                        </thead>
                        <Tbody>
                            {
                                Leads.map(function (lead) {
                                    return (
                                        <TrBody key={lead.id}>
                                            <td><BsPencilSquare style={{ width: 25, height: 25, cursor: "pointer" }} onClick={(e) => { handleEditLead(lead.id) }} /></td>
                                            <td><BsTrash style={{ width: 25, height: 25, cursor: "pointer" }} onClick={(e) => { handleDeleteLead(lead.id) }} /></td>
                                            <td>{lead.email}</td>
                                            <td>{lead.nome}</td>
                                            <td>{lead.cpf}</td>
                                        </TrBody>
                                    );
                                })
                            }
                        </Tbody>
                    </Table>
                }
            </Content >
        </Container >
    );
}

export default ListLeadPage;