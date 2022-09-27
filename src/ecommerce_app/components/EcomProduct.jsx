import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Info = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.2);
      z-index:3;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.5s ease;
      `;
const Container = styled.div`
      margin: 5px;
      min-width: 300px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      width:20%;
      background-color: #e2f2f9;
      position: relative;
      &:hover ${Info}{
        opacity: 1;
      }
      `;
const Circle = styled.div`
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: white;
      position: absolute;
       `;
const Image = styled.img`
      height: 75%;
      z-index: 2;
      width: 70%;
      object-fit: cover;
      `;
const Icon = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover{
        background-color: #e2f2f9;
        transform: scale(1.5);
      }
      `;


const EcomProduct = ({ item }) => {

    return (
        <Container>
            <Circle />
            <Image src={item.image} />
            <Info>
                <Icon>
                    <i class="fa-solid fa-cart-shopping" />
                </Icon>
                <Icon>
                    <Link to={`/ecom/products/${item.id}`} style={{ color: 'black' }} >
                        <i class="fa-solid fa-magnifying-glass" />
                    </Link>
                </Icon>
                <Icon>
                    <i class="fa-regular fa-heart" />
                </Icon>
            </Info>
        </Container>
    )
}

export default EcomProduct