import React from 'react'
import {RxCross2} from 'react-icons/rx'

const Port = () => {
  return (
    <div className=" mt-5">
    <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        
    <div className='flex justify-start items-center gap-2'>
        <RxCross2 className='w-5 h-5 text-red-700 font-extrabold'/> <span>EriumNode has detected UPnP as disabled .</span>
    </div>
    <p className='mt-2'>Enabale UPnP or manually open and assosciate the necessary ports in the router to thr EriumNode local Ip: <span className='text-sm font-medium'>192.168.1.14</span></p>

    <h3 className=' w-full mb-32 border-b border-gray-400 font-semibold py-6'>UDP ports must be manually checked in router</h3>
    </div>
    </div>
  )
}

export default Port