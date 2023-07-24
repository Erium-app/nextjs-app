import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'

const AutoDignose = () => {
  return (
    <div className=" mt-5">
      <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        <div className='flex justify-start items-center gap-2'>
        <BiCheck className='w-6 h-6 text-blue-400'/> <span>IPFS resolves</span>
        </div>
        <div className='flex justify-start items-center gap-2'>
        <BiCheck className='w-6 h-6 text-blue-400'/> <span>Has connected to internate, and detected own public IP.</span>
        </div>
        
        <div className='flex justify-start items-center gap-2'>
        <RxCross2 className='w-6 h-6 text-red-700 font-semibold'/> <span>Port have to be opened and there is no UPnP device available.</span>
        </div>
        <ol className='mx-8'>
        <li>&#x2022;    If you are capable of opening port maually, please ignore this error</li>
        <li>&#x2022;    Your remote may have UPnP but it is noot turned on yet. please reserch if your specific routes has UPnP and turn it on.</li>
        </ol>
        <br/>
        
        <div className='flex justify-start items-center gap-2'>
        <BiCheck className='w-6 h-6 text-blue-400'/> <span>NAT loopback enabled, external IP resolves.</span>
        </div>
        <div className='flex justify-start items-center gap-2'>
        <BiCheck className='w-6 h-6 text-blue-400'/> <span>{"Disk usage is ok(<95%)"}.</span>
        </div>
        <div className='flex justify-start items-center gap-2'>
        <AiOutlineLoading3Quarters className='w-4 h-4 text-blue-400'/> <span>Verifying installed core EriumNode Packages...</span>
        </div>
      </div>
    </div>
  )
}

export default AutoDignose