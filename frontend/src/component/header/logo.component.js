import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.nav`
display: inline;
text-align: center;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 41px;

.nav-link {
    list-style: none;
    text-decoration: none;
    color: #A3C7D6;
}
`
const Container = styled.div`
`
export class LogoComponent extends React.Component{
    render() {
        return(
        <Container>
            <LogoContainer><Link to={`/main`} className="nav-link">CuberCube</Link></LogoContainer>
        </Container>
        )
    }


}