import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Hardware = () => {
  return (
    <div>
      <h1 className="my-4 text-2xl">Expand Disk</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
    <div className='mt-4 text-sm flex justify-start items-center gap-2'>
            <p>Expand your EriumNode filesystem with another staorage divice. More information at:</p>
            <BsFillInfoCircleFill className='w-5 h-5 text-blue-400'/>
            <span className='text-blue-400'>How to Expand your EriumNOde fle system</span>
    </div>
        
        <div className="mt-4 pb-10 border-b border-gray-300 text-sm text-white font-semibold flex justify-between items-center">
            <div className='w-1/2 flex justify-center items-center'>
            <button className=" p-2 px-4 bg-blue-400 hover:bg-gray-300 rounded-md">Automatic Expansion</button>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
            <button className=" p-2 px-4 bg-gray-400 hover:bg-blue-400 rounded-md">Manual Expansion</button>
            </div>
        </div>

    <div className='text-sm flex flex-col justify-start items-start'>
        <span className='my-4 text-sm font-medium'>SELECT STORAGE DEVICE</span>

        <span>Check and select the storage device to be added.</span>

        <button className="mt-4 p-2 px-4 border border-gray-400 rounded-md">Get Storage Device</button>

        <span className='mt-4 flex justify-start items-center gap-2'><AiOutlineLoading3Quarters className='w-4 h-4 text-blue-400'/> Getting storage devices.</span>
    </div>
    </div>
    </div>
  )
}

export default Hardware