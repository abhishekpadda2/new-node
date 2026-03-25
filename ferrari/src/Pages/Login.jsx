import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <nav>

      <ul className='@apply flex justify-between items-center bg-[blue] text-[white]  m-[30px] p-5 border-2 border-[solid_black];'>
        <li>All</li>
        <Link to="/Secure">
        <button>Mx Player</button>
        </Link>
        <li>Sell</li>
        <Link to="/Phone">
        <button> prithvi</button>
        </Link>
        <li>Bestseller</li>
        <li>Mobiles</li>
        <li>Customer Services</li>
        <li>Today Deals</li>
        <li>Primes</li>
        
      </ul>

    </nav>



  )
}

export default Login