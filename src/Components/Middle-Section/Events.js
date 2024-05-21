  import React from 'react';
  import image from '../../Assests/middle/11.png';
  import Button from '../Reuseable-Component/Button';
  import { FaArrowRight } from 'react-icons/fa';
  const Events = () => {
    // Object containing the image data
    const imageData = [
      { src: image },
      { src: image },
      { src: image },
    ];

    return (
      <div className="container mx-auto px-4 py-8 md:mb-28 mb-14">
        <div className="text-center ">
          <span className="block text-md text-blue-600" style={{ letterSpacing: '4px' }}>EVENTS</span>
          <h1 className="lg:text-4xl md:text-2xl text-xl font-medium my-5">What We Do?</h1>
        </div>

        {/* Responsive image grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 mt-4">
          {imageData.map((item, index) => (
            <div
              key={index}
              className="lg:w-1/4 md:w-1/3 w-40 "
            >
              {/* Displaying the image */}
              <img
                src={item.src}
                alt={`Event ${index + 1}`}
                className=" md:w-full  md:rounded-none rounded-lg  object-cover mb-4"
                
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button text="See More" icon={ FaArrowRight} onClick={() => console.log('Submitted')} />
        </div>
      </div>
    );
  };

  export default Events;
