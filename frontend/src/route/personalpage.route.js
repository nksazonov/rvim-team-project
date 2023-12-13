import React from "react";
import HeaderComponent from "../component/header/header.component";
import styled from 'styled-components'
import PersonalPageComponent from "../component/personalpage.component";

const Container = styled.div`
background-color: #190837;
overflow-x: hidden;
padding: 0 30px;
`
const PersonalPageContainer = styled.div`
padding: 0 80px 30px;
`

export default class PersonalPageRoute extends React.Component {
    render() {
        return(
            <Container>
                <HeaderComponent/>
                <PersonalPageContainer>
                    <PersonalPageComponent/>
                </PersonalPageContainer>
            </Container>
        )
    }
}