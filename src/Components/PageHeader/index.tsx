import React from 'react';
import logo from '../../assets/images/logo.svg'

import { Header, Image, Title } from './styles'

interface TitleProps {
    title: string;
}

const PageHeader: React.FC<TitleProps> = ({title}) => {
    return (
        <>
            <Header>
                <Image src={logo} alt="logo" />
            </Header>

            <Title className="label">{title}</Title>
        </>
    )
}

export default PageHeader;