import React from 'react'
import first from '../assets/single.png'
import second from '../assets/double.png'
import third from '../assets/triple.png'

export default function Plans() {
  return (
    <div className=' py-24'>
        <div className="max-w-[1200px] mx-auto md:grid grid-cols-3 p-5 gap-8">
            <div className='col-span-1 shadow-2xl h-[500px] hover:scale-105 duration-500 my-3 flex flex-col items-center'>
                <img src={first} alt="first image" className=' w-28 p-2 ' />
                <h2 className="text-2xl font-bold py-2">MERN Stack Development</h2>
                <h1 className="text-5xl py-4 font-bold">$59</h1>
                <span>Lorem ipsum sample Text</span>
                <p className='text-center w-[80%] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed, pariatur, aliquam explicabo praesentium sint dolorum.</p>
                <button className=" w-[60%] bg-blue-900 my-2 text-white py-3 rounded-md font-bold">Start Trial</button>
            </div>
            <div className='col-span-1 shadow-2xl h-[500px] hover:scale-105 duration-500 my-3 flex flex-col items-center bg-gray-100'>
                <img src={second} alt="second image" className=' w-28 p-2 ' />
                <h2 className="text-2xl font-bold py-2">MERN Stack Development</h2>
                <h1 className="text-5xl py-4 font-bold">$59</h1>
                <span>Lorem ipsum sample Text</span>
                <p className='text-center w-[80%] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed, pariatur, aliquam explicabo praesentium sint dolorum.</p>
                <button className=" w-[60%] bg-green-400 my-2 text-blue-900 py-3 rounded-md font-bold">Start Trial</button>
            </div>
            <div className='col-span-1 shadow-2xl h-[500px] hover:scale-105 duration-500 my-3 flex flex-col items-center'>
                <img src={third} alt="third image" className=' w-28 p-2 ' />
                <h2 className="text-2xl font-bold py-2">MERN Stack Development</h2>
                <h1 className="text-5xl py-4 font-bold">$59</h1>
                <span>Lorem ipsum sample Text</span>
                <p className='text-center w-[80%] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed, pariatur, aliquam explicabo praesentium sint dolorum.</p>
                <button className=" w-[60%] bg-blue-900 my-2 text-white py-3 rounded-md font-bold">Start Trial</button>
            </div>
        </div>
    </div>
  )
}
