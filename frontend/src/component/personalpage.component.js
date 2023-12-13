import React, { Component } from 'react';
import styled from 'styled-components';
import items from "../assets/data/personaldata.json"


export default class PersonalPageComponent extends Component {
    
    render() {
        return (
            <Container>
                 {items.map(({owner, email, status, profile_picture}) => 
                    (
                        <>
                        <ProfileContent>
                            <ProfileImage src={`${profile_picture}`}/>
                            <ProfileNickname>{owner}</ProfileNickname>
                        </ProfileContent>
                        <ProfileDetails>
                            <ProfileEmail>Email: {email}</ProfileEmail>
                            <ProfileStatus>Status: {status}</ProfileStatus>
                        </ProfileDetails>
                        </>
                    ))}
        </Container>
        );
    }
}

const Container = styled.div`
display: flex;
justify-content: space-around;
vertical-align: center;
align-items: center;
background: rgba(163, 199, 214, 0.15);
border-radius: 30px;
padding: 20px 0 0;
`
const ProfileContent = styled.div`
`
const ProfileImage = styled.img`
display: block;
width: 400px;
height: 400px;
border-radius: 30px;
`
const ProfileNickname = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 50px;
text-align: center;
color: #FFFFFF;
padding: 5px 0 0;
`
const ProfileDetails = styled.div`
padding: 0 50px;
`
const ProfileEmail = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 46px;
color: #FFFFFF;`
const ProfileStatus = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 46px;
color: #FFFFFF;`