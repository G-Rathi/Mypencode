import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { laptop, mobile, tablet } from '../components/CrResponsive';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase';

const Container = styled.div`
        width:100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/486695.jpg") center ;
        background-size: cover;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
const Wrapper = styled.div`
        padding: 20px;
        width: 30%;
        background-color: white;
        ${mobile({ margin: '20px', })};
        ${tablet({ margin: '40px' })};
        ${laptop({ width: "800px" })};
        `;
const Title = styled.h1`
        font-size: 25px;
        font-weight: 300; 
        `;
const Form = styled.form`
        display:flex;
        flex-direction: column;
        `;
const Input = styled.input`
        flex:1;
        min-width: 30%;
        padding: 10px;
        margin: 10px 0px;
        `;
const SubmitButton = styled.button`
        width: 100%;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: darkblue;
        color: white;
        font-weight: 700;
        font-size: larger;
        cursor: pointer;
        margin-bottom: 10px;
        ${mobile({ width: "100%", padding: '15px 5px' })};

        &:disabled{
            background-color: gray;
        }
        `;
const GoogleSignInButton = styled.button`
        width: 100%;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: red;
        color: white;
        font-weight: 700;
        font-size: larger;
        cursor: pointer;
        margin-bottom: 10px;
        ${mobile({ width: "100%", padding: '15px 5px' })};

        &:disabled{
            background-color: gray;
        }
        `;

const L = styled.div`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        `;
const Error = styled.span`
        color:red;
        `;
const PasswordInput = styled.div`
         width: 100%;
         position: relative
        `;
const LoginErr = styled.div`
        color: red;
        text-align: center;
        font-size: medium;
        `;



const CrLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(false);
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value);


    function emailErrHandler() {
        (email.length <= 3) ? setEmailErr(true) : setEmailErr(false)
    }
    function passwordErrHandler() {
        (password.length < 5) ? setPasswordErr(true) : setPasswordErr(false)
    }

    function submit(e) {
        e.preventDefault();
        if (email.length <= 3 || password.length < 5) {
            emailErrHandler();
            passwordErrHandler();
        } else {
            setLoginBtnDisabled(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    setLoginBtnDisabled(false);
                    localStorage.setItem('login', true);
                    navigate(-1)
                })
                .catch((err) => {
                    console.log('auth error', err.message)
                    setLoginBtnDisabled(false);
                    setLoginError(err.message)
                })
            // setTimeout(() => {
            //     localStorage.clear()
            //     window.location.reload()
            // }, 9000)
        }
    }

    function handleGoogleSignIn() {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                localStorage.setItem('login', true)
                navigate(-1)
            })
            .catch((err) => {
                console.log('signIn with Google Err', err.message)
            })
    }

    function handleEye() {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input type='text' placeholder="Email" onChange={(e) => {
                        setLoginError(false)
                        handleEmail(e)
                    }} />
                    {
                        emailErr && <Error>It should contain atleast 3 character!</Error>
                    }
                    <PasswordInput>
                        <Input type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={(e) => {
                            setLoginError(false)
                            handlePassword(e)
                        }} style={{ width: '100%' }} />
                        <span onClick={handleEye} style={{ position: 'absolute', top: '30%', right: '10px' }}>
                            {showPassword ?
                                <i className="fa-sharp fa-regular fa-eye" /> : <i className="fa-regular fa-eye-slash" />
                            }
                        </span>
                    </PasswordInput>
                    {
                        passwordErr && <Error>It should contain atleast 5 character!</Error>
                    }
                    <LoginErr>{loginError}</LoginErr>
                    <SubmitButton onClick={submit} disabled={loginBtnDisabled}>LOGIN</SubmitButton>
                    <GoogleSignInButton onClick={handleGoogleSignIn} disabled={loginBtnDisabled}>Continue With Google</GoogleSignInButton>
                    <L><Link className='text-decoration-none' to='/crud/register'>CREATE A NEW ACCOUNT</Link></L>
                    <L> <Link className='text-decoration-none' to="/crud/">BACK TO HOME</Link></L>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default CrLogin