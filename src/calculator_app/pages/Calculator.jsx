import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { mobile, mini_tablet } from '../components/CaResponsive'

const Container = styled.div`
        padding:20px;
        `;
const CaContainer = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom:40px;
        `;

const Wrapper = styled.div`
        padding: 20px;
        width: 30vw;
        height: 65vh;
        border: 2px solid black;
        background-color: gray;
        border-radius: 10px;
        box-shadow: 0px 15px 50px 1px #9f9f9f;
        ${mobile({ width: '100%' })}
        ${mini_tablet({ width: '80%' })}
        `;

const Title = styled.h1`
        color: black;
        margin: 2% 50% 2% 50%;
        font-size: 5rem;
        font-weight: 1000;
        text-decoration: underline;
        cursor: pointer;
        font-family: 'Dancing Script', cursive;
       
        ${mini_tablet({ fontSize: '32px', })}

        `;

const Input = styled.input`
        width: 100%;
        height: 30%;
        margin-bottom: 10px;
        text-align: right;
        font-size: 50px;
        border: 2px solid black;
        letter-spacing: 1px;
        border-radius: 10px;
        `;

const Buttons = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        height: 65%;
        margin: 20px 0px;
        `;

const Button = styled.button`
        width: 23%;
        height: 18%;
        border-radius: 10px;
        font-size: 30px;
        font-weight: 600;

        &:focus{
            border:2px solid #a091de;
        };
        `;

const AC = styled.button`
        width: 49%;
        height: 18%;
        border-radius: 10px;
        font-size: 30px;
        font-weight: 600;

        &:focus{
            border:2px solid #a091de;
        };
        
        `;

const Clear = styled.button`
        width:23%;
        height: 18%;
        border-radius: 10px;
        font-size: 30px;
        font-weight: 500;

        &:focus{
            border:2px solid #a091de;
        };
        `;

const IsEqualTo = styled.button`
        width:23%;
        height: 18%;
        border-radius: 10px;
        font-size: 30px;
        font-weight: 600;

        &:focus{
            border:2px solid #a091de;
        };
        `;

const BackButton = styled.button`
        width:12rem;
        height:100%;
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 0;
        color: white;
        background-color: black;
        border-radius: 10px;
        transition: all 0.5s ease;

        &:hover{
            box-shadow: 0px 15px 50px 5px #9f9f9f;
            transform: scale(0.9);            
        }
        `;



const Calculator = () => {
    const [result, setResult] = useState('');
    const numbers = ['+', '9', '8', '7', '-', '6', '5', '4', '*', '3', '2', '1', '/', '00', '0', '.'];
    const navigate = useNavigate();


    function getValue(e) {
        // e.preventDefault();
        setResult(result + e.target.name);
    }



    function clear(e) {
        try {
            e.preventDefault();
            setResult(result.slice(0, -1))
        } catch (error) {
            //after press '=' button (after answer appear on screen), pressing 'clear' button will give an error
            e.preventDefault();
            setResult('')
        }
    }


    function ac(e) {
        e.preventDefault();
        setResult('')
    }

    function isEqualTo(e) {
        try {
            e.preventDefault();
            setResult(eval(result))
        } catch (error) {
            e.preventDefault();
            setResult('Error')
        }
    }


    const handleBack = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <Container>

            <BackButton onClick={handleBack}>Back to Home</BackButton>

            <CaContainer>

                <Title>CALCULATOR</Title>
                <Wrapper>
                    <Input placeholder='0' value={result} />
                    <Buttons>
                        <AC onClick={ac}>AC</AC>
                        <Clear onClick={clear}><i class="fa-sharp fa-solid fa-delete-left"></i></Clear>
                        {
                            numbers.map((number) => (
                                <Button name={number} onClick={getValue}>{number}</Button>
                            ))
                        }
                        <IsEqualTo onClick={isEqualTo}>=</IsEqualTo>
                    </Buttons>
                </Wrapper>

            </CaContainer>
        </Container>
    )
}

export default Calculator