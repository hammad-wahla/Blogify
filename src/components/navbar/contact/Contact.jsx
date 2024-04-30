import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-[584px]" >
      <div className="flex justify-between">
        <div className='ml-48 mr-32 mt-20'>
          <Image src="/contact.png" width={600} height={700} />
        </div>
        <div className='w-[800px] mr-32 mt-20'>
          <form action="">
            <input className='w-[600px] bg-slate-800 mb-3 p-4 rounded' type="text" name="" id="" placeholder='Full Name' />
            <input className='w-[600px] bg-slate-800 mb-3 p-4 rounded' type="text" name="" id="" placeholder='Email Address' />
            <input className='w-[600px] bg-slate-800 mb-3 p-4 rounded' type="text" name="" id="" placeholder='Phone Number (optional)' />
            <textarea className='w-[600px] bg-slate-800 mb-2 p-4 rounded' name="" id="" cols="30" rows="7" placeholder='Message'></textarea>
            <button className='w-[600px] bg-blue-700 p-2  font-bold rounded'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
