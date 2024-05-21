import React from 'react';
import logo from '../../Assests/Top/logo.png';
import Social from '../../Assests/Footer/Social.png';

const Footer = () => {
  const Links = [
    { Name: 'About Us', link: '/' },
    { Name: 'Sponsers', link: '/events' },
    { Name: 'By Laws', link: '/about' },
    { Name: 'Sitemap', link: '/elinity' },
    { Name: 'Verify Certificate', link: '/elinity' },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
       
      <div className="mb-6">
        <img src={logo} alt='logo' />
      </div>  
      <div>
      <ul className="flex flex-wrap justify-center md:justify-start">
  {Links.map((link, index) => (
    <li key={index} className="md:ml-8 md:my-0 my-2">
      <a
        href={link.link}
        className="text-gray-800 hover:bg-blue-100 hover:text-blue-500 px-2 py-1 rounded-md transition-colors duration-300"
      >
        {link.Name}
      </a>
    </li>
  ))} 
</ul>

      </div>
      <div className="my-6">
        <img src={Social} alt='logo' />
      </div>
      <span className='text-center text-xs mb-10'>
      © Copyright 2024, All Rights Reserved by Aridian Array
      </span>
    </div>
  );
};

export default Footer;
