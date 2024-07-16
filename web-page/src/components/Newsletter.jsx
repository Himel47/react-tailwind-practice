import React from 'react'

export default function Newsletter() {
  return (
    <div className=" bg-[coral] p-4">
        <div className=" max-w-[1200px] mx-auto md:flex justify-around py-10">
            <div className="text-white flex flex-col gap-3 mb-6 md:mb-0">
                <h1 className=" text-3xl md:text-4xl font-bold ">
                    Want to learn latest I.T. skills?
                </h1>
                <span className="">
                    Sign up to our newsletter and stay up to date.
                </span>
            </div>
            <div className=" flex flex-col gap-5">
                <div className="">
                    <input type="text" className='p-3 mr-2 text-slate-500 rounded-md' placeholder='Email'/>
                    <button className=" bg-blue-900 my-2 text-white p-3 rounded-md">Get Started</button>
                </div>
                <div className="">
                    <p className=" text-white">
                        We care about the protection of your data. Read our <br/>
                        <a href="#" className="text-black font-bold">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
