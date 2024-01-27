// import React from 'react'
import { toast } from 'react-toastify'
import { createUserApi } from '../../apis/Api'
import Navbar from '../../components/Navbar'
import React, { useState } from 'react'
import backgroundImage from '../../assets/images/background.png'
import { Link, useNavigate } from 'react-router-dom'

import '../../pages/Auth/css/Register.css';

const Register = () => {
    const navigate = useNavigate();

    // useState(Setting input vaue)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')


    // function for changing input value
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
  
    const changePassword = (e) => {
        setPasword(e.target.value)
    }


    // function for button 
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName,
            phoneNumber, email,
            password)
        const data = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password

        }
        // making api call
        createUserApi(data).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
                navigate('/login');
            }

        }).catch(err => {
            toast.error("Server Error")
            console.log(err.message)
        })
    }

    return (
        <>
            <Navbar />
            <div className='image-Container' style={{
                width: "1150px",
                height: "500px",

                backgroundImage: `URL(${backgroundImage})`,
                backgroundSize: "cover",
                // backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>

                <div className='register-Box' style={{
                    width: "370px",
                    height: "450px",
                    backgroundColor: "white",
                    borderRadius: "40px",
                    position: "absolute",
                    top: "20%",
                    right: "60px",
                    padding: "40px",
                }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 35px 5px 35px' }}>
                        <Link to="/login" style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                            //  textDecoration: 'underline',

                        }}>
                            Sign In
                        </Link>
                        <Link to="/register" style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                        }}>
                            Sign Up
                        </Link>
                    </div>
                    <div>
                        <div style={{ padding: '10px 5px' }}>
                            <div className='field-group'>
                                <input
                                    onChange={changeFirstName}
                                    className='form-control mb-2'
                                    placeholder='First Name'
                                    autoComplete='off'
                                />
                                <input
                                    onChange={changeLastName}
                                    className='form-control mb-2'
                                    placeholder='Last Name '
                                />
                                <input
                                    onChange={changePhoneNumber}
                                    className='form-control mb-2'
                                    placeholder='Phone Number'
                                />
                                <input
                                    onChange={changeEmail}
                                    className='form-control mb-2'
                                    placeholder='Email'
                                />
                                <input
                                    onChange={changePassword}
                                    className='form-control mb-3'
                                    placeholder='Password'
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className='btn btn-danger w-100 mb-2'
                            >
                                Sign up
                            </button>

                            <div class="d-flex justify-content-center">
                                <p class="text-muted">Go back to</p>
                                <a href="/login" class="btn btn-link text-primary">
                                    Sign in
                                </a>
                            </div>

                            {/* <div className='signup-with-div' style={{
                                color: 'black',
                                fontSize: 25,
                                fontWeight: 'bold',
                            }}>
                                Sign up with
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;


