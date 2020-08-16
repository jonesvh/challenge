import React, { InputHTMLAttributes } from 'react';

import { InputContainer, InputItem, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: string;
    flex?: number;
    disabled?: boolean;
    error?: boolean;
}

const Input: React.FC<InputProps> = ({ name, label, flex, type, disabled, error, ...rest }) => {
    let bordercolor = ""
    if (error){
        bordercolor="#ff0000"
    }

    return (
        <InputContainer style={{flex: flex}}>
            <Label htmlFor={name}>{label}</Label>
            <InputItem type={type ? type : "text"} id={name} {...rest} disabled={disabled} bordercolor={bordercolor}/>
        </InputContainer>
    )
}

export default Input;