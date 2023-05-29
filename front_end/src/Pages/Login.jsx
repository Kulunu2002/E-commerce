//Login Page

import React, { useState } from 'react'
import axios from 'axios';
import '../Styles/login.css'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


export default function Login() {

    const [showLoginForm, setShowLoginForm] = useState(true)
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showError, setShowError] = useState(false)
    const history = useHistory()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Create User
    const handelSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/fashionHub/users/newUser';
        try {
            const submitData = {
                email: email,
                password: password
            }
            if (email.length === 0 || password.length === 6) {
                throw new Error(alert("try again"))
            } else {
                const response = await axios.post(url, submitData);
                console.log(response)
                if (response.status === 201) {
                    setShowRegisterForm(false)
                    setShowLoginForm(true)
                    window.location.reload();
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    // Authentication verifies the identity of a user
    const handelLogin = async (event) => {
        event.preventDefault()
        const loginUrl = 'http://localhost:5000/fashionHub/users/loginUser';

        try {
            const loginData = {
                email: email,
                password: password
            }
            if (email.length === 0 || password.length === 0) {
                throw new Error(alert("Invalid Email Or Password!"))

            } else {
                const data = await axios.post(loginUrl, loginData)
                console.log(data)
                if (data.status === 200) {
                    localStorage.setItem('jwt',(data.data.token)) // jwt token saved in the browser storage
                    history.push('/Home')
                }
            }

        } catch (error) {
            console.log(error)
            setShowError(true)
            // throw new Error(alert("Incorrect Email Or Password!"))
        }
    }

    return (
        <>
            <div className="loginPage">
                <div className="loginImg">
                    <img src="../Images/login/login.jpg" alt="family clothing" />
                </div>
                <div className="login-details">
                    <div className="logo">
                        <img src="../Images/logo-0.png" alt="" />

                    </div>

                    <Fade left>
                        {showLoginForm &&
                            <form className='login-form' onSubmit={handelLogin}>
                                <div className="login">
                                    <h1>LOGIN</h1>
                                    <div className="error">

                                        {showError && <p id=''>Incorrect Email Or Password!</p>}
                                    </div>
                                    <div className="l-input">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder='Example@gmail.com'
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="l-input">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="password">
                                        <div className="remember">
                                            <input type="checkbox" />
                                            <p>Remember Me</p>
                                        </div>
                                        <a href="">Forget Password</a>
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Login</button>
                                    </div>
                                    <p>Don't have an account? <span href="" onClick={() => {
                                        setShowRegisterForm(true)
                                        setShowLoginForm(false)
                                    }}>Register</span></p>
                                </div>
                            </form>}
                    </Fade>

                    {/* Register form */}
                    <Fade right>
                        {showRegisterForm &&
                            <form className='regi-form' onSubmit={handelSubmit}>
                                <div className="login">
                                    <h1>REGISTER</h1>
                                    <div className="l-input">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder='Example@gmail.com'
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="l-input">
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Register</button>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    setShowRegisterForm(false)
                                    setShowLoginForm(true)
                                }}>Back</button>
                            </form>}
                    </Fade>
                </div>
            </div>
        </>
    )
}
