import React from 'react';


const NewsLetter = () => {
  return (
    <div className='md:flex justify-around items-center bg-blue-600 py-3 px-4 md:px-0  mb-32'>
      <div className='  text-center md:text-left ml-4'>
        <h1 className='text-white text-xl  mb-1 font-Title'>Newsletter</h1>
        <p className='text-white text-xs font-inter '>Be the first one know about the event and  activivty.</p>
      </div>

      <div class="mt-6 md:mt-0 lg:w-1/2 flex flex-col md:flex-row items-center md:bg-white md:mx-12 justify-around pr-2 ">
  <input type="text" placeholder="Enter your email" class="py-2 px-4 rounded-lg mb-4 md:mb-0 w-full md:w-auto bg-white focus:outline-none md:flex-1" />
  <button class="py-2 px-6 md:px-2 md:py-1 md:ml-4 md:bg-blue-600 md:text-white  bg-white text-blue-600 shadow-md hover:bg-blue-600 focus:outline-none lg:text-xl md:rounded-none rounded-lg">Submit</button>
</div>

    </div>
  );
};

export default NewsLetter;
