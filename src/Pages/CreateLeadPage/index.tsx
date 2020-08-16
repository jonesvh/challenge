import React from 'react';

import { Container, Content } from './styles';
import PageHeader from '../../Components/PageHeader';
import AddForm from '../../Components/AddForm';

function CreateLeadPage() {
    return (
        <Container>
            <Content>
                <PageHeader title="Cadastro de Leads"/>
                <AddForm/>
            </Content>
        </Container>
    )
}

export default CreateLeadPage;