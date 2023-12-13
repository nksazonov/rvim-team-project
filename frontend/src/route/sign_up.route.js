import React from "react";
import HeaderComponent from "../component/header/header.component";
import styled from 'styled-components'
import RegisterComponent from "../component/registration.component";

const Container = styled.div`
background-color: #190837;
overflow-x: hidden;
padding: 0 40px;
`


export default class SignUpRoute extends React.Component {
    render() {
        return(
            <Container>
                <HeaderComponent/>
                <RegisterComponent/>
            </Container>
        )
    }
}