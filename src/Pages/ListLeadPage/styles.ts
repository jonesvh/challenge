import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'

interface IpropsRowColumn {
    justifycontent?: string;
}

interface IpropsTable {
    maxwidth374display?: string;
}

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:center
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 700px;
    padding:5px
`
const Label = styled.div`
    color: #020202;
    font-weight: 600;
    font-size: 15px
`
const Filter = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
`

const Row = styled.div<IpropsRowColumn> `
    display: flex;
    width: 100%;
    justify-content: ${ props => props.justifycontent};
    padding: 0;
`

const Column = styled.div<IpropsRowColumn> `
    display: flex;
    justify-content: ${ props => props.justifycontent};
    width: 100%;
    padding: 0;
`
const Table = styled.table`
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    width:100%;
    margin-top: 10px;
`
const Tbody = styled.tbody`
    background: #FFF;
    border-spacing: 1px;
    
`
const TrBody = styled.tr`
    border-bottom: 1px solid #224D74;
    @media(min-width: 401px) and (max-width: 800px) {
        height: 35px;
    }
    @media(min-width: 801px) {
        height: 40px;
    }
`

const TdBody = styled.td<IpropsTable>`
    @media(max-width: 400px) {
        display:${ props => props.maxwidth374display};
    }
`

const ThHead = styled.th<IpropsTable>`
    text-align: left;
    color: #FFF;
    font-weight: 500;
    @media(max-width: 400px) {
        font-size: 14px;
        display:${ props => props.maxwidth374display};
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 16px;
    }
    @media(min-width: 801px) {
        font-size: 18px;
    }
`

const StyledLink = styled(Link)`
    outline:0;
    border: 0 none;
    cursor: pointer;
    text-align:center;
    text-decoration: none;
    color:#111111;
    padding: 0px;
    &:visited {
        color: #111;
    } 
`
const TrashIco = styled(BsTrash)`
    padding: 0;
    width: 15;
    height: 15;
    cursor: "pointer";
`
const PencilIco = styled(BsPencilSquare)`
    padding: 0;
    width: 15;
    height: 15;
    cursor: "pointer";
`
export { Container, Content, Label, Filter, Row, Column, Table, Tbody, ThHead, TrBody, TdBody, StyledLink, TrashIco, PencilIco };