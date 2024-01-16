import React from 'react';
import "./services.css";
import Simage from "../images/simage.jpg";
import Simage2 from "../images/simage2.jpg";
import Simage3 from "../images/simage3.jpg";
import Simage4 from "../images/simage4.jpg";


const Services = () => {
  return (
    <div className='services'>
      <h1>OUR SERVICES</h1>

      <div className='box-card'>

        <div className='scard'>
          <div className='s-image'>
            <img src={Simage} />
          </div>
        <h2>Security Cleanup</h2>
        <p>Keeping a secure computing environment on a laptop requires 
          regular malware detection and removal.</p>  
        <button>Explore More</button>
        </div>

        <div className='scard'>
          <div className='s-image'>
            <img src={Simage2} />
          </div>
        <h2>Firewall Configuration</h2>
        <p>To improve your security and handle network traffic, setting up a firewall on your
           laptop is most important.</p>
        <button>Explore More</button>
        </div>

        <div className='scard'>
          <div className='s-image'>
            <img src={Simage3} />
          </div>
        <h2>Identity Protection</h2>
        <p>Applying strong Identity Protection on your laptop is necessary for personal
           information and preventing from unauthorized access.</p>
        <button>Explore More</button>
        </div>

        <div className='scard'>
          <div className='s-image'>
            <img src={Simage4} />
          </div>
        <h2>Customer Support</h2>
        <p>Customer support for laptops is key for resolving issues, answering queries, 
          and assuring a positive user experience. </p>
        <button>Explore More</button>
        </div>
      </div>  
    </div>
  )
}

export default Services