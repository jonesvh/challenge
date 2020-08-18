import React, { useEffect } from 'react';

import PageHeader from '../../components/pageheader';
import ListForm from '../../components/listform';
import LinkButton from '../../components/linkbutton';

import { useLeads } from '../../context/Leads';

import CPFMask from '../../utils/cpfMask';
import api from '../../services/api';

import { Container, Content, Table, Tbody, ThHead, TrBody, TdBody, StyledLink, TrashIco, PencilIco } from './styles'

const ListLeadPage = () => {

    const { leads, setLeads } = useLeads();

    const handleFetchLeads = () => {
        api.get('/leads?_sort=id&_order=desc').then(response => {
            console.log(response)
            setLeads(response.data)
        })
    }

    const handleDeleteLead = (id: number) => {
        api.delete(`/leads/${id}`).then(() => {
            handleFetchLeads()
        })
    }

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
                                                    <PencilIco/>
                                                </StyledLink>
                                            </TdBody>
                                            <TdBody><TrashIco onClick={() => { handleDeleteLead(lead.id)}} /></TdBody>
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