import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import image from '../../Assests/middle/testimonails.png'
import Button from '../Reuseable-Component/Button';
import { FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const content = [
    {
      img: image,
      description:
        'Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University, striving to innovate and achieve its goals.',
    },
    {
      img: image,
      description:
        'Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University, striving to innovate and achieve its goals.',
    },
    {
      img: image,
      description:
        'Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University, striving to innovate and achieve its goals.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8  md:mb-28 mb-14">
      <div className="text-center ">
        <span className="block text-md text-blue-600 font-inter"  style={{ letterSpacing: '3px' }}>TESTIMONIALS</span>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-medium  my-4 font-Title">
          What do our students say about us?
        </h1>
        <p className="my-2 text-center lg:text-xl md:text-sm text-slate-500 font-inter">
          Aridian Array is a passionate, dedicated, and leader-building organization in PMAS Arid Agriculture University.
        </p>
      </div>

      <div className="flex flex-wrap justify-center  xl:gap-1">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center p-4 mb-8" 
          >
            <img
              src={item.img}
              alt="Testimonial"
              className="md:w-32 w-32 h-auto mb-4"
            />

            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <FaStar className="text-blue-600" />
                <FaStar className="text-blue-600" />
                <FaStar className="text-blue-600" />
                <FaRegStar className="text-gray-300" />
                <FaRegStar className="text-gray-300" />
              </div>

              <p className="text-gray-700 text-sm font-inter">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="Read More" icon={ FaArrowRight} onClick={() => console.log('Submitted')} />
      </div>
    </div>
  );
};

export default Testimonials;
