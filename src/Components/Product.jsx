import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { cartContext } from '../App';

function Product({ product }) {

    const { cart, setCart} = useContext(cartContext);



    // add to cart 

    const addCart = () => {
        setCart([...cart, product]);
    }
   
    // remove to cart 
    const removeCart = () => {
        setCart(cart.filter((c) => {
            return c.id !== product.id;
        }))
    }

    const description = product.description.length > 70
        ? product.description.slice(0, 70) + '...'
        : product.description;


    return (
        <div>
            <div className='md:w-72 w-80 mt-3 md:mt-7 rounded-lg bg-slate-50 p-4 shadow-sm'>
                <img className='rounded-md hover:scale-105 duration-200' src={product.image} alt="" />
                <h1 className='my-2 text-lg font-semibold'>{product.name}</h1>
                <p className='text-sm text-gray-500'>{description}</p>
                <div className='mt-3 flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-xl font-semibold'>${product.price}</p>
                    </div>
                    <div className='bg-orange-400  rounded-full flex justify-center items-center cursor-pointer hover:bg-orange-500 duration-200'>
                        {
                            cart.includes(product) ? (<button onClick={removeCart} className='text-md text-center p-2 text-black'><MdRemoveShoppingCart /></button>) :
                                (<button onClick={addCart} className='text-md text-center p-2 text-white'><FaCartArrowDown /></button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product