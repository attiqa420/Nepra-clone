import React, { useState } from 'react'
import { RiCheckDoubleFill } from "react-icons/ri";

function ServiceSection({items}) {

  const[setItem, setSelectedItem] = useState(items[0]);

  const handleClick = (item) =>{
         setSelectedItem(item) 
  }
    
  return (

    <div className='px-4 lg:px-20 lg:py-20 pt-7  flex flex-col lg:flex-row justify-center items-center bg-white '>
       <div className='lg:w-1/2 space-y-4  max-w-lg'>
     
        {items.map((item) => (
        
            <div key={item.id}>
         
             <button
             key={item.id}
              onClick={() => handleClick(item)}
              className=' px-2 py-2 w-full text-base font-semibold flex items-center gap-1 bg-amber-50 text-blue-700 hover:bg-gradient-to-l from-blue-950 to-blue-800 hover:text-white shadow-xl shadow-blue-100'>
              <RiCheckDoubleFill className='text-xl font-bold' />{item.title}</button>
          
            </div>
           
             ))} </div>
            
             <div className='lg:w-1/2 lg:px-6 max-w-lg pt-7 pb-7'>
            <h1 className='font-semibold text-lg text-gray-800 pb-2'>{setItem.title}</h1> 
<p className='text-gray-900'>
{setItem.detail}
</p>
</div>
    </div>
  )
}

export default ServiceSection
