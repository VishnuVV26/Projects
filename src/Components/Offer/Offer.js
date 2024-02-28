import React from 'react';
import Exclusive_image from '../Assets/exclusive_image.png';

const Offer = () => {
  return (
    <div className="w-full max-w-screen-xl
     flex flex-col md:flex-row items-center justify-center h-[60vh] mx-auto py-8 px-4 md:px-10 lg:px-20 mb-16 md:mb-32 bg-gradient-to-b from-pink-100 to-green-100">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">Exclusive</h1>
        <h1 className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">Offers For You</h1>
        <p className="text-gray-700 text-lg md:text-xl font-semibold mb-4">Only on Best Sellers Products</p>
        <button className="w-full md:w-auto px-8 py-3 md:px-12 md:py-4 rounded-full bg-red-500 text-white text-lg font-medium">Check Now</button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end pt-8 md:pt-0">
        <img src={Exclusive_image} alt="Exclusive Offer" className="max-w-full h-60 md:h-96" />
      </div>
    </div>
  );
};

export default Offer;
