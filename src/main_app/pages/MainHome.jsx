import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import MainFooter from '../components/MainFooter';
import MainNavbar from '../components/MainNavbar'
import { bmobile } from '../components/MainResponsive';


const Container = styled.div`
        width:100%;
        `;
const MainSection = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0rem;
        width:100%;
        height: 100%;
        `;
const Wrapper = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        `;
const Button = styled.button`
        width:100%;
        margin:50px 0px;
        padding:10px 10px;
        /* font-weight: bold; */
        font-size: 40px;
        /* border: 1px solid ; */
        border-radius: 10px;
        /* border-style: outset; */
        background-color: rebeccapurple;
        color:white;
        transition: all 0.5s ease;
        user-select: none;
        ${bmobile({ fontSize: '25px' })}

        &:hover{
            transform: scale(1.1);
            box-shadow: 2px 5px 20px 0px #9f9f9f;
            color:wheat;
        }
        `;
const MainHome = () => {
    const navigate = useNavigate();

    const handleCalculator = (e) => {
        e.preventDefault();
        navigate('/calculator')
    }

    const handleCrudApp = (e) => {
        e.preventDefault();
        navigate('/crud')
    }

    const handleEcomApp = (e) => {
        e.preventDefault();
        navigate('/ecom')
    }

    return (
        <Container>
            <MainNavbar />
            <MainSection>
                <Wrapper>
                    <Button onClick={handleCrudApp}>CRUD APP</Button>
                    <Button onClick={handleEcomApp}>ECOMMERCE APP</Button>
                    <Button onClick={handleCalculator}>CALCULATOR APP</Button>
                </Wrapper>
            </MainSection>
            <MainFooter />
        </Container>
    )
}

export default MainHome