import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Footer({items}) {
  return (
    <>
    <div className='bg-blue-950 text-white w-full flex flex-col pt-10 pb-4 px-20'>
        <div className='flex flex-row'>
        <div className='w-1/2'> 
            <img 
          src="https://nepra.spsnet.com/assets/images/logo-white.png" 
          alt="Software Productivity Strategists, Inc. logo" 
          className='w-96'
        />
        <p className='text-center font-sans text-sm w-96 pt-6'>
            Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered industry solutions. With expertise across design, development, security, and operations, we build scalable, secure, and reliable systems. Our award-winning team includes IBM-certified inventors and global competition champions.
        </p>
    </div>

     <div className='w-1/2'>
     <h1 className='font-semibold text-xl pb-4 '>Services</h1>
     {items.map((item) => (

    
     <div key={item.id}>

    <button className='flex items-center w-full hover:text-blue-600 text-base font-serif font-extralight'>
     <IoMdArrowDropright className=' w-8 h-6' />  {item.title}
    </button>
     </div>
      ))}
      </div>
      </div>
     
    </div>
     <div className='p-3 flex w-full  border-t border-white bg-blue-950 text-white justify-center text-center'>
        <h1 > Made by Attiqa Jabeen</h1>
      </div>
      </>
  )
}

export default Footer
