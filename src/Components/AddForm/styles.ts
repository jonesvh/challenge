import styled from 'styled-components'

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
`

const Row = styled.div<Iprops> `
    display: flex;
    width: 100%;
    justify-content: ${ props => props.justifycontent};
    padding: 0;
`

const Column = styled.div<Iprops> `
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.justifycontent};
    width: 100%;
    padding: 0;
`
const Label = styled.div`
    color: #020202;
    font-weight: 600;
    
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

export { StyledForm, Row, Column, Label }