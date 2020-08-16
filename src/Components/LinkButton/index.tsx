import React from 'react';

import { ContainerButtonNew, StyledLink } from './styles'

interface IProps {
    to: string;
    label: string;
    bgcolor: string;
    bgcolorhover: string;
}

const LinkButton: React.FC<IProps> = ({to, label, bgcolor, bgcolorhover}) => {

    return (
        <ContainerButtonNew>
            <StyledLink to={to} bgcolor={bgcolor} bgcolorhover={bgcolorhover}>
                {label}
            </StyledLink>
        </ContainerButtonNew>
    )
}

export default LinkButton;