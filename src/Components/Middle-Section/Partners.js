import React from 'react';
import image1 from '../../Assests/middle/1.png';
import image2 from '../../Assests/middle/2.png';
import image3 from '../../Assests/middle/3.png';
import image4 from '../../Assests/middle/4.png';

const Partners = () => {
  const Sponsors = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
  ];

  return (
    <div className='md:mb-28 mb-14  bg-white '>
      <div className='text-center '>
        <span className=' text-blue-600 font-inter' style={{ letterSpacing: '3px' }}>PARTNERS</span>
        <h1 className='lg:text-4xl md:text-2xl text-xl font-medium my-8 font-Title '>Powered By</h1>
        <p className='text-center lg:text-xl md:text-xs text-slate-500 mx-2 font-inter'>
          Aridian Array is a passionate, dedicated, and leader.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-4 p-4">
  {Sponsors.map((item, index) => (
    <div
      key={index}
      className=" overflow-hidden flex flex-col items-center p-4 w-1/3   md:w-1/4 lg:w-1/5 xl:w-1/5"
    >
      {/* rounded-lg shadow-lg  */}
      <img
        src={item.img}
        alt="sponser"
        className="md:w-3/4 lg:w-full h-auto object-cover"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Partners;
