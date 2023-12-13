
import React from "react";
import styled from "styled-components";
import { Form, Input, FormGroup } from 'reactstrap';
import {ethers} from 'ethers';
import { smartContractAddress } from "../config";
import { SmartContract } from "../blockchain/setup";

const fetchAllNFTs = async () => {
    const lastTokenId = (await SmartContract.lastTokenID()).toNumber();
    const tokenIds = Array.from(Array(lastTokenId).keys());

    const nfts = [];
        const tokensData = await SmartContract.tokensData(tokenIds);

    for (let tokenId = 0; tokenId < lastTokenId; tokenId++) {
        nfts.push({
            tokenId,
            pixels: tokensData[tokenId],
        });
    }
    console.log({nfts});
    return nfts;
}

function NFTComponent() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [NFTs, setNFTs] = React.useState([]);

    const handleChange = async event => {
        const searchStr = event.target.value;
        setSearchTerm(searchStr);

        if (searchStr === '') {
            setNFTs(await fetchAllNFTs());
        } else if (ethers.utils.isAddress(searchStr)) {
            const tokenIds = (await SmartContract.tokensOf(searchStr)).map(bnTokenId => bnTokenId.toNumber());
            const nfts = [];
            const tokensData = await SmartContract.tokensData(tokenIds);

            for (let tokenId of tokenIds) {
                nfts.push({
                    tokenId,
                    pixels: tokensData[tokenId],
                });
            }

            setNFTs(nfts);
        }
    };

    React.useEffect(() => {
        const loadNFTs = async () => {
            setNFTs(await fetchAllNFTs());
        }
        loadNFTs();
    }, []);


    function extractRGB(color){
        const r = (color >> 5)
        const g = ((color >> 2) & 7)
        const b = (color & 3)

        const red = Math.floor(((r) * 255) / 7);
        const green = Math.floor(((g) * 255) / 7);
        const blue = Math.floor(((b) * 255) / 3);
        return ("rgb(" + (red) + "," + (green) + "," + blue + ")");
    }

    return(
        <Container>
            <Title>Explore your NFT collection</Title>
            <Form>
                <FormGroup>
                    <Input
                        id="NFTname"
                        name="owner"
                        placeholder="Address of the owner"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </FormGroup>
            </Form>
            <CardContainer>
                {
                    NFTs.length === 0 ?
                    <p>No NFTs found</p>
                    : NFTs.slice(0, NFTs.length).map((NFT) =>
                <Card
                    href={`https://mumbai.polygonscan.com/token/${smartContractAddress}?a=${NFT.tokenId}`}
                    target="_blank"
                    key={`card-${NFT.tokenId}`}
                    style={{backgroundColor: "rgba(x,x,x,0.3)".replace(/x/g, y=>(Math.random()*255|0)),}}
                >
                    <CardImage key={`card-image-${NFT.tokenId}`} >
                        <CardTable key={`card-table-${NFT.tokenId}`}>
                            <tbody key={`card-table-body-${NFT.tokenId}`}>
                                {NFT.pixels.slice(0, NFT.pixels.length).map((row, rowIdx) => {
                                    return (
                                        <tr key={`pixels-${NFT.tokenId}-${rowIdx}`}>
                                            {row.map((pixel, pixelIdx) => {
                                                return(
                                                    <td
                                                        style={{
                                                            backgroundColor: extractRGB(pixel),
                                                            width: "24px",
                                                            height: "24px"
                                                        }}
                                                        key={`pixel-${NFT.tokenId}-${pixel}-${pixelIdx}`}
                                                    ></td>
                                                )
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </CardTable>

                    </CardImage>

                    <CardName key={`card-name-${NFT.tokenId}`}>Token ID: {NFT.tokenId}</CardName>

                </Card>
                )}
            </CardContainer>
        </Container>
    )
}
export default NFTComponent;

const Title = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 48px;
text-align: center;
color: #A3C7D6;
display: block;
`
const Container = styled.div`
Form {
    padding: 10px 0;
    text-align: center;
}
Input {
    display: inline-block;
    border: 2px solid #A3C7D6;
    border-radius: 50px;
    background: rgba(0,0,0,0);
    width: 85%;
    height: 46px;
    margin-bottom: 10px;
}
Input::placeholder {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 31px;
    color: #FFFFFF;
}
Input:valid{
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
    background: rgba(0,0,0,0);
    padding: 0 0 0 25px;
}
`
const CardContainer = styled.div`
text-align: center;
padding: 0 6vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
`

const Card = styled.a`
display: block;
margin: 10px;
border-radius: 20px;

cursor: pointer;
text-decoration: none;

position: relative;
top: 0;

transition: top .2s, opacity .2s;

&:hover {
    top: -10px;
    opacity: 0.8;
}
`

const CardName = styled.div`
background-color: #883E78;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
text-align: center;

padding: 10px 0
`

const CardImage = styled.div`
display: flex;
width: 230px;
height: 230px;
justify-content: center;
align-items: center;
border-radius: 20px;
`

const CardTable = styled.table`
border-spacing: 0;
border-collapse: collapse;
`
