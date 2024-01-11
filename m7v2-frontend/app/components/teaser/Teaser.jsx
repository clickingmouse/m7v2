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

  <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  ">
  <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square"  src="/images/travelcost.jpg" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class="font-3xl font-bold text-3xl tracking-normal text-gray-800 pb-0 mb-0 ">Affordable Rooms</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800 ">we hope travellers visiting Hong Kong can have extra budget to do more</p>
        </div>
      </div>
    </div>
  </li>
  <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square" src="/images/tst.png" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class="text-3xl font-bold tracking-normal text-gray-800 pb-0 mb-0 ">Right In The City Center</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800 ">conveniently right in the center of Hong Kong, every attraction is within an hour radius</p>
        </div>
      </div>
    </div>
  </li>
  <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square" src="/images/bilingual.jpg" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class="text-3xl font-bold tracking-normal text-gray-800 pb-0 mb-0 ">with bilingual staff</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800 ">our staff speaks fluent English and Chinese nothing will be lost in translations</p>
        </div>
      </div>
    </div>
  </li>
    <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square" src="/images/temple-street-night-food.jpg" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class="text-3xl font-bold tracking-normal text-gray-800 pb-0 mb-0 ">lots of restaurants near by</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800 ">Whether you want to explore asian delicacies or home sick and craving for your home town food, lots of restaurant to pick just around the corner</p>
        </div>
      </div>
    </div>
  </li>

    <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square" src="/images/shopping.jpg" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class="text-3xl font-bold tracking-normal text-gray-800 pb-0 mb-0 ">Shopping Malls</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800 ">Hong Kong is always known to be a shopping paradise, most brands have a retail outlet right here in Tsim Sha Tsui   </p>
        </div>
      </div>
    </div>
  </li>
    <li class="col-span-1 flex flex-col text-center bg-white">
    <div class=" relative">
      <div class=" inset-0  w-full">
        <img class=" w-full object-cover object-center aspect-square" src="/images/victoria-harbor.jpg" />
        <div class="flex flex-col flex-1 p-4 mx-auto">
          
          <h2 class=" tracking-normal text-gray-800 pb-0 mb-0 font-bold text-3xl">Attractions</h2>
          <p class="text-lg font-normal tracking-normal text-gray-800  ">is just a 10 mintue walk away</p>
        </div>
      </div>
    </div>
  </li>

</ul>
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