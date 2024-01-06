import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Logo from './m7.jpg'

export default function NavBar() {
  return (
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
    )
}
