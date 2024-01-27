import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../components/UserNavbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const UserNavbar = () => {

    const [darkMode, setDarkMode] = useState(" ");

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    <div className="logo-container"><img src={logo} alt="Company Logo" className="logo" /> </div>
                    <div className='search-section'>

                        <div className="outer-container" style={{ width: 421, height: 40, position: 'relative' }}>
                            {/* Outer Container */}
                            <div className="outer-box" style={{ width: 421, height: 40, left: 0, top: 0, position: 'absolute', background: 'white', border: '1px #0D6EFD solid' }}>
                                {/* Category Selector */}
                                <div className='category-section' style={{ width: 145, height: 40, position: 'absolute', top: 0, left: 0 }}>
                                    <div className="category-selector" style={{ width: 145, height: 40, position: 'relative' }}>
                                        <div className="category-box" style={{ width: 145, height: 40, left: 0, top: 0, position: 'absolute', background: 'white', border: '1px #0D6EFD solid' }}></div>
                                        <div className="category-label" style={{ width: 130, left: 10, top: 11, position: 'absolute', color: '#1C1C1C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
                                            All category
                                        </div>
                                        <div className="category-indicator" style={{ width: 24, height: 24, left: 114, top: 8, position: 'absolute' }}>
                                            <ArrowDropDownIcon style={{ width: 24, height: 24, color: '#8B96A5', position: 'absolute', left: 0, top: 0 }} />
                                        </div>
                                    </div>
                                </div>
                                {/* Search Input */}
                                <div className='search-content' style={{ width: 270, height: 40, position: 'absolute', top: 0, left: 155 }}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        style={{
                                            width: 250,
                                            left: 10,
                                            top: 11,
                                            position: 'absolute',
                                            color: '#8B96A5',
                                            fontSize: 16,
                                            fontFamily: 'Inter',
                                            fontWeight: '400',
                                            wordWrap: 'break-word',
                                            border: 'none',
                                            outline: 'none',
                                            padding: '0',
                                            backgroundColor: 'transparent',
                                        }}
                                    />
                                </div>
                                {/* Gradient Background */}
                                <div className='search-button' style={{ width: 100, height: 40, position: 'absolute', top: 0, left: 420 }}>
                                    <div className="gradient-background" style={{ width: 100, height: 40, position: 'relative' }}>
                                        <div className="gradient-box" style={{ width: 100, height: 40, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)' }}></div>
                                        <div className="gradient-content" style={{ width: 80, left: 10, top: 11, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                            <div className="gradient-text" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>
                                                Search
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item" style={{ textAlign: 'center' }}>
                                <a className="nav-link active" aria-current="page" href="/user/favorites">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <FavoriteIcon style={{ fontSize: 24 }} />
                                        <span style={{ fontSize: 14, marginTop: 4 }}>Favorites</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" style={{ textAlign: 'center' }}>
                                <a className="nav-link active" aria-current="page" href="/user/profile">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <PersonIcon style={{ fontSize: 24 }} />
                                        <span style={{ fontSize: 14, marginTop: 4 }}>Profile</span>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item" style={{ textAlign: 'center' }}>
                                <a className="nav-link active" aria-current="page" href="/user/myCart">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <ShoppingCartIcon style={{ fontSize: 24 }} />
                                        <span style={{ fontSize: 14, marginTop: 4 }}>My cart</span>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item" style={{ textAlign: 'center' }}>
                                <a className="nav-link active" aria-current="page" href="#" onClick={handleToggle}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {darkMode ? (
                                            <ToggleOnIcon style={{ fontSize: 24 }} />
                                        ) : (
                                            <ToggleOffIcon style={{ fontSize: 24 }} />
                                        )}
                                        <span style={{ fontSize: 14, marginTop: 4 }}>{darkMode ? 'Dark Mode on' : 'Dark Mode off'}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar
