import React from 'react';
import Button from '../Reuseable-Component/Button';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  const content = [
    {
      heading: 'Our Vision',
      description: 'Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University, striving to innovate and achieve its goals.',
    },
    {
      heading: 'Our Mission',
      description: 'Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University, striving to innovate and achieve its goals.',
    },
  ];

  return (
    <div className='md:mb-28 mb-14 mt-7 ' >
      <div className='text-center '>
        <span className=' text-blue-600   ' style={{ letterSpacing: '3px' }}>ABOUT US</span>
        <h1 className='lg:text-4xl md:text-2xl text-3xl  font-medium md:leading-[38px] lg:my-5 my-3'>
          What is Aridian Array Software 
          Society?
        </h1>
        <p className='text-center   lg:text-xl md:text-xs text-slate-500 '>
        The Aridian Array is a passionate community of learners, creators, and leaders from PMAS Arid Agriculture University, striving to ignite innovation and build a better future.
        </p>
      </div>

      
      <div className='w-full h-auto py-4'>
        
        <div className='md:flex  px-4 gap-4  '>
          {content.map((item, index) => (
            <div key={index} className='md:w-1/2  mb-5 px-1 bg-blue-100 w-full'>
              <h4 className=' font-medium text-lg leading-[26.4px] text-center md:text-left'>{item.heading || item.Name}</h4>
              <p className='lg:text-md md:text-xs text-slate-500 text-center md:text-left'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button text="Read More" icon={ FaArrowRight} onClick={() => console.log('Submitted')} />
      </div>
    </div>
  );
};

export default About;
