import React, { useEffect, useState } from 'react'
import CrNavbar from '../components/CrNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'



const Container = styled.div`
            background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;

            background-size: cover;
            width:100vw;
            height:100vh;
           
            `;

const CrUpdate = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)


    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }



    const loadUsers = async () => {
        await axios.get(`https://631879d7ece2736550cb0a11.mockapi.io/users/${id}`)

            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch((error) => {
                setError(error)
            })

    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.put(`https://631879d7ece2736550cb0a11.mockapi.io/users/${id}`, {
            name: name, username: username, email: email
        }).then(() => navigate('/crud/read'))
    }


    useEffect(() => {
        loadUsers();
    }, [])

    if (error) {
        return `Error:${error.message}`
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    return (
        <Container>
            <CrNavbar />
            <div className='container pb-5'>

                <h1>Update User</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" defaultValue={user.name} onChange={(e) => changeName(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" defaultValue={user.username} onChange={(e) => changeUsername(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" defaultValue={user.email} onChange={(e) => changeEmail(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submit} >Update</button>
                    <button type="submit" className="btn btn-dark ms-5" onClick={handleBack} >Back</button>
                </form>
            </div>
        </Container >
    );
}

export default CrUpdate