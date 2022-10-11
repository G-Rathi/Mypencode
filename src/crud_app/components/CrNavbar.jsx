import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { laptop, minimobile, mobile, tablet } from './CrResponsive';

const MainContainer = styled.div`
        position:sticky;
        top:0;
        box-shadow: 0px 0px 20px 1px gray;
        `;
const Navbar1 = styled.div`
        ${laptop({ display: 'none' })};     
        `;
const Navbar2 = styled.div`
        display:none;
        ${laptop({ display: 'block' })};
        `;
const AddUser = styled.div`
        ${mobile({ textAlign: 'center' })};
        ${tablet({ textAlign: 'center' })};
        ${laptop({ width: '100%', textAlign: 'center' })};
        `;
const AddUserButton = styled.button`
        ${minimobile({ display: 'none' })}
        `;
const Ul = styled.ul`
        ${mobile({ width: '100%', textAlign: 'center' })};
        ${tablet({ width: '100%', textAlign: 'center' })};
        ${laptop({ width: '100%', textAlign: 'center' })};
        `;
const Logo = styled.div`
        font-size: 30px;
        font-family: 'Pacifico', cursive;
        `;
const HamburgerButton = styled.div`
        width:50px;
        `;
const Bar = styled.div`
        text-align: center;
        float: right;
        position: absolute;
        z-index: 1;
        right: 10px;
        background-color: white;
        display: none;
        ${laptop({ display: 'block' })};
        `;
const Li = styled.div`
        font-weight: 700;
        `;



const Navbar = () => {

    const [menubar, setMenubar] = useState(false)
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem('login');

    const logout = () => {
        if (userLoggedIn) {
            const confirm = window.confirm('Do you want to logout?')
            if (confirm) {
                localStorage.removeItem('login');
                navigate('/crud/login')
            }
        } else {

        }
    }

    const loggedIn = () => {
        if (userLoggedIn) {
            console.log('logged in')
            alert('You are already logged in!')
        } else {
            navigate('/crud/login')
        }
    }

    const Register = () => {
        if (userLoggedIn) {
            alert('You are Logged in! To create New Account you have to logout first.')
        } else {
            navigate('/crud/register')
        }
    }

    const handleButtonMPC = (e) => {
        e.preventDefault();
        navigate('/')
    }

    const handleHamburger = (e) => {
        e.preventDefault();
        setMenubar(!menubar);
    }

    return (
        <MainContainer className='mb-5'>
            <Navbar1 className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <nav1 className="container">
                    <NavLink to='/crud' className="navbar-brand"><Logo>React Crud-App</Logo></NavLink>
                    <div className="navbar-collapse " >
                        <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/crud" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/crud/about" className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/crud/create" className="nav-link" >Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/crud/read" className="nav-link" >Read</NavLink>
                            </li>
                        </Ul>
                    </div>
                    <AddUser>
                        <NavLink to="/crud/adduser" className="nav-link" style={{ textAlign: 'center' }}><button className="btn btn-outline-light">Add User</button></NavLink>
                    </AddUser>
                    <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" style={{ cursor: 'pointer' }} onClick={loggedIn}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ cursor: 'pointer' }} onClick={Register}>Register</a>
                        </li>
                        {
                            userLoggedIn && <li className="nav-item">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
                            </li>
                        }
                    </Ul>
                    <button className='btn btn-outline-light' onClick={handleButtonMPC}>Back to Main</button>
                </nav1>
            </Navbar1>
            <Navbar2 className="navbar navbar-expand-lg navbar-dark bg-primary">
                <nav2 className="container">
                    <NavLink to='/crud' className="navbar-brand"><Logo>React Crud-App</Logo></NavLink>
                    <NavLink to="/crud/adduser" className="nav-link " ><AddUserButton className="btn btn-outline-light">Add User</AddUserButton></NavLink>
                    <HamburgerButton style={{ textAlign: 'center' }}>
                        <button class="btn btn-outline-light"
                            onClick={handleHamburger}>
                            <div>
                                {!menubar && <div>☰</div>}
                                {menubar && <div>X</div>}
                            </div>
                        </button>
                    </HamburgerButton>
                </nav2>
            </Navbar2>
            {
                menubar &&
                <Bar>
                    <Li>
                        <NavLink to="/crud" className="nav-link" >Home</NavLink>
                    </Li>
                    <Li className="nav-item">
                        <NavLink to="/crud/about" className="nav-link" >About</NavLink>
                    </Li>
                    <Li className="nav-item">
                        <NavLink to="/crud/create" className="nav-link" >Create</NavLink>
                    </Li>
                    <Li className="nav-item">
                        <NavLink to="/crud/read" className="nav-link" >Read</NavLink>
                    </Li>

                    <Li className="nav-item">
                        <a className="nav-link" style={{ cursor: 'pointer' }} onClick={loggedIn}>Login</a>
                    </Li>
                    <Li className="nav-item">
                        <a className="nav-link" style={{ cursor: 'pointer' }} onClick={Register}>Register</a>
                    </Li>
                    {
                        userLoggedIn && <Li className="nav-item">
                            <a className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
                        </Li>
                    }
                    <button className='btn btn-outline-primary' onClick={handleButtonMPC}>Back to Main</button>
                </Bar>
            }
        </MainContainer >
    )
}

export default Navbar