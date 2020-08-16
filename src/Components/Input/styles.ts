import styled from 'styled-components';

import InputMask from 'react-input-mask';

interface Iprops {
    bordercolor: string;
}

const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const InputItem = styled.input<Iprops> `
    border-color: ${ props => props.bordercolor || "#DCDCDC"};
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    outline: 0;
    color: #3C3C3C !important;
    &:disabled {
        cursor: not-allowed;
        background: #D4D4D4;
    };
    
`
const Label = styled.label`
    color: #020202;
    font-size: 13px
`
const StyleInputMask = styled(InputMask)<Iprops> `
    border-color: ${ props => props.bordercolor || "#DCDCDC"};
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    outline: 0;
    color: #3C3C3C !important;
    &:disabled {
        cursor: not-allowed;
        background: #D4D4D4;
    };
    
`

export { InputContainer, InputItem, Label, StyleInputMask };