import React from 'react';

const Button = ({ text, icon: IconComponent, className }) => {
  return (
    <button
      className={`md:w-48 h-10 border text-gray-600 border-gray-600 px-3 md:px-6 flex justify-center items-center md:gap-6 gap-2 ${className}`}
    >
      {text}
      {IconComponent && <IconComponent className="icon" />}
    </button>
  );
};

export default Button;
  