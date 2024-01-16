import React from 'react';
import "./serbanner.css";
import Sideimage from "../images/service.jpg";
import { CiSearch } from "react-icons/ci";
import { IoOptionsOutline } from "react-icons/io5";
import { BsTerminalSplit } from "react-icons/bs";
import { FaUnlockAlt } from "react-icons/fa";

const Serbanner = () => {
  return (
    <div className='ser-banner'>
        <div className='side-img'>
            <img src={Sideimage} />
        </div>
        <div className='right-box'>
            <h1>How Got Our Services</h1>
            <div className='item'>
                <div className='icon' >
                  <CiSearch className='i' />
                </div>
                <h2>Choose Your Service Needs</h2>
            </div>

            <div className='item'>
                <div className='icon' >
                 <IoOptionsOutline className='i' />
                </div>
                <h2>Review Service Provider Options</h2>
            </div>

            <div className='item'>
                <div className='icon' >
                 <BsTerminalSplit className='i' />
                </div>
                <h2>Review the Contract & Terms</h2>
            </div>

            <div className='item'>
                <div className='icon' >
                 < FaUnlockAlt className='i' />
                </div>
                <h2>Service Implementation</h2>
            </div>
        </div>
    </div>
  )
}

export default Serbanner