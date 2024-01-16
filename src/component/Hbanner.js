import React from 'react';
import "./hbanner.css";
import Bimg from "../images/banner.jpg";
const Hbanner = () => {
  return (
    <div className='banner'>
            <img  src={Bimg} />
            <div className='banner-center'>
                <h1>Secure Your Devices with AVG Antivirus Program</h1>
                <p>Explore unparalleled cybersecurity with AVG Antivirus Program – your trusted shield against digital threats
                   for a safer online experience. </p>
                <button>Contact Us</button>
            </div>

    </div>
  )
}

export default Hbanner