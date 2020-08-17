import styled from 'styled-components';

const Header = styled.div`
    margin-bottom: 30px;
`
const Image = styled.img`
    @media(max-width: 400px){
        width: 200px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        width: 260px;
    }
    @media(min-width: 801px) {
        width: 280px;
    }
`
const Title = styled.div`
    color: #FFFFFF;

    @media(max-width: 400px){
        font-size: 24px;
    }
    @media(min-width: 401px) and (max-width: 800px) {
        font-size: 26px;
    }
    @media(min-width: 801px) {
        font-size: 28px;
    }
`
export { Header, Image, Title }