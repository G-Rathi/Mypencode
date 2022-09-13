import React from 'react'
import styled from 'styled-components';
import { mobile } from './EcomResponsive';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
    ${mobile({ height: '100%' })}
    `;

const EcomAnnouncement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default EcomAnnouncement