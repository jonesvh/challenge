import React, { InputHTMLAttributes } from 'react';

import { InputContainer, InputItem, Label, StyleInputMask } from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: string;
    flex?: number;
    disabled?: boolean;
    mask?: string;
    error?: boolean;
}

const Input: React.FC<InputProps> = ({ name, label, flex, type, disabled, mask, error, ...rest }) => {
    
    let bordercolor = ""
    if (error) {
        bordercolor = "#ff0000"
    }
    return (
        <InputContainer style={{ flex: flex }}>
            <Label htmlFor={name}>{label}</Label>
            {/* <InputItem type={type ? type : "text"} id={name} {...rest} disabled={disabled} bordercolor={bordercolor} /> */}
            {!mask ?
                <InputItem type={type ? type : "text"} id={name} {...rest} disabled={disabled} bordercolor={bordercolor} />
                :
                <StyleInputMask type={type ? type : "text"} id={name} {...rest} mask="999.999.999-99" />
            }
        </InputContainer>
    )
}

export default Input;