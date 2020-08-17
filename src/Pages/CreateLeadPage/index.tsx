import React from 'react';

import { Container, Content } from './styles';
import PageHeader from '../../components/pageheader';
import AddForm from '../../components/addform';

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