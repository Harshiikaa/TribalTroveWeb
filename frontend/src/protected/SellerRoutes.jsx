import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const SellerRoutes = () => {
    const seller = JSON.parse(localStorage.getItem('seller'))
    const navigate = useNavigate()
    return seller != null
        // && user.isSeller 
        ?
        <Outlet /> : navigate('/sellerLogin')
}

export default SellerRoutes