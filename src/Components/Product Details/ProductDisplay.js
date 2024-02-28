
import React from 'react';
import starIcon from '../../Components/Assets/star_icon.png';
import starDullIcon from '../../Components/Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
    // Render star ratings
    const renderStarRating = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<img key={i} src={i < product.rating ? starIcon : starDullIcon} alt="star" className="w-4 md:w-auto md:h-auto h-4" />);
        }
        return (
            <div className='flex md:gap-1 md:my-4'>
                {stars}
                <p className='font-semibold text-slate-800'>(122)</p>
            </div>
        );
    };

    // Render product size selection
    const renderSizeSelection = () => {
        const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
        return (
            <div className='my-8'>
                <h1 className='md:text-xl font-bold text-slate-900 '>Select Size</h1>
                <div className='flex flex-col md:flex gap-3 md:gap-5 my-2 md:my-6'>
                    {sizes.map((size, index) => (
                        <div key={index} className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>{size}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='flex flex-col md:flex md:flex-row md:my-12'>
            <div className='md:flex md:gap-12 pl-5 md:pl-10 md:w-full'>
                <div className='flex flex-row md:flex md:flex-col gap-2 md:gap-3'>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={product.image} alt='' className='h-16 md:h-44' />
                    ))}
                </div>
                <div className='my-3 md:mx-8 md:my-0'>
                    <img src={product.image} alt='' className='h-60 md:h-4/5' />
                </div>
            </div>
            <div className=' ml-2 md:ml-0 md:mx-20 font-serif'>
                <h1 className='text-xs md:text-5xl font-semibold text-slate-700'>
                    {product.name}
                </h1>
                {renderStarRating()}
                <div className=' text-xs md:my-5 md:text-xl'>
                    <div className='line-through font-medium'>
                        ${product.old_price}
                    </div>
                    <div className='text-xs md:text-xl font-medium'>
                        ${product.new_price}
                    </div>
                </div>
                <div className='my-2 md:my-5 font-normal text-xs md:text-xl text-slate-900'>
                    {product.description}
                </div>
                {renderSizeSelection()}
                <button className='bg-red-600 w-36 h-14 text-white cursor-pointer hover:bg-black my-0 md:my-6'>Add to Cart</button>
                <p className='my-3 text-slate-800'><span className='text-black font-medium px-1'>Category:</span>Women, T-shirt, Pants</p>
                <p className='my-3 text-slate-800'><span className='text-black font-medium px-1'>Tags:</span>Modern, Latest, Trends</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
