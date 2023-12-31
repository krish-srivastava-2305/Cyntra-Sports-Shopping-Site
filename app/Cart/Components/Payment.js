import React from 'react'

const Payment = ({details}) => {
    let price = 0,quan = 0,disc = 0,pay=0
    details.map((item)=>{
        price+=item.price*item.Quantity
        quan += item.Quantity
        disc = (price*10)/100
        pay = price-disc
    })
    console.log(details)
  return (
    <div className='p-3 h-screen w-full'>
      <h2 className='font-bold text-center text-[30px] mb-5'>Payment Details</h2>
      <div>
        <div className='flex items-center justify-between m-2'><p>Items in Cart</p> <p className='font-bold'>{quan}</p></div>
        <div className='flex items-center justify-between m-2'><p>Total Price</p> <p className='font-bold'>Rs.{price}</p></div>
        <div className='flex items-center justify-between m-2'><p>Discount(10%)</p>  <p className='font-bold'>Rs.{disc}</p></div>
        <div className='w-[100%] self-center h-[3px] rounded-3xl bg-black'></div>
        <div className='flex items-center justify-between m-2'><p>Payable</p>  <p className='font-bold'>Rs.{pay}</p></div>
      </div>
    </div>
  )
}

export default Payment
