import React from 'react'
import img1 from "../assets/img1.jpg"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className=' bg-yellow-100'>
    <div className='space-x-5 w-full flex justify-center items-center h-screen relative'>
      <img src={img1} alt="" className='absolute h-full top-0 opacity-[0.7]	  object-cover w-full'/>
      <Link to="/exchanges" className={styling}>Exchanges</Link> 
      <Link to="/coins" className={styling} >Coins</Link>
    </div>
    </div>
  )
}
const styling='bg-green-500 text-center text-white hover:bg-green-200 hover:text-black font-bold border border-yellow-700 p-3 w-5/12 h-fit z-10';
export default Home
