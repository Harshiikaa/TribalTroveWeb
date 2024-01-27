
import React, { useEffect, useState } from 'react'
import backgroundImage from '../../assets/images/background.png'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {

  const { id, token } = useParams();

  const history = useNavigate();

  const [data2, setData] = useState(false);

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/resetPassword/${id}/${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()

    if (data.status == 201) {
        console.log("user valid")
    } else {
        history("*")
    }
}


const setval = (e) => {
    setPassword(e.target.value)
}

const sendPassword = async (e) => {
    e.preventDefault();

    if (password === "") {
        toast.error("password is required!", {
            position: "top-center"
        });
    } else if (password.length < 6) {
        toast.error("password must be 6 char!", {
            position: "top-center"
        });
    } else {
        const res = await fetch(`/${id}/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password })
        });

        const data = await res.json()

        if (data.status == 201) {
            setPassword("")
            setMessage(true)
        } else {
            toast.error("! Token Expired generate new Link",{
                position: "top-center"
            })
        }
    }
}

useEffect(() => {
    userValid()
    setTimeout(() => {
        setData(true)
    }, 3000)
}, [])

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
            }}>enter your new password</div>
          </div>

          <div className='m-3'>
            <div className='signup-with-div' style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'regular',
            }}>
              Enter your email address here, we will send a link to reset your password
            </div>
          </div>

          {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Successfully Updated </p> : ""}


          <div>
            <div style={{ padding: '10px 5px' }}>
              <div className='field-group'>
                <input
                  onChange={setval}
                  className='form-control mb-2'
                  placeholder='new password'
                />
              </div>
              <button

                onClick={sendPassword}

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

export default ResetPassword
