import React, { Component } from 'react';
import { Form, Input, FormGroup } from 'reactstrap';
import styled from 'styled-components';
import { serverUrl } from '../config';

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            login: '',
            password: '',
            address: '',
        },
        signUpButtonText: 'Create a free account',
        isChecked: false,
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
        });
    }

    handleSubmit = (e) => {
        console.log("request sent")

        const { data } = this.state;

        const body = {
            login: data.login,
            password: data.password,
            address: data.address,
        }

        e.preventDefault();
        fetch(`${serverUrl}/register`, {
            body: JSON.stringify(body),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
          });

        this.setState({...this.getInitialState(), signUpButtonText: 'Account created!'});
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;
        const { data } = this.state;
        return (
            <Container>
                 <Form className="item" onSubmit={this.handleSubmit}>
                    <FormTitle>Start now</FormTitle>
                    <FormDescription>Create a account in CuberCube and claim a free armor set  to start your game.</FormDescription>
                <FormGroup>
                    <Input id="nickName" value={data.login} type="text" name="login" placeholder="Nickname" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input id="address" value={data.address} type="address" name="address" placeholder="Address" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input id="password" value={data.password} type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                </FormGroup>
                <Checkbox>
                    <label>
                        <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={() => this.setState({ isChecked: !isChecked })}
                        />
                        <CheckboxText>
                            I config that I am in legal age, I have read and agree the Service Agreement.
                        </CheckboxText>
                    </label>
                </Checkbox>
                <ButtonContainer>
                    <ButtonMetaMask></ButtonMetaMask>
                    <ButtonCreate
                        type="submit"
                        disabled={!isChecked}
                    >
                        {
                            this.state.signUpButtonText
                        }
                    </ButtonCreate>
                </ButtonContainer>
            </Form>
        </Container>
        );
    }
}

const Container = styled.div`
display: flex;
justify-content: center;
vertical-align: center;
align-items: center;
.item {
    margin: 0 25px;
}
Form {
    padding: 10px 0 0;
    width: 480px;
}
Input {
    border: 2px solid #A3C7D6;
    border-radius: 50px;
    background: rgba(0,0,0,0);
    width: 440px;
    height: 48px;
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
FormFeedback {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
}
`
const ButtonCreate = styled.button`
    width: 284px;
    height: 46px;
    background: linear-gradient(270deg, #AD5389 0%, #3C1053 100%);
    border-radius: 20px;
    border: none;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    `
const Checkbox = styled.div`
input{
    width: 35px;
    height: 35px;
    border: 2px solid #A3C7D6;
    border-radius: 10px;
}
label{
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
`
const CheckboxText = styled.p`
padding: 0 0 0 20px;`
const Picture = styled.img`
width: 450px;
height: 400px;
border-radius: 30px;
`
const FormTitle = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 64px;
text-align: center;
color: #A3C7D6;
`
const FormDescription = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 21px;
line-height: 31px;
color: #FFFFFF;
padding: 10px 0;
`
const ButtonMetaMask = styled.button`
width: 71px;
height: 45px;
background: #A3C7D6;
border: 1px solid #000000;
border-radius: 50px;
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
background-image:url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/240px-MetaMask_Fox.svg.png")
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 10px 0;
`
