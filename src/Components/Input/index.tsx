import React, { InputHTMLAttributes } from 'react';

import { InputContainer, InputItem, Label, StyleInputMask, ErrorMsg, ErrorMsgText } from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: string;
    flex?: number;
    disabled?: boolean;
    mask?: string;
    error?: boolean;
    msgerror?: string;
}

const Input: React.FC<InputProps> = ({ name, label, flex, type, disabled, mask, error, msgerror, ...rest }) => {

    let bordercolor = ""
    if (!error) {
        bordercolor = "#ff0000"
    }
    return (
        <InputContainer style={{ flex: flex }}>
            <Label htmlFor={name}>{label}</Label>
            {!mask ?
                <InputItem type={type ? type : "text"} id={name} {...rest} disabled={disabled} bordercolor={bordercolor} />
                :
                <StyleInputMask type={type ? type : "text"} id={name} {...rest} mask="999.999.999-99" bordercolor={bordercolor}/>
            }
            {!error && <ErrorMsg><ErrorMsgText>{msgerror}</ErrorMsgText></ErrorMsg>}
        </InputContainer>
    )
}

export default Input;