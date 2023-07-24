"use client";
import React, { useState } from "react";
import { BsArrowRight, BsFillInfoCircleFill } from 'react-icons/bs'

const Network = () => {
    const [isCheck, setIsCheck] = useState(false);
    const handleToggle = () => {
      setIsCheck(!isCheck);
    };
  return (
    <>
    <h1 className="my-4 text-2xl">HTTPs Portal</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <div className='text-sm flex justify-start items-center gap-2'>
            <p>HTTPs portal allows you to expose services to to external nternate with valid TLS/SSL certificate. Only the services that are safe to be exposed will show up here. Learn more about HTTPs portal at:</p>
            <BsFillInfoCircleFill className='w-5 h-5 text-blue-400'/>
            <span className='text-blue-400 hover:underline'>What is HTTPs</span>
        </div>

        <div className='mt-4 text-sm flex justify-between items-center'>
            <div className=' w-1/2 flex justify-start items-center'>
                <span className='w-24'>PACKAGE</span>
                <span>SERVICE</span>
            </div>
            <div className='w-full'>
            <span>PUBLIC URL</span>
            </div>
            <div className='w-32'>
            <span>EXPOSE</span>
            </div>

        </div>

        <div className='mt-4 text-sm flex justify-between items-center'>
            <div className=' w-1/2 flex justify-start items-center '>
                <span className='w-24'>Geth</span>
                <div className='flex flex-col justify-center items-start'>
                    <span className='font-medium'>Geth JSON RPC</span>
                    <p className='text-xs'>JSON RPC endpoint for Geth Ethereum Mainnet</p>
                </div>
                <BsArrowRight className='w-6 h-6 ml-4'/>
            </div>
            <div className='w-full'>
            <span>-</span>
            </div>
            <div className='w-32'>
            <span>
            <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isCheck}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                    isCheck ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                    isCheck ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            {/* <span className={`ml-3 text-xs text-gray-700  ${isChecked ? "font-medium" : "font-light"}`}>
              Use remote during syncing or erro
            </span> */}
          </label>
            </span>
            </div>

        </div>


        <div className='mt-4 text-sm flex justify-between items-center'>
            <div className=' w-1/2 flex justify-start items-center '>
                <span className='w-24'>Geth</span>
                <div className='flex flex-col justify-center items-start'>
                    <span className='font-medium'>Geth JSON RPC (WS)</span>
                    <p className='text-xs'>WebSockets endpoint for Geth Ethereum Mainnet</p>
                </div>
                <BsArrowRight className='w-6 h-6 ml-4'/>
            </div>
            <div className='w-full'>
            <span>-</span>
            </div>
            <div className='w-32'>
            <span>
            <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isCheck}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                    isCheck ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                    isCheck ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            {/* <span className={`ml-3 text-xs text-gray-700  ${isChecked ? "font-medium" : "font-light"}`}>
              Use remote during syncing or erro
            </span> */}
          </label>
            </span>
            </div>

        </div>

        <div className="mt-5 border-t py-5 border-gray-400">
            <p>{'Use the "Recreate" mapping button if you experiance issues.'}</p>
            <button className="mt-4 border border-gray-400 font-medium text-gray-500 rounded text-sm p-2 px-4">Recreate</button>
        </div>

    </div>

    <h1 className="my-4 text-2xl">Static IP</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p>You can set a Static IP for this EriumNode instead of using a dyndns. Only set a static IP if you are sure it is static, otherwise you may not be able to connect to its VPN.</p>
        <div className="mt-4 text-sm flex justify-between items-center">
            <input type="text" placeholder="Your Static IP ..." className=" p-2 w-full h-10 outline-none rounded-l-md bg-gray-200"/>
            <button className=" p-2 bg-gray-300 rounded-r-md">Enable</button>
        </div>
    </div>
    </>
  )
}

export default Network