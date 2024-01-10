import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Link from "next/link";

//bunk icon
//<a href="https://www.flaticon.com/free-icons/bunk-bed" title="bunk bed icons">Bunk bed icons created by Ayub Irawan - Flaticon</a>
//todo <a href="https://www.flaticon.com/free-icons/bunk-bed" title="bunk bed icons">Bunk bed icons created by Ayub Irawan - Flaticon</a>
// insert icon -done
// align links and icons - done
// increase icon size - later


// changed sticky to fixed

//bg-emerald-800
export default function NavBar(toggle) {
  return (
    <>
      <div className="w-full h-20  fixed top-0 bg-navcolor">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            {/* hamburger */}
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            {/*-end hammy*/}

            {/*menu*/}
            <ul className="hidden md:flex gap-x-6 text-white ">
            <li className=' py-1 '>
            <Link href="#" className='px-4 flex flex-col-reverse justify-end items-center' >
                <span> Getting Here</span>
            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
 
            </Link>
  </li>
  <li className=' py-1 '>
            <Link href="#" className='px-4 flex flex-col-reverse justify-end items-center' >
      <span> Guides</span>
      <svg  className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg>

    </Link>
  </li>
  <li  className=' py-1'>
    <Link href="#" className='px-4 flex flex-col-reverse justify-end items-center ' >
      <span> About</span>
      <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

    </Link>
  </li>
  <li  className=' py-1'>
    <Link href="#" className='px-4 flex flex-col-reverse justify-end items-center'>
      <span> FAQ</span>
      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

    </Link>
  </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
