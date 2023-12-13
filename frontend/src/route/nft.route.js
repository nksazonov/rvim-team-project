import React from "react";
import HeaderComponent from "../component/header/header.component";
import styled from 'styled-components'
import NFTComponent from "../component/nft.component";

const NFTContainer = styled.div`
background-color: #190837;
overflow-x: hidden;
padding: 0 40px;
`


export default class NFTRoute extends React.Component {
    render() {
        return(
            <NFTContainer>
                <HeaderComponent/>
                <NFTComponent/>
            </NFTContainer>
        )
    }
}
