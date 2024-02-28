import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_image from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <img src={props.banner} alt='' className='w-full' />
      <div className='flex justify-between items-center mt-4'>
        <p className='font-semibold'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-2 px-4 rounded-full bg-white border border-black flex items-center font-sans text-sm sm:text-base'>
          Sort by <img src={dropdown_image} alt='' className='pl-1' />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 '>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center my-8'>
        <button className='py-3 px-8 rounded-full bg-red-400 text-white text-lg font-semibold'>Explore more</button>
      </div>
    </div>
  );
}

export default ShopCategory;
