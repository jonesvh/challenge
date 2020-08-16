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
`

export { SelectContainer, StyledSelect, Label };