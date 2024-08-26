import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../App'


function Header() {

  const { cart } = useContext(cartContext);


  return (
    <div className='w-full h-20 bg-orange-400 flex flex-row justify-between md:px-10 px-5 items-center'>
      <div>
        <h1 className='md:text-3xl text-3xl font-semibold text-white'>Food Cart</h1>
      </div>

      <div >
        <ul className='flex flex-row md:space-x-6 space-x-3'>
          <li className='text-2xl text-white'>
            <Link to={"/"}>Home</Link>
          </li>
          <li className='text-2xl text-white flex items-center space-x-2'>
            <div className='bg-green-400 rounded-full flex justify-center items-center h-7 w-7'>
              <span className='text-white text-lg'>{cart.length}</span>
            </div>
            <Link to={"/Cart"}>Cart</Link>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Header