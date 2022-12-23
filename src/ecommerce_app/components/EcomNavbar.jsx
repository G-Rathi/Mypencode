import React, { useState } from 'react'
import styled from 'styled-components'
import { tablet, laptop, laptop3, blaptop3 } from './EcomResponsive'
import { NavLink, useNavigate } from 'react-router-dom'


const Container = styled.div`
        position:sticky;
        top:0;
        z-index:4;
        background-color: white;
        box-shadow: 0px 0px 20px 5px gray;
        `;
const Wrapper1 = styled.div`
      padding: 15px 20px;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${laptop3({ display: 'none' })}
      `;
const Wrapper2 = styled.div`
      padding: 15px 20px;
      height: 5rem;
      display:flex;
      justify-content: center;
      align-items: center;
      position: relative;
      ${blaptop3({ display: 'none' })}
      `;
const Left = styled.div`
        flex:1;
        display: flex;
        align-items: center;
        `;
const Language = styled.span`
        font-size: 20px;
        cursor: pointer;
        `;
const SearchContainer = styled.div`
        border: 1px solid lightgrey;
        display: flex;
        align-items: center;
        padding: 5px;
        margin-left: 28px;
        ${tablet({ display: 'none' })}
        `;
const Input = styled.input`
        border: none;
        `;
const Center = styled.div`
        flex:1;
        `;
const Logo = styled.h1`
        font-weight: bold;
        text-align: center;
        ${laptop({ height: "100%", })}
        `;
const Right = styled.div`
        flex:1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        `;
const MenuItems = styled.div`
        font-size: 20px;
        margin-left: 25px;
        font-weight: 600;
        `;
const HamburgerButton = styled.div` 
        font-size: 100%;
        `;
const Bar = styled.div`
        text-align: center;
        float: right;
        position: absolute;
        z-index: 1;
        right: 10px;
        background-color: white;
        ${blaptop3({ display: 'none' })}
        `;
const MenuItem = styled.div`
        font-size: 20px;
        font-weight: 600;
        margin:10px;
        `;



const EcomNavbar = () => {
    const [bar, setBar] = useState(false);
    const navigate = useNavigate();

    const handleBackMain = () => navigate('/')


    const handleHamburger = () => setBar(!bar);


    return (
        <Container>
            <Wrapper1>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "grey", fontSize: '16', cursor: "pointer" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/ecom'>E-Comm</NavLink></Logo>
                </Center>
                <Right>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom"><MenuItems>HOME</MenuItems></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/register"><MenuItems>REGISTER</MenuItems></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/login"><MenuItems>SIGN IN</MenuItems></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/cart"><MenuItems><i className="fa-solid fa-cart-shopping" /></MenuItems></NavLink>
                    <button className='btn btn-dark btn-outline-primary ms-3' onClick={handleBackMain}>Back To Main</button>
                </Right>
            </Wrapper1>
            <Wrapper2 className='navbar'>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "grey", fontSize: 16, cursor: "pointer" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/ecom'>EComm</NavLink></Logo>
                </Center>
                <Right>
                    <HamburgerButton style={{ textAlign: 'center' }}>
                        <button className="navbar-toggler third-button"
                            onClick={handleHamburger}>
                            <div>
                                {!bar && <i className="fa-solid fa-bars" />}
                                {bar && <i className="fa-solid fa-x" />}
                            </div>
                        </button>
                    </HamburgerButton>
                </Right>
            </Wrapper2>
            {bar &&
                <Bar>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom"><MenuItem>HOME</MenuItem></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/register"><MenuItem>REGISTER</MenuItem></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/login"><MenuItem>SIGN IN</MenuItem></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ecom/cart"><MenuItem><i className="fa-solid fa-cart-shopping" /></MenuItem></NavLink>
                    <button className='btn btn-dark btn-outline-primary' onClick={handleBackMain}>Back To Main</button>
                </Bar>
            }
        </Container>
    )
}

export default EcomNavbar