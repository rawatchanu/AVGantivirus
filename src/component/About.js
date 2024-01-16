import React from 'react';
import img from "../images/about.jpg";
import "./about us.css";

const About= () => {
  return (
    <div className='about'>
        <div className='about-left'>
              <img src={img} />
        </div>
        <div className='about-right'>
            <h2>ABOUT US</h2>
            <h1>One-Stop Solution for Unmatched Protection</h1>
            <p>Welcome to AVG Antivirus Program, a global leader in cybersecurity. With a rich legacy, 
              we prioritize real-time defense, offering advanced protection against evolving threats.
               Our user-friendly interface ensures easy navigation, while features like webcam protection 
               and auto-tracking prioritize your privacy. Constant creation drives us, reflected in automatic
                updates that keep your defense mechanisms current. Experience efficient, multi-device protection 
                without compromising performance. Our commitment extends to 24/7 customer support, ensuring a 
                seamless experience. AVG is not just an antivirus program it plays the role of bodyguard in your
                 digital world, where trust, innovation, and security meet to create
               a safer online environment for millions of users worldwide.</p>
        </div>
    </div>
  )
}

export default About