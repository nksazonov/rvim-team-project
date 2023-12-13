import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';


export class NavbarComponent extends React.Component{

    render() {
        return (
            <NavbarContainer>
                <nav className= 'navbar'>
                    <ul>
                        <li className= 'nav-item'>
                            <Link to= {`/nft`} className='nav-link'>
                              <LinkToNFTButton>View NFTs!</LinkToNFTButton>
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                          <Link to={`/sign_up`}>
                          <SignUpButton>Sign up</SignUpButton>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <LanguageButton>ENG</LanguageButton>
                        </li>
                    </ul>
                </nav>
            </NavbarContainer>
        )
    }
}

const NavbarContainer = styled.nav`
  .nav-item {
    display: inline;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #A3C7D6;
    padding: 0 10px;
  }
  .nav-link {
    list-style: none;
    text-decoration: none;
    color: #A3C7D6;
  }
`

const LinkToNFTButton = styled.button`
display: inline;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 2vh;
line-height: 3vh;
text-align: center;
color: #FFFFFF;
width: 200px;
height: 5vh;
box-sizing: border-box;
background: #883E78;
border-radius: 2.5vh;
border: none;

&:hover {
    background: rgba(136, 62, 120, 0.2);
    border: 2px solid #883E78;
    cursor: pointer;
}
`

const SignUpButton = styled.button`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
text-decoration: none;

box-sizing: border-box;
background: rgba(0,0,0,0);
width: 120px;
height: 5vh;
color:#A3C7D6;
border: 2px solid #A3C7D6;
border-radius: 50px;

&:hover {
    background: rgba(163, 199, 214, 0.3);
    cursor: pointer;
}
`
const LanguageButton = styled.button`
display: inline;
width: 67px;
height: 5vh;
left: 299.87px;
top: 45.4px;
border: 6px solid #A3C7D6;
border-radius: 50px;
transform: rotate(-0.34deg);
color:black;
background-color: #A3C7D6;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
text-align: center;
`
