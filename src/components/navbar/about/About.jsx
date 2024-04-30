import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className="min-h-[584px]" >
      <div className="flex justify-between">
        <div className="mt-20 ml-40" >
          <h2 className='text-blue-700 mb-8 font-bold ' >About Agency</h2>
          <h1 className="text-[300%] leading-[60px] mb-10 font-bold  " >We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className='leading-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta pariatur consectetur, non eaque, illo nesciunt nemoNobis soluta pariatur consectetur, non eaque, illo nesciunt nemoNobis soluta pariatur consectetur, non eaque, illo nesciunt nemo </p>
          <div className='flex justify-around ml-[-40px] mt-8'>
            <div>
              <h1 className='font-extrabold text-blue-700 text-2xl'>10 K+</h1>
              <h4>Year of experience</h4>
            </div>
            <div>
              <h1 className='font-extrabold text-blue-700 text-2xl'>10 K+</h1>
              <h4>Year of experience</h4>
            </div>
            <div>
              <h1 className='font-extrabold text-blue-700 text-2xl'>10 K+</h1>
              <h4>Year of experience</h4>
            </div>
          </div>

        </div>
        <div className=" ml-20 mr-56  mt-20">
          <Image src="/about.png" alt='' width={1300} height={1400} />
        </div>
      </div>
    </div>
  )
}
