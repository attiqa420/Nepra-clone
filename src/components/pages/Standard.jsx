import React from 'react'
import PriceForm from './PriceForm'

function Standard() {
  return (
  <>
    <div className='pt-28 px-4 lg:px-20 py-20 grid grid-cols-2 gap-6'>
        <div className='lg:col-span-1 col-span-2'>
<h1 className='font-bold text-2xl pb-4'>What’s Included in the Standard Service?</h1>
<h2 className='font-semibold text-lg pb-2'>Weekly Compliance Sessions</h2>
<p className='text-base text-gray-800 pb-3'>Our NEPRA compliance consultant will meet with your team four times a month to review progress, address challenges, and guide you toward compliance.</p>
<h2 className='font-semibold text-lg pb-2'>Detailed Compliance Roadmaps</h2>
<p className='text-base text-gray-800 pb-3'>Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks.</p>
<h2 className='font-semibold text-lg pb-2'>Artifact Creation for NEPRA Audits</h2>
<p className='text-base text-gray-800 pb-3'>We’ll help you create essential artifacts and documentation that can be presented to NEPRA auditors, ensuring transparency and readiness during evaluations.</p>
<h1 className='font-bold text-2xl pb-4'>How You Benefit:</h1>
    <ul>
        <li className='text-base text-gray-800 pb-3'>Get a clear understanding of your compliance status.</li>
        <li  className='text-base text-gray-800 pb-3'>Develop confidence in presenting compliance evidence to NEPRA auditors.</li>
        <li  className='text-base text-gray-800 pb-3'>Begin improving your security policies and controls with actionable insights.</li>
    </ul>

        </div>
        <div className='lg:col-span-1 col-span-2'>
               <PriceForm />
        </div>
    </div>
    </>
  )
}

export default Standard
