import styled from 'styled-components'
import InputMask from 'react-input-mask'

interface Iprops {
    justifycontent?: string;
}

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    padding:5px;
    autocomplete:"off"
`

const Row = styled.div<Iprops> `
    display: flex;
    width: 100%;
    justify-content: ${ props => props.justifycontent};
    padding: 0;
`

const Column = styled.div<Iprops> `
    display: flex;
    justify-content: ${ props => props.justifycontent};
    width: 100%;
    padding: 0;
`
const Label = styled.div`
    color: #020202;
    font-weight: 600;
    font-size: 15px
`

export { StyledForm, Row, Label, Column }