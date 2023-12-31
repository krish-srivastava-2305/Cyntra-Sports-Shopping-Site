'use client'
import React,{ useState} from 'react'
import Image from 'next/image'
export let cd = []
const Product = ({products}) => {

  const [quan , setQuan] = useState(0)

  const inc = () => {
    setQuan((prevquan)=>prevquan+1)
    cd.push({
      'Key' : products.Key,
      'Name' : products.Name,
      'Price' : products.Price,
      price : products.price,
      'image' : products.image,
      'Quantity' : quan+1,
    })
  }

  const dec = () => {
    setQuan((prevquan)=>prevquan-1)
    cd.push({
      'Key' : products.Key,
      'Name' : products.Name,
      'Price' : products.Price,
      price : products.price,
      'image' : products.image,
      'Quantity' : quan-1,
    })
  }

  return (
      <div className='h-[23vw] w-[23vw] p-5 flex flex-col justify-between items-center'>
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
          {!quan? <div className='flex items-center justify-normal mt-2 gap-2 w-full'>
            <button onClick={inc} className="px-2 h-full flex items-center justify-center"><p className="border-2     duration-300 rounded-3xl p-3 hover:bg-black hover:text-white ">Add To Cart</p></button>
            <button className="px-2 h-full flex items-center justify-center"><p className="border-2 duration-300 rounded-3xl p-3 hover:bg-white hover:text-black bg-zinc-800 text-white">Buy Now</p></button>
          </div>:<div className='flex items-center justify-between border-2 border-black solid w-[60%] p-2 rounded-lg mt-2 gap-2'>
            <button onClick={dec} className='h-full w-[30%] border-r-black border-r-2'><p className='font-bold  hover:scale-150 duration-300 hover:text-red-500'>-</p></button>
            <h3>{quan}</h3>
            <button onClick={inc} className='h-full w-[30%] border-l-black border-l-2 '><p className='font-bold  hover:scale-150 duration-300 hover:text-green-500'>+</p></button>
          </div>}
          
        </div>
      </div>
  )
}
export default Product
