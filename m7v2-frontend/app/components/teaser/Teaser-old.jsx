import React from 'react'
import Image from 'next/image'

export default function Teaser() {
  return (
    <>
        <div className="" >
            <div>
            <section className='px-10 py-y bg-white'>



<div>
  <h2 className='font-bold mt-4 pb-2 border-b border-gray-200'>What we offer</h2>
  <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10' >
    {/* cards go here*/}
    <div className=" col-span-1 flex flex-col text-center bg-red-200">
      <div className=" inset-0  w-full">
      <Image 
        fill 
        src="/images/travelcost.jpg"
        alt="Current Image" 
        //objectFit="cover"
        objectPosition="center"
        style={{objectFit: 'cover'}}
    />
        <div className="flex flex-col flex-1 p-4 mx-auto">
          <p className="text-sm font-normal tracking-normal text-gray-800 ">ola</p>
          <h2 className="text-base tracking-normal text-gray-800 pb-0 mb-0 t">title</h2>
        </div>
      </div>
    </div>

    <div className='card flex flex-col'  >
        <div>
    <Image 
        fill 
        src="/images/travelcost.jpg"
        alt="Current Image" 
        //objectFit="cover"
        objectPosition="center"
        style={{objectFit: 'cover'}}
    /></div>
        <div className='m-4'>
          <span className='font-bold text-3xl'>affordable </span>
          <span className='block text-gray-500 text-lg'> save more to see more on your journey</span>
        </div>
    </div>
    <div className='card' >
    
      <img src="/images/tst.png" alt ="" className='w-full h-56 sm:h-48 object-cover'/>
        <div className='m-4'>
          <span className='font-bold text-3xl'>city center</span>
          <span className='block text-gray-500 text-lg'> card text</span>
        </div>
    </div>

    <div className='card' >
      <img src="/images/bilingual.jpg" alt ="" className='w-full h-60 sm:h-48 object-cover'/>
        <div className='m-4'>
          <span className='font-bold text-3xl'>mulitlingual</span>
          <span className='block text-gray-500 text-lg'> card text</span>
        </div>
    </div>

    <div className='card' >
      <img src="/images/temple-street-night-food.jpg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
        <div className='m-4'>
          <span className='font-bold text-3xl'>restaurants</span>
          <span className='block text-gray-500 text-lg'> card text</span>
        </div>
    </div>

    <div className='card' >
      <img src="/images/shopping.jpg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
        <div className='m-4'>
          <span className='font-bold text-3xl'>shopping</span>
          <span className='block text-gray-500 text-lg'> card text</span>
        </div>
    </div>

    <div className='card' >
      <img src="/images/victoria-harbor.jpg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
        <div className='m-4'>
          <span className='font-bold text-3xl'>Free Wifi</span>
          <span className='block text-gray-500 text-lg'> card text</span>
        </div>
    </div>


  </div>

</div>
</section>
<section>
             {/* reviews */}

</section>
<section>        {/* map */}
<h2>Our Location</h2>
</section>
               
            </div>
        </div>
    </>
  )
}

//const screenHeight = Dimensions.get('window').height;

const styles = {
    wrapper:{ 
        minHeight: "134px"
    },
    other:{}
}
// const color = {color:'red'}

// theme: {
//     // 👇 this makes Tailwind merge the configuration w/o overriding it.
//     extend: {
//       height: theme => ({
//         "screen/2": "50vh",
//         "screen/3": "calc(100vh / 3)",
//         "screen/4": "calc(100vh / 4)",
//         "screen/5": "calc(100vh / 5)",
//       }),
//     },