import React from 'react'
import arrow_icon from '../../Components/Assets/breadcrum_arrow.png'
import Product from '../../Pages/Product'
const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='flex'>
HOME <img src={arrow_icon} alt=''/>Shop <img src={arrow_icon} alt=''/>{product.category} <img src={arrow_icon} alt=''/>{product.name}
    </div>
  )
}

export default Breadcrum