import React from 'react';
import footer_image from '../Assets/logo_big.png';
import instagram_image from '../Assets/instagram_icon.png';
import pinterest_image from '../Assets/pintester_icon.png';
import whatsapp_image from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const footerImages = [
    { icon: instagram_image, alt: 'instagram' },
    { icon: pinterest_image, alt: 'pinterest' },
    { icon: whatsapp_image, alt: 'whatsapp' },
  ];

  const footerItems = [
    'Company',
    'Offices',
    'Products',
    'About',
    'Contact Us',
  ];

  return (
    <footer className='bg-gray-100 py-8 px-4 md:px-10'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-6'>
        <div className='flex items-center mb-4 md:mb-0'>
          <img src={footer_image} alt='' className='w-12 mr-2 md:mr-4' />
          <p className='text-xl font-semibold'>Vshopeee</p>
        </div>
        <ul className='flex flex-wrap justify-center md:justify-end list-none gap-5 text-gray-700'>
          {footerItems.map((item, index) => (
            <li
              key={index}
              className='cursor-pointer hover:scale-105  hover:text-red-500 duration-75'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center mb-6'>
        <div className='flex gap-4'>
          {footerImages.map((image, index) => (
            <img
              key={index}
              src={image.icon}
              alt={image.alt}
              className='w-6 hover:scale-105 duration-75 cursor-pointer'
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center gap-5 w-full font-sans text-gray-900'>
        <hr className='w-3/4 md:w-1/2 h-1 bg-gray-200' />
        <p>Copyright @ 2024 - All Right Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
