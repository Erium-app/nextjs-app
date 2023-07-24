import React from 'react'

const Updates = () => {
  return (
    <div>
        <h1 className="my-4 text-2xl">Update</h1>
    <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <div className='text-sm flex justify-between items-center'>
        <span>DappManager</span>
        <span>Upadte from 0.2.64 to 0.2.66</span>
        </div>
        <button className=" p-2 w-24 bg-gray-300 mt-4 text-white hover:bg-blue-400 rounded-md">Update</button>
    </div>
    </div>
  )
}

export default Updates