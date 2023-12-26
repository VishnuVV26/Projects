import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const url='https://fakestoreapi.com/products';
const[datalist,setDatalist]=useState([]);

useEffect(()=>{
    axios.get(url).then((res)=>{
        setDatalist(res.data);
        console.log(res.data.data);
    })
},[])

  return (
    <div>
        {datalist.map((n,i)=>(
            <li key={i}>{n.id}
            {n.rank}</li>
        ))}

    </div>
  )
}

export default Data