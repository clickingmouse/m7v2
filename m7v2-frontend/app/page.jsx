
import Link from 'next/link'

import Hero from './components/hero/Hero'
import ContactForm from './components/form/ContactForm'
import Teaser from './components/teaser/teaser'
/* landing page?*/
export default function Home() {
  return (
  <>    
  <div>

    <Hero />



    {/*<h5>end hero</h5>*/}  
    <section className='px-10 py-y bg-white'>          
    <div className='font-bold mt-4 pb-2 border-b border-gray-200'>
      <p>
      Introducing Majestic 7 Guesthouse, your haven in the heart of Tsim Sha Tsui, Hong Kong. Our guesthouse offers a truly unforgettable experience for travelers seeking comfort, convenience, and a touch of luxury. Nestled amidst the vibrant cityscape, Majestic 7 Guesthouse boasts elegantly designed rooms, equipped with modern amenities to cater to your every need. Whether you're here for business or leisure, our prime location grants you easy access to renowned attractions, shopping districts, and delectable dining options. With our exceptional service and attention to detail, we strive to create a memorable stay that exceeds your expectations. Discover the perfect blend of comfort and sophistication at Majestic 7 Guesthouse, where your satisfaction is our top priority.
      </p>
    </div>
    </section>

    <Teaser/>








{/*  end content wrapper*/}

   
</div>
  </>
  )
}

// sections
// hero banner
// rooms 
// gettinHere
// Around Us
// app guide
//contact
{/* <section className='px-16 py-y bg-blue-500'>
{/* contact }
<div className='mt-8 grid md:grid-cols-2 lg:grid-cols-2 gap-10' >
<ContactForm />
</div>
</section> */}