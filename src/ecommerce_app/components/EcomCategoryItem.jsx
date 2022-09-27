import styled from 'styled-components'
import React from 'react'
import { mobile } from './EcomResponsive';
import { Link } from 'react-router-dom'

const Container = styled.div`
        flex:1;
        margin: 5px;
        height: 70vh;
        position: relative;`;
const Image = styled.img`
        width:100%;
        height: 100%;
        object-fit:cover;
        ${mobile({ height: "30vh" })}`;
const Info = styled.div`
        position:absolute;
        height: 100%;
        width: 100%;
        top:0;
        left:0;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        `;
const Title = styled.h1`
        color:white;
        margin-bottom: 20px;
        `;
const Button = styled.button`
        border:none;
        padding: 10px;
        background-color: white;
        color: grey;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover{
                transform: scale(1.5)
        }
        `;


const EcomCategoryItem = ({ item }) => {
        return (
                <Container>
                        {/*<Link to={`/ecom/products/${item.cat}`}> */}
                        <Link to='/ecom/products' >
                                <Image src={item.img} />
                                <Info>
                                        <Title>{item.title}</Title>
                                        <Button>SHOP NOW</Button>
                                </Info>
                        </Link>
                </Container>
        )
}

export default EcomCategoryItem;