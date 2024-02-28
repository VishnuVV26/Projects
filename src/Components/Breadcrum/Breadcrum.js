import React from 'react'
import arrow_icon from '../../Components/Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='flex text-[10px] my-1 md:text-xl md:my-2 md:font-semibold'>
Home <img src={arrow_icon} alt='' className='h-2 md:h-5 md:mx-1 my-1'/>Shop <img src={arrow_icon} alt=''className='h-2 md:h-5 md:mx-1 my-1'/>{product.category} <img src={arrow_icon} alt='' className='h-2 md:h-5 md:mx-1 my-1'/>{product.name}
    </div>
  )
}

export default Breadcrum