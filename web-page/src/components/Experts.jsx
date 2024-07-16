import React from 'react'
import laptop from "../assets/laptop.jpg"

export default function Experts() {
  return (
    <div className='max-w-[1200px] mx-auto p-3 my-10 md:grid grid-cols-2'>
        <div className=" col-span-1 md:w-[80%]">
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className=" col-span-1 flex flex-col justify-center">
            <h1 className=' text-cyan-500 my-2 font-bold text-xl'>LEARN FROM EXPERTS</h1>
            <p className=' my-2 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo exercitationem quibusdam reiciendis laudantium vitae veritatis eligendi. Saepe iste ipsam, numquam, consectetur suscipit culpa rem fugit hic vitae minus eaque!
            </p>
            <button className=" w-[28%] bg-blue-900 my-2 text-white p-3 rounded-md">Get Started</button>
        </div>
    </div>
  )
}
