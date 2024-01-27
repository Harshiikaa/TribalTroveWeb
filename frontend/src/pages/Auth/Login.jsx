import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/background.png'
import Navbar from '../../components/Navbar';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        const data = {
            email: email,
            password: password

        }
        // makign api call 
        // const response = loginUserApi(data)
        // if(response.data.success == false){
        //     toast.error(response.data.message);
        // } else if(response.data.message == true){
        //     toast.success(response.data.message)
        // } else{
        //     toast.error("Server Error")
        //     // console.log()
        // }

        loginUserApi(data).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                localStorage.setItem('token', res.data.token)
                const jsonDecode = JSON.stringify(res.data.userData)
                localStorage.setItem("user", jsonDecode)
                navigate('/user/home')

                // if (res.data.userData.isSeller) {
                //     navigate('/seller/dashboard')
                // }
                // else {
                //     navigate('/user/home')
                // }

            }
        }).catch((err) => {
            toast.error('Error in server');
            console.log(err.message);
        });

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


                                {/* <label>Email</label> */}
                                <input onChange={(e) => setEmail(e.target.value)} className='form-control mb-3' placeholder='Enter your Email'></input>

                                {/* <label>Password</label> */}
                                <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-3' placeholder='Enter your Password'></input>
                                <a href="/forgotPassword" class="btn btn-link text-primary">
                                    Forgot Password?
                                </a>


                                <button onClick={handleSubmit} className='btn btn-danger w-100 mb-4'>Sign in</button>

                            </div>


                            <div class="d-flex justify-content-center">
                                <p class="text-muted">Don't have an account yet?</p>
                                <a href="/register" class="btn btn-link text-primary">
                                    Sign up
                                </a>

                            </div>
                            {/* <div>
                                <a href="/user/home" class="btn btn-link text-primary">
                                    Continue as a guest
                                </a>
                            </div> */}


                            <div className='signup-with-div' style={{
                                color: 'black',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                                Sign in with
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
        // <div>
        //     <h1 className='p-4'>  Login to your Account !!!!</h1>
        //     {/* w-50 = 50% of total screen width    */}
        //     <form className='m-4 w-25'>
        //        
        //     </form>

        // </div>
    )
}

export default Login
