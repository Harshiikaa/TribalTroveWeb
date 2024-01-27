import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPass from './pages/Auth/ForgotPass';
import LandingPage from './pages/Auth/LandingPage';
import HomePage from './pages/User/HomePage';

import SellerDashboard from './pages/Seller/SellerDashboard';
import SellerEditProduct from './pages/Seller/SellerEditProduct';
import SellerEditOrders from './pages/Seller/SellerEditOrders';
import SellerEditProfile from './pages/Seller/SellerEditProfile';
import SellerNotification from './pages/Seller/SellerNotification';
import SellerProduct from './pages/Seller/SellerProduct';
import SellerRoutes from './protected/SellerRoutes';

import UserRoutes from './protected/UserRoutes';
import UserFavorite from './pages/User/UserFavorite';
import UserMyCart from './pages/User/UserMyCart';
import UserNotification from './pages/User/UserNotification';
import UserProfile from './pages/User/UserProfile';
import SellerLogin from './pages/Auth/SellerLogin';
import SellerRegister from './pages/Auth/SellerRegister';
import ResetPassword from './pages/Auth/ResetPassword';



const App = () => {
  return (
    <Router>
      <ToastContainer />

      <Routes  >
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/sellerRegister" element={<SellerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
        <Route path="/resetPassword/:id/:token" element={<ResetPassword />} />

        {/* User Authorization */}
        <Route path='user' element={<UserRoutes />} >
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="favorites" element={<UserFavorite />} />
          <Route path="myCart" element={<UserMyCart />} />
          <Route path="notifications" element={<UserNotification />} />
        </Route>

        <Route path='seller' element={<SellerRoutes />}>
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<SellerProduct />} />
          <Route path="productEdit/:id" element={<SellerEditProduct />} />
          <Route path="orders" element={<SellerEditOrders />} />
          <Route path="profile" element={<SellerEditProfile />} />
          <Route path="notifications" element={<SellerNotification />} />
        </Route>

        {/* Admin Authorization */}
      </Routes>
    </Router>
  );
}

export default App;
