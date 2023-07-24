"use client";
import React, { useState } from "react";

const Networks = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" mt-5">

    <div className="border border-gray-300 p-5 rounded gap-2 text-gray-800 bg-white mt-4">
      <span className='text-base font-medium'>Container IP: </span> <span className='text-sm '>172.33.0.5</span>
    </div>
    <h2 className='text-xl mt-4 text-gray-500 font-normal'>Public Port Mapping</h2>
    <div className="border  border-gray-300 p-5 rounded gap-2 text-gray-800 bg-white mt-4"> 
      <div className='flex flex-row justify-center items-center gap-4'>
      <div className='w-1/3 flex flex-col justify-start items-start gap-4'>
        <span className='text-xs text-gray-500'>HOST PORT</span>
        <input type='text' placeholder='304030'  className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800'/>
        <input type='text' placeholder='304030'  className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800'/>
      </div>
      <div className='w-1/3 flex flex-col justify-start items-start gap-4'>
        <span className='text-xs text-gray-500'>PACKAGE PORT NUMBER</span>
        <input type='text' placeholder='304030' disabled className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
        <input type='text' placeholder='304030' disabled className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
      </div>
      <div className='w-1/3 flex flex-col justify-start items-start gap-4'>
        <span className='text-xs text-gray-500'>PROTOCOL</span>
        <input type='text' placeholder='TCP' disabled className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
        <input type='text' placeholder='UDP' disabled className='text-sm w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
      </div>
      </div>

    <div className='mt-5 flex justify-between items-center'>
      <button className='text-sm text-white bg-gray-400 rounded p-2 hover:bg-blue-400'>Update Port Mapping</button>
      <button className='text-sm text-white bg-gray-400 rounded p-2 hover:bg-blue-400'>New Port +</button>
      </div>
    </div>

    <h2 className='text-xl mt-4 text-gray-500 font-normal'>HTTPs domain Mapping</h2>
    <div className="border w-full border-gray-300 p-5 rounded gap-2 text-gray-800 bg-white mt-4"> 
      <p className='text-sm'>It recommended to only expose the pre-approved safe services listed in <sapn className='text-blue-400'>System/Network</sapn> Please only add custom mappings manually if you understand the security risks </p>
      <div className='flex flex-row justify-between items-center mt-4 text-gray-500'>
        <div  className='flex flex-row justify-between items-center gap-5'>
        <span className='text-sm'>CONTAINER</span>
        <span className='text-sm'>SUBDOMAIN</span>
        </div>
        <span className='text-xs'>REMOVE</span>
        
      </div>
      <span className='w-full flex justify-center items-center text-gray-500 text-sm'>No mappings</span>
    <div className='mt-5 flex justify-between items-center'>
    <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-10 h-5  rounded-full shadow-inner ${
                  isChecked ? "bg-blue-400" : "bg-gray-400"
                }`}
                ></div>
              <div
                className={`toggle__dot absolute w-4 h-4 bg-white rounded-full  shadow inset-y-[2px] ${
                  isChecked ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            <span className={`ml-3 text-gray-700 ${isChecked ? "font-medium" : "font-light"} `}>
              Show all
            </span>
          </label>

      <button className='text-sm text-white bg-gray-400 rounded p-2 hover:bg-blue-400'>New Mapping +</button>
      </div>
    </div>
    </div>
  )
}

export default Networks