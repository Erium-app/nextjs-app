import React from 'react'

const Config = () => {
  return (
    <div className=" mt-5">

      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
      <h1 className="text-base font-medium text-gray-800">Geth</h1>
      <div className=' flex flex-row justify-center items-center gap-4'>
      <div className='w-1/2 flex flex-col justify-start gap-4 mt-4 items-start'>
        <span className='text-xs text-gray-500'>ENV Name</span>
        <input type='text' placeholder='EXTRA_OPTION' disabled className='text-base w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
        <input type='text' placeholder='P2P_PORT' disabled className='text-base w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
        <input type='text' placeholder='SYNCMODE' disabled className='text-base w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
        <input type='text' placeholder='_ERIUMNODE_GLOBAL_CONSENSUS_CLIENT_MAINNET' disabled className='text-base w-full h-8 border border-gray-300 p-2 rounded-md text-gray-800 bg-gray-100'/>
      </div>

      <div className='w-1/2 flex flex-col justify-start gap-4 mt-4 items-start'>
        <span className='text-xs text-gray-500'>ENV Value</span>
        <input type='text' className='text-base w-full h-8 border border-gray-300 p-2 rounded-md outline-blue-300 text-gray-800'/>
        <input type='text' className='text-base w-full h-8 border border-gray-300 p-2 rounded-md outline-blue-300 text-gray-800'/>
        <input type='text' className='text-base w-full h-8 border border-gray-300 p-2 rounded-md outline-blue-300 text-gray-800'/>
        <input type='text' className='text-base w-full h-8 border border-gray-300 p-2 rounded-md outline-blue-300 text-gray-800'/>
      </div>

      </div>
      <div className='mt-5'>
        <button className='text-sm text-white bg-gray-400 rounded p-2 hover:bg-blue-400'>Update</button>
      </div>
      </div>
    </div>
  )
}

export default Config