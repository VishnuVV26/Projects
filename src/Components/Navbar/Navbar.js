import React, { useState } from 'react'
import logo_image from '../../Components/Assets/logo.png'
import { Link } from 'react-router-dom';
import cart_image from '../../Components/Assets/cart_icon.png'
const Navbar = () => {

    const listItems=[
        {name:'Shop',path:'/'},
        {name:'Men',path:'/mens'},
        {name:'Women',path:'/womens'},
        {name:'Kids',path:'/kids'},
    ];
    const [menu,setMenu]=useState("");

const count=0;

  return (
    <header className='bg-gray-200'>
    <div className='py-2 px-2 md:px-6 flex '>
        <div className='py-2 px-4 md:px-8 md:flex gap-1'>
            <img src={logo_image} alt='' className='w-14 h-12 md:w-32 md:h-28'/>
            <h1 className='mt-2 md:mt-8 font-serif text-xs md:text-xl'>VShopeee</h1>
        </div>
        
    <div className='py-6 px-2 md:px-16 flex flex-wrap '>
                <input type='text' placeholder='Search for Products' className='w-16 h-4 text-xs md:text:xl md:w-96 md:h-10 border-2 border-slate-500 pl-2 rounded-xl'/>
                <button className='bg-blue-500 text-white md:px-2 md:py-2 w-12 h-4 text-xs md:w-14 md:h-10 rounded-xl'>Search</button>
            </div>
            <div className='flex'>
            <div className='flex mt-3 md:flex-col-1'>
    <ul className='hidden md:flex gap-2 px-1 py-2 md:gap-20 md:px-24'>
{listItems.map((items,index)=>(
    <li onClick={()=>{setMenu(items.name)}} key={index}><Link to={items.path} >
    {items.name} {menu===items.name?<hr className='w-7 h-1 border-none rounded-xl  bg-red-500'/>:<></> } </Link></li>
))}
    </ul>
    </div>
<div className='mt-8 px-8'>
   <Link to='/login'> <button className='bg-black w-20 h-12 rounded-xl text-white hover:bg-red-500'>Login</button></Link>

</div>       
</div>
<div className='py-8 px-12'>
    <img src={cart_image} alt=''/>
    <div className='bg-red-500 text-white w-5 h-3 md:w-5 md:h-5 flex justify-center items-center -mt-6 md:-mt-12 text-sm rounded-lg '>{count}</div>
</div>

    </div>
    </header>
  )
}

export default Navbar