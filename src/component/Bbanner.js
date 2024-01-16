import React from 'react';
import bbanner from "../images/bbanner.jpg"

const Bbanner = () => {
  return (
    <div className='sbanner'>
        {/* <div className='sbannerimg'>
        <img src={bbanner} />
        </div> */}
      <div className='scontent'>  
        <h1>Explore Our Blog</h1>
        <p>
        Explore the latest tips, insights, and expert advice on laptop care, 
        troubleshooting, performance enhancement, and tech updates in our comprehensive blog.
        </p>
      </div>
    </div>
  )
}

export default Bbanner