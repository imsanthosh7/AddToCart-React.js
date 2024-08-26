import React, { useState } from 'react'
import { food_list } from '../assets/asssets'
import Product from './Product';


function Home() {


  const [product] = useState(food_list);

  return (
    <div className='flex justify-center flex-row flex-wrap gap-2 md:gap-7 '>
      {
        product.map((product, id) => (
          <Product key={id} product={product} />
        ))
      }
    </div>
  )
}

export default Home