import React from "react";
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import Logo from '../assets/images/img1.png'
import Logo2 from '../assets/images/img4.png'
import { Link } from "react-router-dom";

export default class MainComponent extends React.Component {
    render() {
        return (
            <Container>
                <MainContainer>
                    <TitleContainer>
                        <Title>Discover, Play, Collect and Sell Extraordinary NFTs</Title>
                        <ButtonContainer>
                            <Button>ABOUT GAME</Button>
                            <HowItWorksButton>
                                <Icon className="button-icon" icon="fa-regular:play-circle" color="#a3c7d6" width="35" />
                                    <ButtonNameLink href="#how">
                                        <ButtonName>
                                             How it works?
                                        </ButtonName>
                                    </ButtonNameLink>
                            </HowItWorksButton>
                        </ButtonContainer>
                        <ButtonContainer>
                            <Link to={`/download`}>
                            <DownloadButton>DOWNLOAD</DownloadButton>
                            </Link>
                        </ButtonContainer>
                    </TitleContainer>
                    <PictureContainer>
                        <Picture src={Logo} alt="React Logo" />
                    </PictureContainer>
                </MainContainer>
                <NFTContainer>
                <NFTTitleContainer id="how">
                            <NFTTitle>
                                What Are NFT, and How Do They Work?
                            </NFTTitle>
                        </NFTTitleContainer>
                    <NFTContentContainer>
                    <PictureContainer>
                        <Picture src={Logo2} alt="React Logo" />
                    </PictureContainer>
                    <TextContainer>
                        <Text>
                        NFTs are tokens that we can use to represent ownership of unique items.
                        They let us tokenize things like art, collectibles, even real estate.
                        Ownership of an asset is secured by the Ethereum blockchain – no one
                        can modify the record of ownership or copy/paste a new NFT into existence.<br/>
                        NFT stands for non-fungible token. Non-fungible is an economic term that you
                        could use to describe things like your furniture, a song file, or your computer.
                        These things are not interchangeable for other items because they have unique
                        properties.
                        </Text>
                    </TextContainer>
                    </NFTContentContainer>
                </NFTContainer>
            </Container>

        );
    }
}

const TitleContainer = styled.div`
width: 600px;
`
const Title = styled.div`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #FFFFFF;
margin-bottom: 2vh;
`
const Button = styled.button`
display: inline;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
width: 174px;
height: 46px;
box-sizing: border-box;
background: linear-gradient(270deg, #AD5389 0%, #3C1053 100%);
border-radius: 20px;
border: none;
`
const ButtonContainer = styled.div`
padding: 10px 0;
width: 600px;
display: inline-block;
text-align: center;
`
const DownloadButton = styled.button`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #A3C7D6;
box-sizing: border-box;
background: rgba(0,0,0,0);
width: 172px;
height: 45px;
left: 359px;
top: 551px;
border: 2px solid #A3C7D6;
border-radius: 50px;

&:hover {
    background: rgba(163, 199, 214, 0.3);
    cursor: pointer;
}
`
const HowItWorksButton = styled.div`
 padding: 0 10px;
 display: inline;
 box-sizing: border-box;
 position: relative;
 .button-icon {
    display: inline-block;
    text-align: center;
    position: absolute;
    top: -10px;
 }
 `
const ButtonName = styled.p`
 display: inline;
 padding: 0 0 0 45px;
 font-family: 'Rajdhani';
 font-style: normal;
 font-weight: 600;
 font-size: 20px;
 line-height: 26px;
 text-align: center;
 color: #FFFFFF;

&:hover {
    color: rgba(200, 200, 200, 0.9);
    cursor: pointer;
}
 `

const MainContainer = styled.header`
  align-items: center;
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  vertical-align: center;
  justify-content: space-around;
  padding: 25px 80px 120px;
  position: relative;
  z-index: 100;
`
const Container = styled.div`
  display: block;
  padding: 30px 0;
  margin: 0;
  width: 100%;
`
const PictureContainer = styled.div`
padding: 0 25px;
`
const Picture = styled.img`
width: 390px;
height: 390px;
object-fit: cover;
border-radius: 30px;
`
const NFTContainer = styled.div`
background: rgba(173, 83, 137, 0.3);
display: block;
border-radius: 30px;
`
const NFTContentContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;
gap: 7vw;
padding: 4vh 5vw 5vh;
`
const NFTTitle = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 4vh;
line-height: 6vh;
text-align: center;
color: #FFFFFF;
padding: 4vh 0 0;
`
const TextContainer = styled.div`
width: 530px;
`
const Text = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 22px;
line-height: 35px;
text-align: left;
color: #FFFFFF;
`
const NFTTitleContainer = styled.div`
`
const ButtonNameLink = styled.a`
text-decoration: none;
`
