"use client"
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
//import Logo from '../../../public/images/m7.jpg'

export default function NavBar() {
  return (

  <>
      {/*
    <nav>
        <Image
        src = {Logo}
        alt = 'm7 logo'
        width = {70}
        quality ={100}
        placeholder = 'blur'
        />
        <h1>Majestic 7 Guesthouse</h1>
    <Link href="/">Home</Link>
    </nav>
  */}
<nav className='text-right'>
<div className='flex justify-between items-center'>
  <h1 className="font-bold uppercase p-4 border-b border-gray-100">
    <Link href="/" className='hover:text-green-700'>majestic 7 guesthouse </Link>
  </h1 >
  <div className='px-4 cursor-pointer md:hidden' id='burger' >
  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


  </div>
</div>
<ul className="text-sm mt-6 hidden md:block" id="menu">
  <li className='text-gray-700 font-bold py-1'>
    <Link href="#" className='px-4 flex justify-end'  >
      <span> Home</span>
      <svg className='ml-2 w-5 'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    </Link>
  </li>
  {/*}
  <li>
    <a href="#" className='px-4 flex justify-end'>
      <span> Rooms</span>
    </a>
</li>*/}
  <li className=' py-1'>
    <Link href="#" className='px-4 flex justify-end' >
      <span> Getting Here</span>
      <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

    </Link>
  </li>
  <li>
    <Link href="#" className='px-4 flex justify-end' >
      <span> Guides</span>
      <svg  className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg>

    </Link>
  </li>
  <li  className=' py-1'>
    <Link href="#" className='px-4 flex justify-end ' >
      <span> About</span>
      <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

    </Link>
  </li>
{/*}
  <li  className=' py-1'> 
    <a href="#">
      <span> Book</span>
    </a>
  </li>
*/}
  <li  className=' py-1'>
    <Link href="#" className='px-4 flex justify-end'>
      <span> FAQ</span>
    </Link>
  </li>
  <li  className=' py-1'>
    <Link href="#" className='px-4 flex justify-end'>
      <span>Contact</span>
      <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

    </Link>
  </li>

  
</ul>


</nav>

</>
    )
}
