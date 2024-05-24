import React from 'react'

const Fact = () => {
    const content = [
        {
          progess: '9',
          description: 'Industrial visits',
        },
        {
            progess: '81',
          description: 'Seminars Held',
        },
        {
            progess: '56',
            description: 'Courses offer',
          },
          {
            progess: '13',
            description: 'Workshop Conducted',
          },
      ];

  return (
    <div className='flex flex-col md:flex-row items-center justify-around bg-blue-600 mx-4 lg:mb-28 md:mb-14 mb-7 py-5'>
    <div className='text-center md:text-left mb-5 md:mb-0 md:ml-3 w-64 '>
        <h1 className='text-white lg:text-2xl md:text-base text-2xl md:w-auto font-Title'>Cultivating minds igniting Progress</h1>
    </div>
    <div className='md:flex md:flex-nowrap'>
        {content.map((item, index) => (
            <div key={index} className='mb-5 md:mb-0 px-4 md:w-automd:text-left'>
                <h4 className='md:text-xl lg:text-4xl leading-[26.4px] text-white  text-center '>{item.progess}</h4>
                <p className='lg:text-md md:text-xs text-white  text-center ' >{item.description}</p>
            </div>
        ))}
    </div>
</div>

  )
}

export default Fact