import React from 'react';
import image from '../../Assests/middle/Avatar group.png';
import Button from '../Reuseable-Component/Button';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className='mb-28'>  

       <div className="text-center mb-8 justify-center ">
       <img
                src={image}
                alt="Card image"
                className="  w-24 h-12  lg:w-32 lg:h-16    mb-4 mx-auto"
              />
         
        <h1 className="lg:text-2xl md:text-xl text-xl font-medium    ">
         Still have questions?
        </h1>
        <p className="mt-2 text-center lg:text-xl md:text-xs text-slate-500">
          Aridian Array is a passionate, dedicated, and leader-building.
        </p>
      </div>
      <div className="flex justify-center">
        <Button text="Get in touch" icon={ FaArrowRight} onClick={() => console.log('Submitted')} />
      </div>
    </div>
  )
}

export default ContactForm;