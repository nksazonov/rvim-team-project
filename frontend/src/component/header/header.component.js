import React from "react";
import styled from 'styled-components'
import { LogoComponent } from "./logo.component";
import {NavbarComponent} from "./navbar.component";

const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  list-style: none;
  padding: 25px 80px;
  position: relative;
  z-index: 100;

`
const Container = styled.div`
  padding: 10px 0 0;
  margin: 0;
  display: block;
  width: 100%;
`

export class HeaderComponent extends React.Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <LogoComponent/>
                    <NavbarComponent/>
                </HeaderContainer>
            </Container>

        );
    }
}


export default HeaderComponent;