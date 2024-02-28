import React from 'react'
import new_collection from '../Assets/new_collections.js'
import Item from '../Item/Item.js'
const NewCollection = () => {
  return (
    <div class="mt-10 md:mt-20 lg:mt-32 flex flex-col items-center gap-5 md:gap-8 mb-10 md:mb-20 lg:mb-32 font-serif text-slate-700">
        <h2 class=" text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-700">NEW COLLECTIONS</h2>
        <hr class="w-24 md:w-32 lg:w-48 h-[6px] rounded-[10px] bg-darkgray my-2 md:my-4 lg:my-6"/>
        <div class='grid grid-cols-1 md:grid lg:grid-cols-4 mt-[50px] gap-4 md:gap-6 lg:gap-8'>
{new_collection.map((item,i)=>{
    return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
})}
        </div>
    </div>
  )
}

export default NewCollection