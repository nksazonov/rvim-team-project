import React from "react";
import HeaderComponent from "../component/header/header.component";
import styled from 'styled-components'
import MainComponent from "../component/main.component";

const MainContainer = styled.div`
background-color: #190837;
overflow-x: hidden;
padding: 0 40px;
`


export default class MainRoute extends React.Component {
    render() {
        return(
            <MainContainer>
                <HeaderComponent/>
                <MainComponent/>
            </MainContainer>
        )
    }
}