import axios from "axios";
const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "multipart/form-data",
    }
})

const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }

}
export const testApi = () => Api.get("/test")

// API export for users
export const createUserApi = (data) => Api.post('/api/user/create', data)
export const loginUserApi = (data) => Api.post('/api/user/login', data)
export const getAllUsersApi = () => Api.get('/api/user/getUsers')
export const getSingleUserApi = (id) => Api.get(`/api/user/getUser/${id}`)
export const updateUserApi = (id, formData) => Api.put(`/api/user/updateUser/${id}`, formData, config)
export const deleteUserApi = (id) => Api.delete(`/api/user/deleteUser/${id}`, config)



// API export for sellers
export const createSellerApi = (data) => Api.post('/api/seller/create', data)
export const loginSellerApi = (data) => Api.post('/api/seller/login', data)
export const getAllSellersApi = () => Api.get('/api/seller/getSellers')
export const getSingleSellerApi = (id) => Api.get(`/api/seller/getSeller/${id}`)
export const updateSellerApi = (id, formData) => Api.put(`/api/seller/updateSeller/${id}`, formData, config)
export const deleteSellerApi = (id) => Api.delete(`/api/seller/deleteSeller/${id}`, config)


// API export for products
export const createProductApi = (data) => Api.post('/api/product/createProduct', data, config)
export const getAllProductsApi = () => Api.get('/api/product/getProducts')
export const getSingleProductApi = (id) => Api.get(`/api/product/getProduct/${id}`)
export const updateProductApi = (id, formData) => Api.put(`/api/product/updateProduct/${id}`, formData, config)
export const deleteProductApi = (id) => Api.delete(`/api/product/deleteProduct/${id}`, config) 