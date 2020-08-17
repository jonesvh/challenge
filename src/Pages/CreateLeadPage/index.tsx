import React from 'react';

import { Container, Content } from './styles';
import PageHeader from '../../components/pageHeader';
import AddForm from '../../components/addForm';

function CreateLeadPage() {
    return (
        <Container>
            <Content>
                <PageHeader title="Register a Lead"/>
                <AddForm/>
            </Content>
        </Container>
    )
}

export default CreateLeadPage;