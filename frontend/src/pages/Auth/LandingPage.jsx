import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";
// import RoundUI from "../components/RoundUI";
import image1 from '../../assets/images/sewing.jpg';
import image2 from '../../assets/images/woodCarving.jpg';
import image3 from '../../assets/images/jewelryMaking.jpg';

import '../../pages/Auth/css/LandingPage.css';
import Navbar from "../../components/Navbar";


const LandingPage = () => {

  // homepage chaldaa chaldaii api sanga communicate garna paryo 
  useEffect(() => {
    testApi().then((res) => {
      console.log(res)

    })
  }, [])

  return (
    <>
      <Navbar/>
      <div className="landing-page">
        <div className="text-section">
          <div className="w-50">
            <h6>EXPLORING CULTURES AND CELEBRATING ARTISTRY</h6>
            <p>"Discover Nepal's
              Artistry, Crafted by
              Tradition, Cherished
              by the World."</p>
            <button
              className='btn btn-success w-100 mb-2' style={{ maxWidth: '100px' }}>Explore</button>
          </div>


          <div className="image-section">
            <div className="img-1" style={{ position: 'absolute', top: '80px', right: '230px' }} >
              <img src={image1} alt="Image 1" style={{ width: '330px', height: '200px', flex: "1", display: "flex", flexdirection: "column", size: "30px", gap: "10px" }} />

            </div>
            <div className="img-2" style={{ position: 'absolute', top: '150px', right: '30px' }} >
              <img src={image2} alt="Image 2" style={{ width: '230px', height: '280px', flex: "1", display: "flex", flexdirection: "column", size: "25px", gap: "10px" }} />

            </div>
            <div className="img-3" style={{ position: 'absolute', top: '320px', right: '190px' }} >
              <img src={image3} alt="Image 3" style={{ width: '300px', height: '200px', flex: "1", display: "flex", flexdirection: "column", size: "30px", gap: "10px" }} />

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default LandingPage