import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { bmobile, mobile, minimobile, tabMob } from './MainResponsive'


const Container = styled.div`
        background: rebeccapurple;
        color: white;
        font-weight: 300;
        font-family: Helvetica;
        width:100%;
        box-shadow: 0px 0px 20px 5px gray;
        position: sticky;
        /* overflow: hidden; */
        top: 0;
        z-index: 2;
        padding:10px;
        /* ${minimobile({ width: '380px', padding: '25px 0px' })} */
        /* ${mobile({ width: '450px', padding: '25px 0px' })} */
        `;
const Wrapper1 = styled.div`
        display: flex;
        height: 5rem;
        align-items: center;
        text-decoration: none;
        font-size: 28px;
        ${tabMob({ display: 'none' })}
        `;
const Wrapper2 = styled.div`
        height: 5rem;
        display:flex;
        display:none;
        justify-content: space-between;
        padding: 20px 0px;
        align-items: center;
        font-size: 28px;
        /* text-align: center; */
        ${tabMob({ display: 'block' })}
        /* ${mobile({ padding: '20px 0px' })} */
        `;
const Logo = styled.div`
        font-size: 35px;
        cursor:pointer;
        ${bmobile({ textAlign: 'left' })}
        ${mobile({ textAlign: 'left' })}
        font-family: 'Dancing Script', cursive;
        `;
const Navitems = styled.div`
        display: flex;
        float: right;
        `;
const NavItem = styled.div`
        padding: 16px 16px;
        cursor: pointer;
        /* vertical-align: middle; */
        color:white;
        transition: all 0.3s ease;

        &:hover{
            color:wheat;
        }
        `;
const Hamburger = styled.div`
        text-align: right;
        margin-top: -47px;
        `;
const Bar = styled.div`
        text-align: center;
        /* position:absolute; */
        background-color: rebeccapurple;
        /* width:100%; */
        margin-left: -60px;
        padding-left: 60px;
        display: none;
        ${tabMob({ display: 'block' })}
        `;



const MainNavbar = () => {
    const navigate = useNavigate();
    const [bar, setBar] = useState(false);

    const handleLogo = () => navigate('/')
    const handleHamburger = () => setBar(!bar)

    return (
        <Container className='px-5'>
            <Wrapper1 className='navbar'>
                <Logo onClick={handleLogo}>Mypencode</Logo>
                <Navitems>
                    <Link to='/' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Home</NavItem></Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>About Us</NavItem></Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Contact</NavItem></Link>
                    <Link to='/help' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Help</NavItem></Link>
                </Navitems>
            </Wrapper1>
            <Wrapper2 className='navbar' >
                <Logo onClick={handleLogo}>Mypencode</Logo>
                <Hamburger>
                    <button className="navbar-toggler third-button text-white"
                        onClick={handleHamburger}>
                        <div>
                            {!bar && <i className="fa-solid fa-bars" />}
                            {bar && <i className="fa-solid fa-x" />}
                        </div>
                    </button>
                </Hamburger>
            </Wrapper2>
            {bar &&
                <Bar>
                    <Link to='/' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Home</NavItem></Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>About Us</NavItem></Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Contact</NavItem></Link>
                    <Link to='/help' style={{ textDecoration: 'none' }}><NavItem className='navbar__item'>Help</NavItem></Link>
                </Bar>}
        </Container>
    )
}

export default MainNavbar