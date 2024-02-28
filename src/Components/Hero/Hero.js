import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-b from-blue-300 to-pink-100 font-serif">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:px-16 lg:px-24">
        <h2 className="text-black text-lg md:text-2xl font-semibold mb-4">NEW ARRIVALS ONLY</h2>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-black text-3xl md:text-5xl font-bold mb-2">New</p>
            <p className="text-black text-3xl md:text-5xl font-bold mb-2">Collections</p>
            <p className="text-black text-3xl md:text-5xl font-bold mb-2">For everyone</p>
          </div>
          <img src={hand_icon} alt="" className="w-20 md:w-28" />
        </div>
        <button className="flex justify-center items-center gap-2 w-full md:w-auto md:max-w-xs h-12 md:h-16 rounded-full mt-7 bg-red-600 text-white text-lg font-medium px-4 md:px-8">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="" />
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={hero} alt="" className="w-full md:max-w-lg" />
      </div>
    </div>
  );
};

export default Hero;
