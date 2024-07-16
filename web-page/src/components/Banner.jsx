import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className=' bg-[coral] w-full py-16'>
        <div className=" font-bold py-24 max-w-[1000px] mx-auto text-center text-white">
            <div className=' text-2xl md:text-4xl text-black p-3 md:p-6'>
                Learn With Us
            </div>
            <h2 className=' text-4xl md:text-7xl p-4 md:p-6'>
                Grow with Us.
            </h2>
            <div className=' text-2xl md:text-5xl md:p-6'>
                Learn <ReactTyped className='px-2'
                    strings={['Web Development', 'MERN Stack Development', 'Mobile Development', 'Coding']}
                    typeSpeed={100}
                    backSpeed={60}
                    loop = {true}
                />
            </div>
            <button className="bg-blue-900 text-white p-3 rounded-md">Get Started</button>
        </div>
    </div>
  )
}
