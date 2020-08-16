import React, { SelectHTMLAttributes } from 'react';

import { SelectContainer, StyledSelect, Label } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{ value: number, label: string }>;
};

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {

    return (
        <SelectContainer>
            <Label htmlFor={name}>{label}</Label>
            <StyledSelect id={name} value={0} {...rest}>
                {options.map( option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </StyledSelect>
        </SelectContainer>
    )
}

export default Select;