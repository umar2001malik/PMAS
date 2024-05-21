import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons from react-icons
import Image1 from '../../../Assests/Top/slider1.jpg';
import Image2 from '../../../Assests/Top/slider2.png';
import Image3 from '../../../Assests/Top/slider1.jpg';
import Image4 from '../../../Assests/Top/slider2.png';
import Image5 from '../../../Assests/Top/slider1.jpg';
import Image6 from '../../../Assests/Top/slider2.png';
import Button from '../../Reuseable-Component/Button';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(1); // Default to 1 for mobile

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  useEffect(() => {
    const handleResize = () => {
      // Determine number of visible slides based on screen width
      if (window.innerWidth <= 426) {
        setNumVisibleSlides(1); // Display 1 image for small screens (e.g., mobile)
      } else if (window.innerWidth < 768) {
        setNumVisibleSlides(1); // Display 2 images for medium screens (e.g., tablets)
      }
       else {
        setNumVisibleSlides(3); // Display 3 images for large screens (e.g., laptops and desktops)
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - numVisibleSlides : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - numVisibleSlides ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="flex overflow-hidden">
          {images.slice(currentSlide, currentSlide + numVisibleSlides).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto max-w-full max-h-full mx-2 ${numVisibleSlides === 1 ? '' : 'flex-1'}`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-1 py-1 rounded-full shadow-md"
        >
          <FiChevronLeft color="blue" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 px-1 py-1 rounded-full shadow-md"
        >
          <FiChevronRight color="blue" size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-8  ">
        <Button className="bg-blue-700"  text="Primary Action" onClick={() => console.log('Submitted')} />
      </div>
    </div>
  );
};

export default Slider;
