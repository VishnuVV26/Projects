import React from 'react'
import star_icon from '../../Components/Assets/star_icon.png'
import stardull_icon from '../../Components/Assets/star_dull_icon.png'
const ProductDisplay = ({ product }) => {
    return (
        <div className='flex my-12'>
            <div className='flex gap-12 px-6'>
                <div className='flex flex-col gap-3'>
                    <img src={product.image} alt='' className='h-32'/>
                    <img src={product.image} alt='' className='h-32' />
                    <img src={product.image} alt='' className='h-32' />
                    <img src={product.image} alt='' className='h-32' />
                </div>
                <div className=''>
                    <img src={product.image} alt=''className='w-full' />
                </div>
            </div>
            <div className='mx-20'>
                <h1 className='text-2xl font-semibold text-slate-700'>
                    {product.name}
                </h1>
                <div className='flex gap-1 my-2'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={stardull_icon} alt='' />
                    <p className='font-semibold text-slate-800'>(122)</p>
                </div>
                <div className='my-5'>
                    <div className='line-through font-medium'>
                        ${product.old_price}
                    </div>
                    <div className='text-xl font-medium'>
                        ${product.new_price}
                    </div>
                    <div className='my-3 font-normal text-slate-900'>
                    Looking for a sweatshirt that keeps you warm and dry all day? Look no further than this rain defender loose-fit heavyweight sweatshirt. This 100% cotton sweatshirt is perfect for those cold, rainy days.
                    </div>
                    <div className='my-4'>
                        <h1 className='text-xl font-bold text-slate-900 '>Select Size</h1>
                        <div className='flex gap-5 my-2'>
                            <div className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>S</div>
                            <div className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>M</div>
                            <div className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>L</div>
                            <div className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>XL</div>
                            <div className='border-2 w-14 text-center text-xl font-medium text-slate-700 cursor-pointer'>XXL</div>
                        </div>
                    </div>
                    <button className='bg-red-600 w-36 h-14 text-white cursor-pointer hover:bg-black'>Add to Cart</button>
                    <p className='my-3 text-slate-800'><span className='text-black font-medium px-1'>Category:</span>Women, T-shirt, Pants</p>
                    <p className='my-3 text-slate-800'><span className='text-black font-medium px-1'>Tags:</span>Modern, Latest, Trends</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay