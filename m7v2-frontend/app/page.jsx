
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

    <h5>end hero</h5>
    <Teaser/>
    <div>
    </div>

    <section className='px-16 py-y bg-blue-500'>
            {/* contact */}
            <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-2 gap-10' >
            <ContactForm />
            </div>
</section>





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