import React from 'react';
import exp from './exp.png';
import mongo from './mongo.png';
import nodee from './nodee.png';
import { useState , useEffect } from 'react';
function Slideshow() {
    const images = ['exp.png', 'mongo.png', 'nodee.png'];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
      <div className="relative">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-full h-full object-cover ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000`}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }

export default Slideshow
