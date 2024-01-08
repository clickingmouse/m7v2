import React from 'react'
import Image from 'next/image'
const IMAGE_PATH = '/images/TST-peninsula.jpg'
import styles from './hero.css';
const { heroContent, heroWrapper, imageWrapper } = styles;
export default function Hero() {
  return (

<>

<div className='heroWrapper'>
      <div className='imageWrapper'>
        <Image
          priority
          src={IMAGE_PATH}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className='heroContent'>
      <h2 className="text-grey-700 text-6xl font-semibold"> BOOK a stay with us</h2>
              <h3 className="text-2xl font-semibold" > & experience the vibe of Tsim Sha Tsui</h3>
      </div>
    </div>

</>
    )
}

