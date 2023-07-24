import React from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const Peer = () => {
  return (
    <div>
        <div className='mt-4 flex justify-start items-center gap-2'>
            <p className=''>Learn more about IPFS peers at :</p>
            <BsFillInfoCircleFill className='w-5 h-5 text-blue-400'/>
            <span className='text-blue-400'>What is IPFS</span>
        </div>

    <h1 className="my-4 text-2xl">Share IPFS peer</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
    <p className='text-sm'>Share this link with another EriumNode admin to automatically peer-conect your two IPFS nodes. Use tis resource to mitigate slow IPFS propagation.</p>
    <span className='mt-4 flex justify-start items-center gap-2'> <RxCross2 className='w-5 h-5 text-red-700'/> Error Getting your peer multiaddress: Failed to fetch</span>
    </div>

    <h1 className="my-4 text-2xl">Add IPFS peer</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
    <p className='text-sm'>Add an IPFS peer to your own boostStrap list and immediately connect to it.</p>
    <div className="mt-4 text-sm flex justify-between items-center">
            <input type="text" value="Peer address /ip4/85.200.85.20/tcp/4001/ipfs/QmWas..." className=" p-2 w-full h-10 outline-none rounded-l-md bg-gray-200"/>
            <button className=" p-2 w-32 h-10 bg-gray-300 rounded-r-md">Add Peer</button>
        </div>
    </div>
    </div>
  )
}

export default Peer