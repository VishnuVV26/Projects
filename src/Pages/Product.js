import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/Product Details/ProductDisplay';

const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((product)=>product.id===parseInt(productId));
  console.log(productId);
  console.log(all_product);

  return (
    <div>
<Breadcrum product={product}/>
<ProductDisplay product={product}/>
    </div>
  )
}

export default Product