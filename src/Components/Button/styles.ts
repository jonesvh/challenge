import styled from 'styled-components';

interface Iprops {
    bgcolor: string;
    bgcolorhover: string;
}

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`

const ButtonItem = styled.button<Iprops> `
    border-radius: 3px;
    outline:0;
    border: 0 none;
    background: ${ props => props.bgcolor};
    font-weight: 600;
    height:35px;
    width: 6rem;
    cursor: pointer;
    font-size:14px;
    
    @media(max-width: 400px){
        font-size: 14px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
        width: 7rem;
        font-weight: 500;
    }

    &:hover {
        background: ${ props => props.bgcolorhover};
    }
`

export { ButtonContainer, ButtonItem };