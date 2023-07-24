import React from 'react'

const FileManager = () => {
  return (
    <div className=" mt-5">
      <h1 className='text-2xl text-gray-500 font-medium mt-4'>Upload file</h1>
      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
      <div className="flex justify-start items-center mt-4">
          {/* <label className=" h-10 text-sm text-center border border-gray-300  bg-gray-100 px-4 p-2">Lines</label> */}
          <input className="w-full h-10 text-sm outline-none border border-gray-300 rounded-l-md p-2" placeholder="Choose File"/>
          <button className="h-10 text-sm text-center border border-gray-300 rounded-r-md bg-gray-50 px-4 p-2">Browse</button>
        </div>

        <div className="flex justify-start items-center mt-4">
          {/* <label className=" h-10 text-sm text-center border border-gray-300  bg-gray-100 px-4 p-2">Lines</label> */}
          <input className="w-full h-10 text-sm outline-none border border-gray-300 rounded-l-md p-2" placeholder="Deafult to $/WROKDIR/"/>
          <button className="h-10 text-sm text-center border border-gray-300 rounded-r-md bg-gray-200 px-4 p-2">Upload</button>
        </div>

    </div>
        <h1 className='text-2xl text-gray-500 font-medium mt-4'>Download file</h1>
      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
      <div className="flex justify-start items-center mt-4">
          {/* <label className=" h-10 text-sm text-center border border-gray-300  bg-gray-100 px-4 p-2">Lines</label> */}
          <input className="w-full h-10 text-sm outline-none border border-gray-300 rounded-l-md p-2" placeholder="Container from path"/>
          <button className="h-10 text-sm text-center border border-gray-300 rounded-r-md bg-gray-50 px-4 p-2">Download</button>
        </div>

      </div>
    </div>
  )
}

export default FileManager