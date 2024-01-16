import React from 'react';
import abanner from "../images/abanner.jpg";

const Abanner = () => {
  return (
    <div className='sbanner'>
    {/* <div className='sbannerimg'>
    <img src={abanner} />
    </div> */}
  <div className='scontent'>  
    <h1>About Us</h1>
    <p>
    Trusted worldwide, AVG Antivirus Program is your cybersecurity partner, providing real-time defense,
     user-centric design, and constant innovation for protection.
    </p>
  </div>
</div>
  )
}

export default Abanner