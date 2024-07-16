import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import sample from '../assets/sample1.jpg'

export default function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-[coral] p-4'>
        <div className="max-w-[1240px] py-3 mx-auto flex items-center justify-between">
            <div className='text-4xl font-bold'>
                <img src={sample} alt="" className=' w-48 rounded-full' />
            </div>
            {
              toggle ?
              <AiOutlineClose onClick={()=>setToggle(!toggle)} className=' text-white text-2xl md:hidden block'/>
              :
              <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=' text-white text-2xl md:hidden block'/>
            }
            <ul className='hidden md:flex text-white gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Privacy</li>
                <li>Contact</li>
            </ul>
            {/* Responsive */}
            <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[98px] 
                  ${toggle?'left-[0]':'left-[-100%]'}`}>
                <li className='p-5'>Home</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Privacy</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
