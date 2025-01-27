import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Iprops {
    bgcolor: string;
    bgcolorhover: string;
}

const ContainerButtonNew = styled.div`
    display:flex;
    justify-content:flex-start;
`
const StyledLink = styled(Link)<Iprops> `
    border-radius: 3px;
    outline:0;
    border: 0 none;
    background: ${ props => props.bgcolor};
    font-weight: 600;
    height:35px;
    width: 6rem;
    cursor: pointer;
    text-align:center;
    text-decoration: none;
    padding: 10px;
    color: #111;
    &:hover {
        background: ${ props => props.bgcolorhover};
    },
    &:visited {
        color: #111;
    }

    @media(max-width: 400px){
        font-size: 14px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
        width: 7rem;
        padding: 8px;
        font-weight: 500;
    }
`
export { ContainerButtonNew, StyledLink }