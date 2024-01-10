import React from 'react'

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

    <div className='card ' >
      <img src="/images/travelcost.jpg" alt ="" className='w-full  h-56 sm:h-48 object-cover'/>
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