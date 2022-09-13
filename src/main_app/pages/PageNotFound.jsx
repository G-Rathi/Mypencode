import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 47vh;
        `;

const Wrapper = styled.div``;

const Button = styled.button`
        color:white;
        float:right;
        margin:20px;
        `;

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    return (
        <Container>
            <Wrapper>
                <h1>404 Page Not Found!</h1>
                <Button className='btn-dark' onClick={handleBack}>Back</Button>
            </Wrapper>
        </Container>
    )
}

export default PageNotFound