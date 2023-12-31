'use client'
import React, { useState } from 'react'
import { Cinzel } from 'next/font/google'
import logo from '../public/cyntra-high-resolution-logo-transparent.png'
import Image from 'next/image'
import Link from 'next/link'

const cinzel = Cinzel({
    weight: ['800'],
    subsets: ['latin'],
  })

const NavBar = () => {
  return (
    <div className = "h-[4vw] w-full px-5 bg-white text-black flex justify-between items-center border-b-2 border-solid border-zinc-700 sticky top-0"> 
      <h1 className={cinzel.className}>Cyntra</h1>
      <Image src={logo}
      priority = {true}
      height = {100}
      width = {100}
      alt = "Logo"
      />
      <div className="flex items-center justify-center gap-5 h-full">
        <div className="px-2 h-full flex items-center justify-center"><p className="border-2 duration-300 rounded-3xl p-2 hover:bg-black hover:text-white">Home</p></div>
        <Link href='/' className="px-2 h-full flex items-center justify-center"><p className="border-2 duration-300 rounded-3xl p-2 hover:bg-black hover:text-white">Products</p></Link>
        <Link href='/Cart' className="px-2 h-full flex items-center justify-center">
          <p className="border-2 duration-300 rounded-3xl p-2 hover:bg-black hover:text-white relative">Cart</p>
        </Link>
        <div className="px-2 h-full flex items-center justify-center"><p className="border-2 duration-300 rounded-3xl p-2 hover:bg-black hover:text-white">Account</p></div>
      </div>
    </div>
  )
}

export default NavBar
