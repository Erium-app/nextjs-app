"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from 'react-icons/ai'

const Notification = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
      };
  return (
    <div>
        <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className='text-sm mb-4'>Recive importent notifications directly to your telegram account. To get your own token from Telegram botfather follow <span className='text-blue-400'>this Guidline</span></p>
        <p className='text-sm mb-4'>
            Availabe commands to start your bot chat<br/>
        </p>
        <ol className='text-sm mb-4'>
            <li>&#x2022; <span>/Start:</span> Send after starting the conversation (channel) with your bot. You subscribe to future notifications</li>
            <li>&#x2022; <span>/help:</span> Display all availabe comments</li>
        </ol>

        <span className='text-sm mb-4'>Telegram token</span>
        <div className='flex justify-between items-center text-gray-800 mb-4'>
            <input type='text' placeholder='Telegram Token' className='w-full p-2 border border-gray-400 bg-gray-200 rounded-l-md'/>
            <span className='p-2 border border-gray-400 bg-gray-200'><AiOutlineEye className='w-6 h-6'/></span>
            <button className=' p-2 border border-gray-400 bg-blue-400 text-white rounded-r-md'>Submit</button>
        </div>

        <span className='text-sm mb-4'>Telegram Status</span>
        <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                  isChecked ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                  isChecked ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            <span className="ml-3 text-sm text-gray-700 font-medium">
              {isChecked ? "On" : "Off"}
            </span>
          </label>

          <div className="mt-5 py-4 border-t border-gray-300">
                <button className="border-gray-500 border rounded-md p-2 px-4 text-sm  text-gray-500">Send text notification</button>
          </div>
        </div>
    </div>
  )
}

export default Notification