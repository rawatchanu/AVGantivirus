
import React, {useState, useEffect} from 'react';
import {MdClose} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle]=useState(false);
        const toggleHandler = ()=>{
          setToggle(!toggle)
          console.log(toggle)
        }
        const scrollHandler = () =>{
          window.addEventListener("scroll", ()=>{
            if(toggle===false) return;
            if(window.scrollY>=120){
              setToggle(false);
              

            }
          });
        }
        useEffect(()=>{
          scrollHandler();
        })

  return (
    <div className='navbar'>
        <nav>
            <div className='logo'>
                <h1>AVG</h1>
            </div>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button><Link to="/contact">Let's Talk</Link></button>


            <div className='toggle-icon'>
          {toggle?<MdClose onClick={toggleHandler} className='toggle-ham'/>:<RxHamburgerMenu onClick={toggleHandler} className='toggle-ham'/>}
         </div>
         <div className={toggle? `toggle position` : "toggle"}>
            <ul>
               
                <li><Link href='#home'>Home</Link></li>
                <li><Link href='#about'>Product</Link></li>
                <li><Link href='#about'>About Us</Link></li>
                <li><Link href='#contact'>Contact Us</Link></li>
                <Link href="#contact" className='btn2'>Let's Talk</Link>

            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar