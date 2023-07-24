import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Advance = () => {
  return (
    <div>
    <h1 className="my-4 text-2xl">Change EriumNode Name</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
      <p className='text-sm'>EriumNode name only affect to the user web interface. it's the name appares on top navigation bar.</p>

      <span className='mt-4 text-sm'>Current EriumNode Name</span>
      <input type='text' value={"EriumNode"} className='outline-none text-white w-full text-sm bg-gray-400 mt-4 p-2 rounded-md'/>
      <button className='mt-4 w-56 bg-blue-400 rounded-md p-2  text-white'>Change eriumnode Name</button>
    </div>

    <h1 className="my-4 text-2xl">SSH</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
      <p className='text-sm'>ENABLE, DISABLE SSH.</p>

      <span className='mt-4 text-sm'>Enable and start or Disable and stop the SSH. service of your EriumNode</span>
      <div className='flex justify-start items-center '>
      <span className=' w-32 text-center font-medium text-white text-sm bg-gray-500 mt-4 p-2 rounded-l-md'>SSH Status</span>
      <input type='text' value={""} className=' w-full outline-none text-white text-sm bg-gray-400 mt-4 p-2'/>
      <button className=' w-32 text-center font-medium text-white text-sm bg-gray-500 mt-4 p-2 rounded-r-md'>Fetch Status</button>
      </div>
      <div className=' pb-4 border-b border-gray-300 flex justify-start items-center gap-5'>
      <button className='mt-4 w-20 border border-gray-400 rounded-md p-2  text-gray-500 '>Enable</button>
      <button className='mt-4 w-20 border border-gray-400 rounded-md p-2  text-gray-500 '>Disable</button>
      </div>

      <span className='text-sm mt-4 font-medium'>CHANGE SSH PORT</span>
      <span className='text-sm mt-2'>Change SSH port of your EriumNode. Port number must be greater than 0 and less than 65536</span>
      <div className='flex justify-start items-center '>
      <input type='number' value={""} className=' w-full outline-none text-white text-sm bg-gray-400 mt-4 p-2 rounded-l-md'/>
      <span className=' w-32 text-center font-medium text-sm border border-gray-500 mt-4 p-2 '>Fetch port</span>
      <button className=' w-32 text-center font-medium text-white text-sm bg-gray-500 mt-4 p-2 rounded-r-md'>Change</button>
      </div>
    </div>

    <h1 className="my-4 text-2xl">Relese trusted key</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
    
    <div className='flex justify-start items-center'>
      <div className='w-full flex justify-start items-center text-left'>
        <span className='text-xs p-2 w-80'>KEY NAME</span>
        <span className='text-xs p-2 w-36'>PACKAGE</span>
        <span className='text-xs p-2 w-28'>PROTOCOL</span>
        <span className='text-xs p-2 '>KEY</span>
      </div>
    <div className='flex justify-end items-center text-center'>
      <span className='text-xs p-2 w-28'>REMOVE</span>
    </div>
    </div>


    <div className='flex justify-start items-center'>
      <div className='w-full  py-4 flex justify-start items-center text-left'>
        <span className='text-sm  w-80'>EriumNode Assosoiation</span>
        <span className='text-sm  w-36'>.enp.eriumnode.eth</span>
        <span className='text-sm  w-28'>ECDSA_256</span>
        <span className='text-sm  '>0xf35go5fuJDsa512SasTD5122YS45NPio565h9809</span>
      </div>
    <div className='flex justify-end items-center'>
      <span className='text-sm flex justify-center items-center w-28'><RxCross2 className='w-5 h-6'/></span>
    </div>
    </div>

    <div className='flex justify-start items-center'>
      <div className='w-full  py-4 flex justify-start items-center text-left'>
        <span className='text-sm  w-80'>EriumNode Assosoiation</span>
        <span className='text-sm  w-36'>.enp.eriumnode.eth</span>
        <span className='text-sm  w-28'>ECDSA_256</span>
        <span className='text-sm  '>0xf35go5fuJDsa512SasTD5122YS45NPio565h9809</span>
      </div>
    <div className='flex justify-end items-center'>
      <span className='text-sm flex justify-center items-center w-28'><RxCross2 className='w-5 h-6'/></span>
    </div>
    </div>

    <div className='flex justify-start items-center'>
      <div className='w-full  py-4 flex justify-start items-center text-left'>
        <span className='text-sm  w-80'>EriumNode Assosoiation</span>
        <span className='text-sm  w-36'>.enp.eriumnode.eth</span>
        <span className='text-sm  w-28'>ECDSA_256</span>
        <span className='text-sm  '>0xf35go5fuJDsa512SasTD5122YS45NPio565h9809</span>
      </div>
    <div className='flex justify-end items-center'>
      <span className='text-sm flex justify-center items-center w-28'><RxCross2 className='w-5 h-6'/></span>
    </div>
    </div>

    <div className='flex justify-start items-center'>
      <div className='w-full  py-4 flex justify-start items-center text-left'>
        <span className='text-sm  w-80'>EriumNode Assosoiation</span>
        <span className='text-sm  w-36'>.enp.eriumnode.eth</span>
        <span className='text-sm  w-28'>ECDSA_256</span>
        <span className='text-sm  '>0xf35go5fuJDsa512SasTD5122YS45NPio565h9809</span>
      </div>
    <div className='flex justify-end items-center'>
      <span className='text-sm flex justify-center items-center w-28'><RxCross2 className='w-5 h-6'/></span>
    </div>
    </div>


    </div>


    <h1 className="my-4 text-2xl">Doker update</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
      <p className='text-sm'>UPDATE DOKER COMPOSE.</p>

      <span className='mt-4 text-sm'>Update Doker compose to a stabele version with EriumNode</span>
      <div className=' pb-8 border-b border-gray-300 flex justify-start items-center gap-5'>
      <button className='mt-4  border border-gray-400 rounded-md p-2  text-gray-500 '>Check Requirment</button>
      </div>

      <span className='text-sm mt-4 font-medium'>UPDATE DOKER ENGINE</span>
      <span className='text-sm mt-2'>Update Doker engine to a stable version with EriumNode. You must update Doker compose first, then Doker engine</span>
      <div className='flex justify-start items-center '>
      <button className='mt-4  border border-gray-400 rounded-md p-2  text-gray-500 '>Check Requirment</button>
      </div>
    </div>

    <h1 className="my-4 text-2xl">Clear cache db</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
     <span className='text-sm'>Remove the local cache of Argon Package Manager (APM) entries, manifest, avatars. Also remove the user action logs shown in activity tabs.</span> 
     <button className='mt-4 w-56 border border-red-500 rounded-md p-2  text-red-500 '>Clear cache database</button>
    </div>

    <h1 className="my-4 text-2xl">Clear main db</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
    <span className='text-sm'>Remove the local database which contain critical information about your EriumNode, usch as dyndns identitiy,Ips registory, telegram configuration and more.</span>
    <button className='mt-4 w-56 border border-red-500 rounded-md p-2  text-red-500 '>Clear main database</button>
    </div>

    </div>
  )
}

export default Advance