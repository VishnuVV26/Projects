import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div class='w-[200px] hover:scale-105 duration-75 mb-4 md:mb-8'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p class='my-[6px] mx-0 '>{props.name}</p>
            <div class='flex gap-5'>
                <div class='text-black text-lg font-medium'>    
                    ${props.new_price}
                </div>
                <div class='text-black text-lg font-medium line-through '>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item