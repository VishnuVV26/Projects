import React from 'react';

const NewsLetter = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto flex flex-col justify-center items-center py-8 px-4 md:px-8 mb-24 md:mb-40 bg-gradient-to-b from-pink-200 to-pink-100'>
      <h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 md:mb-6'>
        Get Exclusive Offers on Your Email
      </h1>
      <p className='text-gray-800 text-lg md:text-xl text-center mb-4 md:mb-6'>
        Subscribe to our newsletter and stay updated
      </p>
      <div className='flex flex-col md:flex-row items-stretch md:items-center bg-transparent w-full max-w-4xl md:w-[730px] h-[70px] md:h-[80px] rounded-full border border-black'>
        <input
          type='email'
          placeholder='Your Email Id'
          className='flex-grow px-4 md:px-6 py-2 md:py-3 rounded-xl outline-none text-gray-700 font-sans text-lg bg-transparent '
        />
        <button className='w-full md:w-[150px] h-full md:h-[70px] rounded-full md:rounded-[80px] bg-black text-white text-lg md:text-xl cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
