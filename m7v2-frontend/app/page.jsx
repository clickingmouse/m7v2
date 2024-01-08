
import Link from 'next/link'

import Hero from './components/hero/Hero'

/* landing page?*/
export default function Home() {
  return (

<>    
<Hero />
<section className='text-gray-600 font-body'>
<div> {/* content wrapper*/}



<div>  {/* section*/}
<section className='px-16 py-y bg-gray-500'>

          <div>
            <h4 className='font-bold mt-4 pb-2 border-b border-gray-200'>What we offer</h4>
            <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10' >
              {/* cards go here*/}

              <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>affordable </span>
                    <span className='block text-gray-500 text-sm'> card text</span>
                  </div>
              </div>
              <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>city center</span>
                    <span className='block text-gray-500 text-sm'> card text</span>
                  </div>
              </div>
              <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>mulitlingual</span>
                    <span className='block text-gray-500 text-sm'> card text</span>
                  </div>
                  </div>

                  <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>restaurants</span>
                    <span className='block text-gray-500 text-sm'> card text</span>
                  </div>
              </div>

              <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>shopping</span>
                    <span className='block text-gray-500 text-sm'> card text</span>
                  </div>
              </div>
              <div className='card' >
                <img src="/images/rooms-placeholder.jpeg" alt ="" className='w-full h-32 sm:h-48 object-cover'/>
                  <div className='m-4'>
                    <span className='font-bold'>Free Wifi</span>
                    <span className='block text-gray-500 text-sm'> card text</span>
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
          <section>    
            {/* contact */}
            <h3>Contact Us Now</h3>
</section>

</div>
</div>{/*  end content wrapper*/}

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h2>About US</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

      <div className="flex justify-center my-8">
        <Link href="/">
          <button className="btn-primary">Home</button>
        </Link>
      </div>

      <h2>Our Rooms</h2>

      <div className="card">
        <h3>Single</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>Twin</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
    </section>
   

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