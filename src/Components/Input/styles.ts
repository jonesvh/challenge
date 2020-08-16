import styled from 'styled-components';

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
    &:disabled {
        cursor: not-allowed;
        background: #D4D4D4;
    },
`

const Label = styled.label`
    color: #020202;
    font-size: 13px
`

export { InputContainer, InputItem, Label};