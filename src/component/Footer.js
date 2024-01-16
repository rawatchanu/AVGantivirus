import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot">
            <div className="logo">
                <h1>AVG</h1>
                <p>our commitment goes beyond service, it's a promise to care for your needs with excellence. Your satisfaction is our measure of success.</p>
            </div>
            <div>
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>Privacy and Policy</li>
                    <li>Term Abd Condition</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div>
                <h4>CONTACT US</h4>
                <ul>
                    <li>avg@gmail.com</li>
                    <li>200, noida</li>
                    <li>+01 342 682 1867</li>
                </ul>
            </div>
        </div>
        <p className="copy">©2021 AVG. All Rights Reserved. Made by Kasperinfotech pvt. ltd.</p>
    </div>
  )
}

export default Footer