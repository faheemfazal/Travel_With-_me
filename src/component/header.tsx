import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
function header() {
  return (

   <>

   <nav className='fixed bg-black w-full z-50 '>
    <div className='mx-5 md:mx-14 p-4 '>
      <div className='item-center r flex justify-between'>
        <div className=''>
        <Link to='/'><h1 className='text-white font-semibold text-3xl '>Travel</h1></Link>
        </div>

        <div className='inline-block justify-center'>
          <ul className='flex space-x-3 my-1'>
            
          <li className='relative'> 
          <Link to='/' className='relative'><h1 className="text-white text-xl mx-2">Home</h1>
          <div
          style={{ width: '100%', height: '2px', backgroundColor: 'white' }}
          className="absolute bottom-0 left-0 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        ></div>
          </Link>  </li>
          <li className=''> <Link to='/'><h1 className="text-white text-xl mx-2  ">Travel</h1></Link>  </li>
          <li className=''> <Link to='/'><h1 className="text-white text-xl mx-2  ">Book Now</h1></Link>  </li>
          <li className=''> <Link to='/'><h1 className="text-white text-xl mx-2  ">Gallery</h1></Link>  </li>
          <li className=''>  <Link to='/'><h1 className="text-white text-xl mx-2  ">Blog</h1></Link>  </li>
          
          </ul>


        </div>




      </div>
    </div> 
   </nav>
   </>


  )
}

export default header
