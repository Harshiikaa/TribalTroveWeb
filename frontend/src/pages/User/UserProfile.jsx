import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import '../User/UserProfile.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUserApi, updateUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile.name);
  };
  // receive product id from URL
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.id)
  // navigator

  const navigate = useNavigate()

  // make use state 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  // make use state for image 
  // const [userImage, setUserImage] = useState(null)
  // const [previewImage, setPreviewImage] = useState(null)
  // const [oldImage, setOldImage] = useState(null)



  useEffect(() => {
    // api call 
    getSingleUserApi(user._id).then((res) => {
      console.log(res.data)
      setFirstName(res.data.user.firstName)
      setLastName(res.data.user.lastName)
      setPhoneNumber(res.data.user.phoneNumber)
      setEmail(res.data.user.email)
      setPassword(res.data.user.password)
      // setUserImage(res.data.user.userImage)
      // setOldImage(res.data.user.userImageURL)
    })
  }, [user])

  // Function for image upload and preview 
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0]
  //   setUserImage(file)
  //   setPreviewImage(URL.createObjectURL(file))
  // }

  // make function for the button
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, phoneNumber, email, password)
    // console.log(userImage)

    // make a form data 
    const formData = new FormData();
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('phoneNumber', phoneNumber)
    formData.append('email', email)
    formData.append('password', password)
    // formData.append('userImage', userImage)

    // making api call 
    updateUserApi(user._id, formData).then((res) => {
      if (res.data.success == true) {
        toast.success(res.data.message)
        navigate('/user/profile')
      } else {
        toast.error(res.data.message)
      }

    }).catch(err => {
      toast.error("Server Error")
    })

  }

  return (
    <div>
      <UserNavbar />
      <h1>Edit Profile </h1>

      <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
        <div className='d-flex m-4 gap-4'>
          <div className=''>
            <form >
              <div className='image-side'>
                {/* <h6>Old image  Logo</h6> */}
                {/* <img className='object-fit-cover rounded-3' height={200} width={200} alt='' /> */}

                {/* <label>Business Logo</label>
                <input type="file" className="form-control mb-2" /> */}

                {/* <label htmlFor="fileInput" className="fileInputLabel">
                  Upload new picture
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="form-control mb-2 visually-hidden"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileInputChange}
                /> */}

                <hr />

                {/* <div className='image-side' >
                  <h6>Old image</h6>
                  <img src={oldImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
                  <hr />
                  {
                    previewImage && <>
                      <h6 className='mt-3'>New image</h6>
                      <img src={previewImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' /></>
                  }
                </div> */}

              </div>

              <label>First Name</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control mb-2" ></input>
              <label>Last Name</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control mb-2" ></input>
              {/* <label>Contact Number</label>
              <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business email"></input> */}
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" ></input>
              <label>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mb-2" ></input>
              {/* <label>User Image</label>
              <input onChange={handleImageUpload} type="file" className="form-control mb-2" /> */}

              <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Save</button>
            </form>

          </div>
          {/* <div className='image-side' style={{ marginLeft: '20px' }}>
            <h6>Old image</h6>
            <img className='object-fit-cover rounded-3' height={200} width={200} alt='' />
            <hr />
            {
              previewImage && <>
                <h6 className='mt-3'>New image</h6>
                <img className='object-fit-cover rounded-3' height={200} width={200} alt='' /></>
            }
          </div> */}
        </div>
      </div>

    </div>
  )

}

export default UserProfile
