import React from 'react'
import logo from '../assets/jwlogo 1.svg'

const Navbar = () => {
  return (
    <section className='flex items-center justify-between px-[2rem] py-[1rem] bg-white text-black font-bold'>
        <div><img src={logo} alt='logo' className='h-[100px] w-[100px]' /></div>
        <ul className='flex items-center'>
            <li className='p-[1.5rem] capitalize text-xl'>home</li>
            <li className='p-[1.5rem] capitalize text-xl'>about</li>
            <li className='p-[1.5rem] capitalize text-xl'>event</li>
            <li className='p-[1.5rem] capitalize text-xl'>Gallery</li>
            <li className='px-[1rem] capitalize text-xl rounded-[30px] bg-[#E7A304] text-[#6D6363] cursor-pointer'>partner</li>
        </ul> 
    </section> 
  ) 
} 

export default Navbar