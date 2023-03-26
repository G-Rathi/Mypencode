import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { auth } from '../../Firebase';
import CrNavbar from '../components/CrNavbar'
import { mobile } from '../components/CrResponsive';


const Div = styled.div`
            background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
            background-size: cover;
            width:100%;
            height:100vh;
            ${mobile({ width: '100%', height: '100%' })}
            `;


const CrHome = () => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName)
            } else {
                setUserName('')
            }
        })
    }, [])

    return (
        <Div>
            <CrNavbar />
            <div className='container pb-5'>

                <h1>
                    <p className='text-center mb-5'>This is a Crud Application</p>
                </h1>
                {userName ?
                    <h2>Welcome {userName},</h2> : <h4>You must Register/Login to get full access on this application.</h4>
                }
                <h4>
                    You can Create/Add user by clicking on 'Add User' buton or 'Create' link, both are available on Navbar.
                </h4>
                <h4>
                    You can Read/Check user list by clicking on 'Read' link in the Navbar.
                </h4>
                <h4>
                    Once you have clicked on 'Read' link, a 'Users List' will appear on Screen, You can 'Edit' user details and also 'Delete' user.
                </h4>
                <h4>
                    The User will be auto logout after 9 seconds.
                </h4>
            </div>
        </Div>
    )
}

export default CrHome