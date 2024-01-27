import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../components/Navbar.css'
import '../components/Sidebar.css'


const Navbar = () => {
  // get data of user from local storage 
  const user = JSON.parse(localStorage.getItem('user'))
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const iconLeftPosition = isSidebarOpen ? '212px' : '5px';
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand text-danger fw-bold" href="#">Navbar</a> */}
          <div className="logo-container"><img src={logo} alt="Company Logo" className="logo" /> </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/SellerRegister">Become a Seller</a>
              </li>
              <form className="d-flex" role="search">
                {
                  user ? <>
                    <div class="dropdown">
                      <button class="btn btn-outline-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* Profile */}
                        Welcome! {user.firstName}
                      </button>
                      <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                        <li><Link class="dropdown-item" to="/changePassword">Change Password</Link></li>
                        <li><Link class="dropdown-item" to="/login">Logout</Link></li>
                      </ul>
                    </div>
                  </>
                    : <>
                      <Link className="btn btn-outline-black" to={"/register"}>Register</Link>
                      <Link className="btn btn-outline-black" to={"/login"}>Login</Link>
                    </>
                }
              </form>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EN
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#"> Nepali</a></li>
                </ul>
              </li> */}

            </ul>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar