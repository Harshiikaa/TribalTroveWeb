import React, { useState } from 'react'
import Categories from "./Categories"
import SliderHome from "./Slider"
import '../User/HomePage.css';
import UserNavbar from '../../components/UserNavbar';


const HomePage = () => {
    const [sidebarWidth, setSidebarWidth] = useState(0);

    // const toggleNav = () => {
    //     setSidebarWidth(sidebarWidth === 250 ? 0 : 250);
    // };
    return (
        <div>
            <UserNavbar />

            <section className='home'>
                <div className='container d_flex'>
                    <Categories />
                    <SliderHome />
                </div>
            </section>
            {/* <div id="mySidepanel" style={{ width: `${sidebarWidth}px` }} className="sidepanel">
                <a href="javascript:void(0)" className="closebtn" onClick={toggleNav}>&times;</a>
                <a href="#">Antique Jewelry</a>
                <a href="#">Embroidery and Needle-work</a>
                <a href="#">Home decors</a>
                <a href="#">Masks and Costume</a>
                <a href="#">Musical Instruments</a>
                <a href="#">Pottery and Ceramics</a>
                <a href="#">Arts and Paintings</a>
                <a href="#">Macrame and Knotting</a>
                <a href="#">More category</a>
            </div>
            <button className="openbtn" onClick={toggleNav}>All Categories</button>
            <h1>Hello this is HomePage for User</h1> */}

        </div>
    )
}

export default HomePage
