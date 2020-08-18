import styled from 'styled-components';

import InputMask from 'react-input-mask';

interface Iprops {
    bordercolor: string;
}

const InputContainer = styled.div `
    flex:1;
    display: flex;
    flex-direction: column;
    width: 40vw;
    max-width: 330px;
`

const InputItem = styled.input<Iprops> `
    flex:0;
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

    @media(max-width: 400px){
        font-size: 14px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
    }
    
`
const Label = styled.label`
    color: #020202;
    @media(max-width: 400px){
        font-size: 14px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
    }

`
const StyleInputMask = styled(InputMask)<Iprops> `
    flex:0;
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
    
    @media(max-width: 400px){
        font-size: 14px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
    }
`
const ErrorMsg = styled.div `
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    padding: 0px;
    @media(max-width: 400px){
        display:none;
    }
`
const ErrorMsgText = styled.div `
    padding-top: 0;
    color: #ff0000;
    text-align: end;
`

export { InputContainer, InputItem, Label, StyleInputMask, ErrorMsg, ErrorMsgText };