import React from 'react';
import bimg from "../images/pcard.jpg";
import bimg2 from "../images/pcard2.jpg";
import bimg3 from "../images/pcard3.jpg";
import bimg4 from "../images/pcard4.jpg";
import "./blogC.css";

const BlogC = () => {
  return (
    <div className='blogC'>
           <div className='bcard'>
                <div className='bimg'>
                    <img src={bimg}/>
                </div>
                <div className='b-content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>The Role of Managed Security Services in Today’s Threat Landscape</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='bcard'>
                <div className='bimg'>
                    <img src={bimg2}/>
                </div>
                <div className='b-content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>AI and Machine Learning in Cybersecurity Enhancing Your Defenses</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='bcard'>
                <div className='bimg'>
                    <img src={bimg3}/>
                </div>
                <div className='b-content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>Endpoint Security Fortify Your Devices with Our Cybersecurity Solutions</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>

            <div className='bcard'>
                <div className='bimg'>
                    <img src={bimg4}/>
                </div>
                <div className='b-content'>
                    <p>Wednesday,22-nov-2022</p>
                    <h2>Data Breaches How Our Cybersecurity Services Can Prevent Catastrophe</h2>
                    <button className='btn'>Read More</button>
                </div>
            </div>
    </div>
  )
}

export default BlogC