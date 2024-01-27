import { useState } from "react"
import {  getSingleSellerApi } from "../../apis/Api"
import SellerNavbar from "../../components/SellerNavbar"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const SellerProfile = () => {
    // receive product id from URL
    const seller = JSON.parse(localStorage.getItem('seller'))
    console.log(seller.id)
    // navigator

    const navigate = useNavigate()

    // make use state 
    const [businessName, setBusinessName] = useState('')
    const [businessPhone, setBusinessPhone] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')
    const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [businessDescription, setBusinessDescription] = useState('')

    // make use state for image 
    // const [businessLogo, setBusinessLogo] = useState(null)
    // const [previewLogo, setPreviewLogo] = useState(null)

    // const [users, setUsers] = useState([])
    useEffect(() => {
        getSingleSellerApi(seller._id).then((res) => {
            console.log(res.data)
            setbusinessName(res.data.seller.businessName)
            setBusinessPhone(res.data.seller.businessPhone)
            setbusinessAddress(res.data.seller.businessAddress)
            setEmail(res.data.seller.email)
        })
    }, [seller])

    // // Function for image upload and preview
    // const handleImageUpload = (event) =>{
    //     const file = event.target.files[0]
    //     setBusinessLogo(file)
    //     setPreviewLogo(URL.createObjectURL(file))

    // }

    // handle submit
    const handleSubmit = (e) => {
        console.log(businessName, businessPhone, businessAddress, email)
        e.preventDefault()
        const formData = new FormData()
        formData.append("businessName", businessName)
        formData.append("businessPhone", businessPhone)
        formData.append("businessAddress", businessAddress)
        formData.append("businessEmail", email)
        // formData.append("password", password)
        // formData.append("businessLogo", businessLogo)

        updateSellerApi(seller._id, formData).then((res) => {
            if (res.data.success == true) {
                toast.success(res.data.message)
                navigate('/seller/profile')
            } else {
                toast.error(res.data.message)
            }

        }).catch(err => {
            toast.error("Server Error")
        })
    }


    return (
        <>
            <SellerNavbar />
            <div className="modal-body">
                <form >
                    <label>Business Name</label>
                    <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business name"></input>
                    <label>Business Phone Number</label>
                    <input value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business phone number"></input>
                    <label>Business Address</label>
                    <input value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business address"></input>
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the business email"></input>


                    {/* <label>Product Image</label>
                <input type="file" className="form-control mb-2" /> */}

                    {/* {
                        previewImage && <img src={previewImage} className='img-fluid rounded-3 object-fit-cover' alt='productImage'></img>
                    } */}


                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </>
    )
}

export default SellerProfile