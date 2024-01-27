import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProductApi, updateProductApi } from '../../apis/Api'
import { toast } from 'react-toastify'
import SellerNavbar from '../../components/SellerNavbar'

const SellerEditProduct = () => {
  // receive product id from URL
  const { id } = useParams()
  // navigator

  const navigate = useNavigate()

  // make use state 
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setProductDescription] = useState('')

  // make use state for image 
  const [productImage, setProductImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [oldImage, setOldImage] = useState(null)


  useEffect(() => {
    // api call 
    getSingleProductApi(id).then((res) => {
      console.log(res.data)
      setProductName(res.data.product.productName)
      setProductPrice(res.data.product.productPrice)
      setProductCategory(res.data.product.productCategory)
      setProductDescription(res.data.product.productDescription)
      setProductImage(res.data.product.productImage)
      setOldImage(res.data.product.productImageURL)
    })

  }, [id])


  // Function for image upload and preview 
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setProductImage(file)
    setPreviewImage(URL.createObjectURL(file))
  }

  // make function for the button
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productName, productPrice, productCategory, productDescription)
    console.log(productImage)

    // make a form data 
    const formData = new FormData();
    formData.append('productName', productName)
    formData.append('productPrice', productPrice)
    formData.append('productCategory', productCategory)
    formData.append('productDescription', productDescription)
    formData.append('productImage', productImage)

    // making api call 
    updateProductApi(id, formData).then((res) => {
      if (res.data.success == true) {
        toast.success(res.data.message)
        navigate('/seller/products')
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
      <h2 className='m-10 text-center' > Update <span className='text-danger'>{productName}</span></h2>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', border: '2px solid #ddd', padding: '20px' }}>
        <div className='d-flex m-4 gap-4'>
          <div className=''>
            <form >
              <label>Product Name</label>
              <input value={productName} onChange={(e) => setProductName(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the product name"></input>
              <label>Product Price</label>
              <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter the product price"></input>
              <label>Product Category</label>
              <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className="form-control mb-2"  >
                <option value="Art">Art</option>
                <option value="Decor">Decor</option>
                <option value="Accessories">Accessories</option>
              </select>

              <label>Product Description</label>
              <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} type="text" id="" rows="3" cols="3" className="form-control mb-2" placeholder="Enter the product description"></textarea>

              <label>Product Image</label>
              <input onChange={handleImageUpload} type="file" className="form-control mb-2" />

              <button onClick={handleSubmit} className='btn btn-primary w-100 mt-2'>Update product</button>
            </form>

          </div>
          <div className='image-side' style={{ marginLeft: '20px' }}>
            <h6>Old image</h6>
            <img src={oldImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' />
            <hr />
            {
              previewImage && <>
                <h6 className='mt-3'>New image</h6>
                <img src={previewImage} className='object-fit-cover rounded-3' height={200} width={200} alt='' /></>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default SellerEditProduct;
