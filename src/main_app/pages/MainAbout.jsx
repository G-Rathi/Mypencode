import React from 'react'
import styled from 'styled-components'
import MainFooter from '../components/MainFooter';
import MainNavbar from '../components/MainNavbar'
import { bmobile, tabMob, miniLaptop } from '../components/MainResponsive';

const Container = styled.div`
        width:100%;
        `;
const MSection = styled.div`
        width: 100%;
        height: 86vh;
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        `;

const H1 = styled.h1`
        font-size: 10rem;
       
        ${bmobile({ fontSize: '5rem' })}
        ${tabMob({ fontSize: '5rem' })}
        ${miniLaptop({ fontSize: '5rem' })}
        `;

const MainAbout = () => {
    return (
        <Container>
            <MainNavbar />
            <MSection>
                <H1>About Page. </H1>
            </MSection>
            <MainFooter />
        </Container>

    )
}

export default MainAbout