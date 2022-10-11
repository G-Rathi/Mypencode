import React, { useState } from 'react'
import styled from 'styled-components'
import { bmobile, mobile, tablet } from './EcomResponsive';

const Container = styled.div`
        height: 60vh;
        background-color: #fcf5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        `;
const Title = styled.h1`
        font-size: 70px;
        margin-bottom: 20px;
        ${mobile({ width: "70%", })}
        ${bmobile({ width: "70%", fontSize: '50px' })}
        ${tablet({ width: "70%", textAlign: "center" })}
        `;
const Desc = styled.div`
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 20px;
        ${mobile({ textAlign: "center" })};
        ${bmobile({ textAlign: "center" })};
        ${tablet({ textAlign: "center" })};
        `;
const InputContainer = styled.div`
        width:50%;
        height: 40px;
        background-color: white;
        display: flex;
        /* justify-content: space-between; */
        border: 1px solid lightgrey;
        `;
const Input = styled.input`
        border:none;
        flex:8;
        padding-left: 20px;
        ${mobile({ width: "70%", })}
        ${bmobile({ width: "70%" })}
        ${tablet({ width: "70%" })}
        `;
const Button = styled.button`
        flex:1;
        border:none;
        background-color: teal;
        color:white;
        cursor:pointer;
        font-size: 20px;
        font-weight: bold;
        transition: all 0.5s;

        &:hover{
            color:grey;
        }
        `;


const EcomNewsLetter = () => {
    const [inputVal, setInputVal] = useState('');

    function getValue(val) {
        setInputVal(val);
    }

    function submitEmail(e) {
        e.preventDefault();
        (inputVal.match('@')) ? (alert('Thanks for reaching out! You will get latest Updates of your Favourite Product on your email soon.')) : ((inputVal === '') ? (alert('Please enter your email address!')) : (alert('Please enter your valid email address !')));
    }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" onChange={(e) => getValue(e.target.value)} />
                <Button onClick={(e) => submitEmail(e)}>Send</Button>
            </InputContainer>
        </Container>
    )
}

export default EcomNewsLetter