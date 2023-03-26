import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { laptop, mobile, tablet } from '../components/CrResponsive';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase';


const Container = styled.div`
        width:100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)), url("https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?w=1380&t=st=1662366298~exp=1662366898~hmac=4a95094f94089a68bd855c8ee5a8fa7d3c416dde7bf7a34426bd56ac11d1f12b") center;
        background-size: cover;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
const Wrapper = styled.div`
        padding: 20px;
        width: 40%;
        background-color: white;
        ${mobile({ margin: '30px 20px' })};
        ${tablet({ margin: '30px 60px' })};
        ${laptop({ width: "800px" })};
        `;
const Title = styled.h1`
        font-size: 25px;
        font-weight: 300;  
        `;
const Form = styled.form`
        display:flex;
        flex-wrap: wrap;
        ${mobile({ display: 'flex', flexDirection: 'column' })}
        ${tablet({ display: 'flex', flexDirection: 'column' })}
        `;
const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
        `;
const Agreement = styled.span`
        font-size: 15px;
        margin: 20px 0px;
        text-align: center;
        `;
const Btn = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: darkblue;
        color: white;
        font-weight: 700;
        cursor: pointer;
        ${mobile({ width: "50%", fontWeight: '500', padding: '5px 2px' })};
        ${tablet({ width: "40%", padding: '10px 5px' })};
        ${laptop({ width: "30%" })};
        `;
const CreateBtn = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: darkblue;
        color: white;
        font-weight: 700;
        cursor: pointer;
        ${mobile({ width: "50%", fontWeight: '500', padding: '5px 2px' })};
        ${tablet({ width: "40%", padding: '10px 5px' })};
        ${laptop({ width: "30%" })};

        &:disabled{
                background-color: gray;
        }
        `;
const Buttons = styled.div`
       width:100%;
       display:flex;
       justify-content: space-between;
        `;
const CheckBox = styled.input`
        margin-right: 5px;
        `;
const FieldsError = styled.div`
        color: red;
        text-align: center;
        font-size: medium;
        `;
const PasswordInput = styled.div`
        width: 100%;
        padding-right: 10px;
        position: relative
        `;


const CrRegister = () => {
        const [naming, setNaming] = useState({
                firstName: '',
                lastName: ''
        })
        const [credentials, setCredentials] = useState({
                email: '',
                username: '',
                password: ''
        })
        const [confirmPassword, setConfirmPassword] = useState()
        const [checkbox, setCheckBox] = useState(false)
        const [showErr, setShowErr] = useState(false)
        const [showPassword, setShowPassword] = useState(false);
        const [createButtonDisable, setCreateButtonDisable] = useState(false)


        const navigate = useNavigate('');

        const create = () => {
                if (naming.firstName && credentials.email && credentials.password && credentials.username && confirmPassword) {
                        if (confirmPassword == credentials.password) {
                                if (!checkbox) {
                                        setShowErr('All fileds required')
                                } else {
                                        setShowErr(false)
                                        setCreateButtonDisable(true)
                                        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                                                .then(async (res) => {
                                                        setCreateButtonDisable(false)
                                                        console.log('createAuth Response', res)
                                                        const user = res.user
                                                        await updateProfile(user, {
                                                                displayName: `${naming.firstName} ${naming.lastName}`
                                                        })
                                                        navigate('/crud/login');

                                                })
                                                .catch(err => {
                                                        setCreateButtonDisable(false)
                                                        console.log('create auth err', err.message)
                                                        setShowErr(err.message)

                                                        /* alert('Email already in use') */
                                                })

                                        /* alert('Registration has been successful') */
                                }

                        } else {
                                alert('confirm password should be same as password')
                        }

                } else {
                        setShowErr('All fileds required')
                }
        }

        function handleEye() {
                setShowPassword(!showPassword)
        }
        const backtologin = () => navigate('/crud/login')

        console.log('checkbox', checkbox)
        console.log('naming', naming)
        console.log('credentials', credentials)

        return (
                <Container>
                        <Wrapper>
                                <Title>CREATE AN ACCOUNT</Title>
                                <Form>
                                        <Input placeholder="First Name" onChange={(e) => {
                                                setShowErr(false)
                                                setNaming(prev => ({ ...prev, firstName: e.target.value }))
                                        }} />
                                        <Input placeholder="Last Name" onChange={(e) => {
                                                setShowErr(false)
                                                setNaming(prev => ({ ...prev, lastName: e.target.value }))
                                        }} />
                                        <Input placeholder="Email" onChange={(e) => {
                                                setShowErr(false)
                                                setCredentials(prev => ({ ...prev, email: e.target.value }))
                                        }} />
                                        <Input placeholder="Username" onChange={(e) => {
                                                setShowErr(false)
                                                setCredentials(prev => ({ ...prev, username: e.target.value }))
                                        }} />
                                        <PasswordInput>
                                                <Input type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={(e) => {
                                                        setShowErr(false)
                                                        setCredentials(prev => ({ ...prev, password: e.target.value }))
                                                }} style={{ width: '100%' }} />
                                                <span onClick={handleEye} style={{ position: 'absolute', top: '45%', right: '20px' }}>
                                                        {showPassword ?
                                                                <i className="fa-sharp fa-regular fa-eye" /> : <i className="fa-regular fa-eye-slash" />
                                                        }
                                                </span>
                                        </PasswordInput>
                                        <Input placeholder="Confirm Password" onChange={(e) => {
                                                setShowErr(false)
                                                setConfirmPassword(e.target.value)
                                        }} />
                                        <Agreement>
                                                <CheckBox type='checkbox' onChange={(e) => {
                                                        setShowErr(false)
                                                        setCheckBox(e.target.checked)
                                                }} />
                                                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                                        </Agreement>
                                        <FieldsError>{showErr}</FieldsError>
                                        <Buttons>
                                                <CreateBtn onClick={create} disabled={createButtonDisable}>CREATE</CreateBtn>
                                                <Btn onClick={backtologin} style={{ textDecoration: 'none', color: 'white' }}>Back To Login</Btn>
                                        </Buttons>
                                </Form>
                        </Wrapper>
                </Container>
        )
}

export default CrRegister