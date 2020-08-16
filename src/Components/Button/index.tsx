import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer, ButtonItem } from './styles'

type Type = "button" | "submit" | "reset";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    bgcolor: string;
    bgcolorhover: string;
    type?: Type;
}

const Button: React.FC<ButtonProps> = ({ label, bgcolor, bgcolorhover, type, ...rest }) => {
    return (
        <ButtonContainer>
            <ButtonItem type={type ? type : "button"} {...rest} bgcolor={bgcolor} bgcolorhover={bgcolorhover}>
                {label}
            </ButtonItem>
        </ButtonContainer>
    )
}

export default Button;