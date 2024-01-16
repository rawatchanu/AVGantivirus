import React from 'react';
import { MdMailOutline } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineStorefront } from "react-icons/md";
import mail from "../images/mail.jpg";
import phone from "../images/call.jpg";
import store from "../images/store.jpg";
import "./contactUs.css";

const ContactUs = () => {
  return (

    <div class="gettingHelp">

    <div class="gettingHelp_title">
        <h2>Quick Fix Junction</h2>
        <p>Welcome to the Quick Fix Junction, where solutions meet speed, and challenges turn into triumphs with just a click.</p>
    </div>

    <div className="gettingHelp-cards">
    <div className='gcard'>
            <span><MdMailOutline className='gcard-icon' />
            <h6>Mail Us</h6>
            <p> Available 24/7
            </p>
            
            <h3>HP@gmail.com</h3>
            </span>
            <img src={mail} alt='mail' />
        </div>
        <div className='gcard'>
            <span>
                <FaHeadphonesAlt className='gcard-icon' />
          
            <h6>Give us a call</h6>
            <p> Available 24/7
            </p>
            
            <h3>866-625-0242</h3>
            </span>
            <img src={phone} alt='phone' />
        </div>
        <div className='gcard'>
          <span>
                <MdOutlineStorefront className='gcard-icon' />
           

            <h6>Visit a store near you</h6>
            
            <button>Go</button>
            </span>
            <img src={store} alt='store'/>
        </div>

    </div>
</div>
   
  )
}

export default ContactUs