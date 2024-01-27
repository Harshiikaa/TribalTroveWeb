import { toast } from 'react-toastify'

import React, { useState } from 'react'
import backgroundImage from '../../assets/images/background.png'


const ForgotPass = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else {
            const res = await fetch("/sendPasswordLink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (data.status == 201) {
                setEmail("");
                setMessage(true)
            } else {
                toast.error("Invalid User", { position: "top-center" })
            }
        }

    }

    // function for button 
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(email)
    //     const data = {
    //         email: email,
    //     }
    //     // making api call
    //     createUserApi(data).then((res) => {
    //         if (res.data.success == false) {
    //             toast.error(res.data.message)
    //         } else {
    //             toast.success(res.data.message)
    //         }

    //     }).catch(err => {
    //         toast.error("Server Error")
    //         console.log(err.message)
    //     })
    // }


    return (
        <>
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
                    <div className='m-3'>
                        <div className='signup-with-div' style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>Forgot Password?</div>
                    </div>
                    {message ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""}

                    <div className='m-3'>
                        <div className='signup-with-div' style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'regular',
                        }}>
                            Enter your email address here, we will send a link to reset your password
                        </div>
                    </div>

                    <div>
                        <div style={{ padding: '10px 5px' }}>
                            <div className='field-group'>
                                <input
                                    onChange={setVal}
                                    className='form-control mb-2'
                                    placeholder='Email'
                                />
                            </div>
                            <button
                                // onClick={handleSubmit}
                                onClick={sendLink}

                                className='btn btn-danger w-100 mb-2'
                            >
                                Send
                            </button>

                            <div class="d-flex justify-content-center">
                                <p class="text-muted">Go back to</p>
                                <a href="/login" class="btn btn-link text-primary">
                                    Login
                                </a>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass

