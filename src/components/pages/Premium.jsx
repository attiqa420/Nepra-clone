import React from 'react'
import PriceForm from './PriceForm'

function Premium() {
  return (
   <>
    <div className='pt-28 px-20 py-20 grid grid-cols-2 gap-6'>
        <div>
<h1 className='font-bold text-2xl pb-4'>What’s Included in the Premium Service?</h1>
<h2 className='font-semibold text-lg pb-2'>Bespoke Compliance Support</h2>
<p className='text-base text-gray-800 pb-3'>Our expert NEPRA compliance consultant will meet with your team once a month to assess your organization's current compliance status.</p>
<h2 className='font-semibold text-lg pb-2'>Recommendations to Improve Compliance</h2>
<p className='text-base text-gray-800 pb-3'>You’ll receive detailed recommendations tailored to your specific needs, including optional services to improve your cybersecurity posture.</p>
<h2 className='font-semibold text-lg pb-2'>Artifact Creation for NEPRA Audits</h2>
<p className='text-base text-gray-800 pb-3'>We’ll help you create essential artifacts and documentation that can be presented to NEPRA auditors, ensuring transparency and readiness during evaluations.</p>
<h1 className='font-bold text-2xl pb-4'>How You Benefit:</h1>
    <ul>
        <li className='text-base text-gray-800 pb-3'>Get a clear understanding of your compliance status.</li>
        <li  className='text-base text-gray-800 pb-3'>Develop confidence in presenting compliance evidence to NEPRA auditors.</li>
        <li  className='text-base text-gray-800 pb-3'>Begin improving your security policies and controls with actionable insights.</li>
    </ul>

        </div>
        <div>
               <PriceForm />
        </div>
    </div>
    </>
  )
}

export default Premium
