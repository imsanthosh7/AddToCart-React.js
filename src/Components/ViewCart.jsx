import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../App'
import { CiCircleRemove } from "react-icons/ci";

function ViewCart() {
  const { cart, setCart } = useContext(cartContext);
  const [total, settotal] = useState(0);


  // add the amount 
  useEffect(() => {
    settotal(cart.reduce((acc, crr) => {
      return acc + parseInt(crr.price);
    }, 0))
  }, [cart])




  // remove cart 
  const removeCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  }


  return (
    <div>
      <h1 className='text-2xl'>Cart Products</h1>
      <div className='my-4 flex flex-col gap-2'>
        {
          cart.map((item, id) => (
            <div key={id} className='border border-gray-500 flex justify-between items-center pr-2 md:pr-10'>
              <div className='flex items-center gap-5'>
                <div>
                  <img className='w-32' src={item.image} alt={item.name} />
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>{item.name}</h1>
                  <p>Price ${item.price}</p>
                </div>
              </div>
              <div className='bg-red-500  rounded-full flex justify-center items-center cursor-pointer hover:bg-red-600 duration-200'>
                <button onClick={() => removeCart(item)} className='text-2xl text-center p-2  text-white'><CiCircleRemove /></button>
              </div>
            </div>
          ))
        }
      </div>
      <h1 className='text-2xl'>Total Amount ${total}</h1>
    </div>
  )
}

export default ViewCart