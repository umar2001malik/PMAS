import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../../../Assests/Top/logo.png';

const Links = [
  { Name: 'Home ', link: '/' },
  { Name: 'Events', link: '/events' },
  { Name: 'About', link: '/about' },
  { Name: 'Elinity', link: '/elinity' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="shadow-sm w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 pl-4 md:mx-20 relative">
        <div className="font-bold text-2xl cursor-pointer items-center font-poppins text-gray-800">
          <img src={logo}/>
        </div>
        <div className="absolute top-4 right-4 md:hidden">
          <button onClick={toggleMenu}>
            <FiMenu className="w-8 h-8 text-gray-800" />
          </button>
        </div>
        <ul className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 lg:text-xl  md:text-xs text-xl  md:my-0 my-7 font-inter">
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
    </div>
  );
};

export default Navbar;
 