import styled from 'styled-components';

const SelectContainer = styled.div `
    display:flex;
    flex-direction: column;
    width: 100%
`
const StyledSelect = styled.select `
    border-color: #DCDCDC;
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    outline: 0;
`

const Label = styled.label `
    padding-left: 0;
    
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

export { SelectContainer, StyledSelect, Label };