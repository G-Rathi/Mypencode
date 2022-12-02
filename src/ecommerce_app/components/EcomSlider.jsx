import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../EcomData';
import { bmobile, mobile, tablet } from './EcomResponsive'
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })};
    ${bmobile({ display: "none" })};
    ${tablet({ width: '100%', height: '100%' })};
    `;
const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: #f8eeee;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: ${props => props.direction === 'left' && '10px'};
        right: ${props => props.direction === 'right' && '10px'};
        cursor: pointer;
        opacity: 0.5;
        z-index: 2;
        transition: all 0.5s ease;
        &:hover{
            background-color: #c5bebe;
        }
        `;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1s ease;
    `;
const Slide = styled.div`
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color:${props => props.bg};
        `;
const ImageConatiner = styled.div`
            flex:1;
            height: 100%;
            `;
const Image = styled.img`
            height: 80%;
            padding: 50px;
            `;
const InfoContainer = styled.div`
        flex:1;
        padding: 50px;
        `;
const Title = styled.h1`
        font-size: 70px;
        `;
const Desc = styled.p`
        margin: 50px 0px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing:3px;
        `;
const Button = styled.button`
        padding:10px;
        font-size:20px;
        font-weight: 600;
        background-color: transparent;
        cursor: pointer;
        transition:all 0.5s ease;
        &:hover{
            transform:scale(1.5);
        }
        `;


const EcomSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <i className="fa-solid fa-caret-left" />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageConatiner>
                            <Image src={item.img} />
                        </ImageConatiner>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button><Link style={{ textDecoration: 'none', color: 'black' }} to="/ecom/products">SHOW NOW</Link></Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <i className="fa-solid fa-caret-right" />
            </Arrow>
        </Container>
    )
}

export default EcomSlider