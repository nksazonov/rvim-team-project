import React from "react";
import styled from "styled-components";
import ButtonGroup from "./buttonGroup.component";

export default class DownloadComponent extends React.Component {
    render() {
        return(
            <Container>
                <Title>SYSTEM REQUIREMENTS</Title>
                <Content>
                    <TextContent>
                        <TextContentTitle>
                            MINIMUM:
                        </TextContentTitle>
Requires a 64-bit processor and operating system
OS: Windows 10 <br/>
Processor: INTEL CORE I5-8400 or AMD RYZEN 3 3300X <br/>
Memory: 12 GB RAM <br/>
Graphics: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB <br/>
DirectX: Version 12 <br/>
Storage: 60 GB available space <br/>
Sound Card: Windows Compatible Audio Device
                    </TextContent>
                    <TextContent>
                    <TextContentTitle>
                        RECOMMENDED:
                    </TextContentTitle>
Requires a 64-bit processor and operating system
OS: Windows 10/11 <br/>
Processor: INTEL CORE I7-8700K or AMD RYZEN 5 3600X <br/>
Memory: 16 GB RAM <br/>
Graphics: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB <br/>
DirectX: Version 12 <br/>
Storage: 60 GB available space <br/>
Sound Card: Windows Compatible Audio Device
                    </TextContent>
                </Content>
                <ButtonContainer>
                    <ButtonGroup buttons={["CHROM", "IOS", "ANDROID"]} />
                    <ButtonDownload>DOWNLOAD</ButtonDownload>
                </ButtonContainer>
            </Container>
        )
    }
}

const Container = styled.div`
`
const Title = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
padding: 10px 80px;
color: #A3C7D6;
`
const Content = styled.div`
display: flex;
justify-content: center;
`
const TextContent = styled.div`
width: 500px;
padding:  0 24px;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 28px;
color: #FFFFFF;

`
const TextContentTitle = styled.p`
`
const ButtonContainer = styled.div`
padding: 10px 90px`

const ButtonDownload = styled.button`
display: block;
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
margin: 20px 0;
`