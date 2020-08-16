import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IpropsRowColumn {
    justifycontent?: string;
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
    padding:0
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
`
const Tbody = styled.tbody`
    background: #FFF;
    border-spacing: 1px;
    
`
const TrBody = styled.tr`
    border-bottom: 1px solid #224D74;
`
const ThHead = styled.th`
    text-align: left;
    color: #FFF;
    font-weight: 500;
`

const StyledLink = styled(Link)`
    padding: 0;
    &:visited {
        color: #111;
    }
`

export { Container, Content, Label, Filter, Row, Column, Table, Tbody, ThHead, TrBody, StyledLink };