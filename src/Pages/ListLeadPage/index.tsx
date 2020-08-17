import React, { useEffect } from 'react';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'

import { Container, Content, Table, Tbody, ThHead, TrBody, StyledLink } from './styles'
import PageHeader from '../../Components/PageHeader';
import ListForm from '../../Components/ListForm';
import LinkButton from '../../Components/LinkButton';

import { useLeads } from '../../Context/Leads';

import CPFMask from '../../utils/cpfMask';
import api from '../../Services/api';


interface Ilead {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    estadoCivil: string;
    nomeConjugue: string;
}


function ListLeadPage() {

    function handleFetchLeads() {
        api.get('/leads?_sort=id&_order=desc').then(response => {
            setLeads(response.data)
        })
    }

    function handleDeleteLead(id: number) {
        api.delete(`/leads/${id}`).then(() => {
            handleFetchLeads()
        })
    }

    const { leads, setLeads } = useLeads();

    useEffect(() => {
        //handleFetchLeads()
    }, [])

    return (
        <Container>
            <Content>
                <PageHeader title="Search Leads" />
                <ListForm />
                <LinkButton
                    to="/add"
                    label="New Lead"
                    bgcolor="#F79028"
                    bgcolorhover="#e08427"
                />
                {leads.length > 0 &&

                    <Table>
                        <thead>
                            <tr>
                                <ThHead></ThHead>
                                <ThHead></ThHead>
                                <ThHead>Email</ThHead>
                                <ThHead>Name</ThHead>
                                <ThHead>CPF</ThHead>
                            </tr>
                        </thead>
                        <Tbody>
                            {
                                leads.map(function (lead) {
                                    return (
                                        <TrBody key={lead.id}>
                                            <td>
                                                <StyledLink to={{
                                                    pathname: '/add',
                                                    state: lead.id,
                                                }}>
                                                    <BsPencilSquare style={{ padding: 0, width: 15, height: 15, cursor: "pointer" }} />
                                                </StyledLink>
                                            </td>
                                            <td style={{ paddingLeft: 0 }}><BsTrash style={{ padding: 0, width: 15, height: 15, cursor: "pointer" }} onClick={(e) => { handleDeleteLead(lead.id) }} /></td>
                                            <td>{lead.email}</td>
                                            <td>{lead.nome}</td>
                                            <td>{CPFMask(lead.cpf)}</td>
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