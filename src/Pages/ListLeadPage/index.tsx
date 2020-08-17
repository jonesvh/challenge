import React, { useEffect } from 'react';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'

import { Container, Content, Table, Tbody, ThHead, TrBody, TdBody, StyledLink } from './styles'
import PageHeader from '../../components/pageheader';
import ListForm from '../../components/listform';
import LinkButton from '../../components/linkbutton';

import { useLeads } from '../../context/Leads';

import CPFMask from '../../utils/cpfMask';
import api from '../../services/api';


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
            console.log(response)
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
                                <ThHead maxwidth374display="none">Email</ThHead>
                                <ThHead>Name</ThHead>
                                <ThHead>CPF</ThHead>
                            </tr>
                        </thead>
                        <Tbody>
                            {
                                leads.map(function (lead) {
                                    return (
                                        <TrBody key={lead.id}>
                                            <TdBody>
                                                <StyledLink to={{
                                                    pathname: '/add',
                                                    state: lead.id,
                                                }}>
                                                    <BsPencilSquare style={{ padding: 0, width: 15, height: 15, cursor: "pointer" }} />
                                                </StyledLink>
                                            </TdBody>
                                            <TdBody><BsTrash style={{ padding: 0, width: 15, height: 15, cursor: "pointer" }} onClick={(e) => { handleDeleteLead(lead.id) }} /></TdBody>
                                            <TdBody maxwidth374display="none">{lead.email}</TdBody>
                                            <TdBody>{lead.nome}</TdBody>
                                            <TdBody>{CPFMask(lead.cpf)}</TdBody>
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