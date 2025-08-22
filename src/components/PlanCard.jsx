import React, { useState } from 'react'
import { useNavigate } from "react-router";

function PlanCard() {

  const [data, setData] = useState([
    { id: 1, name: "Basic", price: "$1k/per-month", path:"/pricing/basic" },
    { id: 2, name: "Standard", price: "$3k/per-month",  path:"/pricing/standard" },
    { id: 3, name: "Premium", price: "custom",  path:"/pricing/premium" },
]);
const navigate = useNavigate();


  return (
    <>
      <div className="flex flex-col items-center">
      <h1 className='text-white font-bold text-2xl pb-2'>Choose a Plan</h1>

      <ul className='flex justify-center gap-x-5'>
        {data.map((item) => (

       <li key={item.id}>

      <div className='bg-white w-40 h-36 justify-center flex flex-col items-center rounded-tl-lg'>
        <h1 className='font-semibold  text-2xl pb-2'>{item.name}</h1>
        <h3 className='text-gray-700 pb-1'>{item.price}</h3>
        <button onClick={() => navigate(item.path)} 
        className='bg-gradient-to-r from-blue-800 to-blue-950
         text-white rounded w-36 h-8'>Get Started</button>
      </div>
      
      </li>
       ))}
      </ul>
      </div>
    </>
  )
}

export default PlanCard
