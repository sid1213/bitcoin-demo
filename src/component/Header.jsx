import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <header className='bg-black text-white py-8 px-5'>
      <nav>
            <ul className='flex space-x-3'>
                <li className=' hover:text-red-500'><Link to="/"> Home</Link> </li>
                <li className=' hover:text-red-500'><Link to="/exchanges"> Exchanges</Link> </li>
                <li className=' hover:text-red-500'><Link to="/coins"> Coins</Link> </li>
            </ul>
      </nav>
    </header>
  )
}

export default Header
