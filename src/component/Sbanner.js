import React from 'react';
import sbanner from "../images/sbanner.jpg";
import "./sbanner.css";

const Sbanner = () => {
  return (
    <div className='sbanner'>
        {/* <div className='sbannerimg'>
        <img src={sbanner} />
        </div> */}
      <div className='scontent'>  
        <h1>Discover our services</h1>
        <p>
           our commitment goes beyond service, it's a promise to care for your needs with excellence.
           Your satisfaction is our measure of success.
        </p>
      </div>
    </div>
  )
}

export default Sbanner