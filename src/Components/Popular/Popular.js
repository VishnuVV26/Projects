import React from 'react';
import Item from '../Item/Item';
import product_data from '../Assets/data';

const Popular = () => {
  return (
    <div className="mt-4 md:mt-8 lg:mt-12 flex flex-col items-center gap-4 md:gap-8 h-auto md:h-[90vh] font-serif">
      <h1 className="text-slate-700 text-2xl md:text-4xl lg:text-5xl font-semibold">POPULAR FOR WOMEN</h1>
      <hr className="w-16 md:w-32 h-1 md:h-2 bg-darkgray rounded-full" />

      <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-8">
        {product_data.map((item, i) => (
          <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
