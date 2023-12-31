import React from 'react'
import NavBar from '@/Components/NavBar'
import Product from '@/Components/Product'
import {product} from '@/app/productdata'
const page = () => {
  const items = product.map((item)=>
  {
  return(<Product key= {item.Key} products = {item}></Product>);
  })
   
  return (
    <>
      <NavBar />
      <div className='flex gap-4 items-center flex-wrap'>{items}</div>
    </>
  )
}

export default page
