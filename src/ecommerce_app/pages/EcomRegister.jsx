import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { laptop, mobile, tablet } from '../components/EcomResponsive';


const Container = styled.div`
        width:100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)), url("https://images3.alphacoders.com/382/3827.jpg") center;
        background-size: cover;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
const Wrapper = styled.div`
        padding: 20px;
        width: 40%;
        background-color: white;
        ${mobile({ margin: '30px 20px' })};
        ${tablet({ margin: '30px 60px' })};
        ${laptop({ width: "800px" })};
        `;
const Title = styled.h1`
        font-size: 25px;
        font-weight: 300;  
        `;
const Form = styled.form`
        display:flex;
        flex-wrap: wrap;
        ${mobile({ display: 'flex', flexDirection: 'column' })}
        ${tablet({ display: 'flex', flexDirection: 'column' })}
        `;
const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
        `;
const Agreement = styled.span`
        font-size: 15px;
        margin: 20px 0px;
        `;
const Btn = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: darkblue;
        color: white;
        font-weight: 700;
        cursor: pointer;
        ${mobile({ width: "50%", fontWeight: '500', padding: '5px 2px' })};
        ${tablet({ width: "40%", padding: '10px 5px' })};
        ${laptop({ width: "30%" })};
        `;
const Buttons = styled.div`
       width:100%;
       display:flex;
       justify-content: space-between;
        `;


const EcomRegister = () => {
    const navigate = useNavigate('');

    const create = () => navigate('/ecom/login');
    const backtohome = () => navigate('/ecom')

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Buttons>
                        <Btn onClick={create}>CREATE</Btn>
                        <Btn onClick={backtohome} style={{ textDecoration: 'none', color: 'white' }}>Back To Home</Btn>
                    </Buttons>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default EcomRegister