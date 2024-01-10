import React from 'react'
import Image from 'next/image'
const IMAGE_PATH = '/images/TST-peninsula.jpg'
import styles from './hero.css';
const { heroContent, heroWrapper, imageWrapper } = styles;

//todo
// hero banner - family Cardo
// - color
//- placement
// - addd button

// hero image size 
//background-image: url(&quot;https://cdn.durable.co/covers/29mRoVDSTnpcnBPAcO8PivXew8K98dpUCZH9AB4T57OcEXDd80oj1JG7iaIV1KdH.jpg&quot;); background-position: center center; background-size: cover;


// add overlay visocity - done
// solid text - done
// move text ...

//background-color: rgb(62, 139, 166); opacity: 0.7;

// hero content 
//relative z-10 flex justify-center flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering
//absolute inset-0 z-5 transition-all duration-300
//relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-12 lg:pt-40 pb-12 lg:pb-40


export default function Hero() {
  return (

<>

<div className='heroWrapper -z-[1] relative  flex flex-col bg-indigo-200 ' style={{height:"60vh"}}>
      <div className='imageWrapper bg-red overflow-hidden ' >
        <Image
          priority
          src={IMAGE_PATH}
          //layout="fill"
          
          objectFit="cover"
          objectPosition="center"
          fill
          // width={0}
          // height={0}
          // sizes="100vw"
          // style={{ width: '100%', height: 'auto',  zIndex: "-1" }} // optional
          className="object-contain  max-w-full b z-0"
          
          alt="hero image example bg-blue"
        />
      </div>



      {/**overlay */}
      <div className='  absolute w-full h-full z-10' style={{backgroundColor:"#3E8BA6", opacity:"0.7"}}    >
      
      </div>


      <div className= 'flex flex-wrap flex-col justify-center items-start content-start  absolute w-full h-full  heroContent  z-20  mx-auto px-5 md:px-6 transition-all duration-300 pt-12 lg:pt-40 pb-12 lg:pb-40 ' >
        <h2 className="text-white text-6xl font-semibold font-hero-700 "style={{opacity:"1"}}> BOOK a stay with us!</h2>
        <p className=" self-start text-white text-2xl font-semibold font-hero-700 " > & experience the vibe of Tsim Sha Tsui</p>


      </div>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{height:'100%'}}>
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
      <svg class="absolute bottom-0 left-0" width="1017" height="396" viewBox="0 0 1017 396"><defs><clipPath id="4feb6d69-a77c-4a26-9ceb-8b8fdd9189b7"><rect width="1017" height="334" fill="transparent"></rect><path d="M0 0 C508.5 62 508.5 62 1017 0 L1017 0 L0 0" transform="translate(0, 334)" fill="transparent"></path></clipPath></defs></svg>

      <img 
      src="./images/test.svg"
      style={{width:"100%", height:"50px", zIndex:"50"}}
      alt="test"
      
 />
    </div>

</>
    )
}

