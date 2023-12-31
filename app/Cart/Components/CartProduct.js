import React from 'react'
import Image from 'next/image';

const CartProduct = ({products}) => {
  return (
    
    <div className=' mt-5 ml-3 hover:shadow-[0_20px_50px_rgba(60,_60,_60,_0.7)] duration-500 rounded-xl h-[23vw] w-[23vw] p-5 flex flex-col justify-between items-center border-1 border-black border-solid'>
        <div className='overflow-hidden h-[500px] w-[200px]'>
        <Image 
        src = {products.image}
        width={200}
        height={500}
        />
        </div>
        <div className='flex flex-col justify-between items-center mt-3 w-full'>
          <p><b>{products.Name}</b></p>
          <p>{products.Price}</p>
          <div className='flex items-center justify-center border-2 border-black solid w-[60%] p-2 rounded-lg mt-2 gap-2'>
            <h3><b>Quantity : {products.Quantity}</b></h3>
          </div>
        </div>
      </div>
  )
}

export default CartProduct
