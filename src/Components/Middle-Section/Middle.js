import React from 'react'
import About from './About'
import Events from './Events'
import Testimonials from './Testimonials'
import Partners from './Partners'
import ContactForm from './ContactForm'
import Fact from './Fact'
import NewsLetter from './NewsLetter'
import FAQs from './FAQs'


const Middle = () => {
  return (
    // bg-gray-200
    <div className=' bg-indigo-50'>
      <div className='md:px-32 mx-4'>
        {/* <Carousel/> */}
        <Fact/>
    <About/>
    <Events/>
    <Testimonials/>
    <Partners/> 
    <FAQs/>
    <ContactForm/>
    <NewsLetter/>
    </div>
    </div>
  )
}

export default Middle