import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { auth } from '../../Firebase';
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
                localStorage.clear();
                signOut(auth)
                    .then((res) => {
                        navigate('/crud/login')
                    })
                    .catch((err) => {
                        console.log('logout err', err)
                    })
            }
        }
    }

    const loggedIn = () => {
        (userLoggedIn) ? alert('You are already logged in!') : navigate('/crud/login')
    }
    const Register = () => {
        (userLoggedIn) ? alert('You are Logged in! To create New Account you have to logout first.') : navigate('/crud/register')
    }

    const handleButtonMPC = () => navigate('/');
    const handleHamburger = () => setMenubar(!menubar);

    return (
        <MainContainer className='mb-5'>
            <Navbar1 className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <div className="container">
                    <NavLink to='/crud' className="navbar-brand"><Logo>React Crud-App</Logo></NavLink>
                    <div className="navbar-collapse " >
                        <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={loggedIn}>Login</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={Register}>Register</span>
                        </li>
                        {
                            userLoggedIn && <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Logout</span>
                            </li>
                        }
                    </Ul>
                    <button className='btn btn-outline-light' onClick={handleButtonMPC}>Back to Main</button>
                </div>
            </Navbar1>
            <Navbar2 className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink to='/crud' className="navbar-brand"><Logo>React Crud-App</Logo></NavLink>
                    <NavLink to="/crud/adduser" className="nav-link " ><AddUserButton className="btn btn-outline-light">Add User</AddUserButton></NavLink>
                    <HamburgerButton style={{ textAlign: 'center' }}>
                        <button className="btn btn-outline-light"
                            onClick={handleHamburger}>
                            <div>
                                {!menubar ? '☰' : 'X'}
                            </div>
                        </button>
                    </HamburgerButton>
                </div>
            </Navbar2>
            {
                menubar &&
                <Bar>
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
                        <span className="nav-link" style={{ cursor: 'pointer' }} onClick={loggedIn}>Login</span>
                    </Li>
                    <Li className="nav-item">
                        <span className="nav-link" style={{ cursor: 'pointer' }} onClick={Register}>Register</span>
                    </Li>
                    {
                        userLoggedIn && <Li className="nav-item">
                            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Logout</span>
                        </Li>
                    }
                    <button className='btn btn-outline-primary' onClick={handleButtonMPC}>Back to Main</button>
                </Bar>
            }
        </MainContainer >
    )
}

export default Navbar