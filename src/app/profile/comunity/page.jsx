import React from 'react'
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { FaDiscourse } from 'react-icons/fa'

const page = () => {
  return (
    <div className="w-full p-10 text-gray-800 ">
          <h1 className="w-full text-3xl font-medium">Community</h1>

          <div className="border border-gray-300 p-5 rounded bg-white mt-4">
            <div className='w-full h-40 border border-gray-300 flex flex-col justify-center items-center gap-2 rounded-md'>
              <span className='text-2xl flex justify-between items-center gap-2 font-semibold text-gray-500'>Discord <BsDiscord className='w-5 h-5'/></span>
              <p>EriumNode has a vibrant community. You can get support, shre your experience, and just hang out with other Node Runners in our Discord Server</p>
              <button className='border py-2 px-4 border-gray-300 rounded-md'>Join Discord</button>
            </div>

            <div className='w-full h-40 mt-4 border border-gray-300 flex flex-col justify-center items-center gap-2 rounded-md'>
              <span className='text-2xl flex justify-between items-center gap-2 font-semibold text-gray-500'>Treasury <BsDiscord className='w-5 h-5'/></span>
              <p>The EriumNode Community Treasury is the way the community gets rewarded for contributing and helping each other out.</p>
              <button className='border py-2 px-4 border-gray-300 rounded-md'>Check my ranking</button>
            </div>

            <div className='w-full h-40 mt-4 border border-gray-300 flex flex-col justify-center items-center gap-2 rounded-md'>
              <span className='text-2xl flex justify-between items-center gap-2 font-semibold text-gray-500'>Discourse <FaDiscourse className='w-6 h-6'/></span>
              <p>how-tos, Deep Dives,support quetions... our Forum is the place whrer information that shouldn't be lost in a chat should go!</p>
              <button className='border py-2 px-4 border-gray-300 rounded-md'>Join Discourse</button>
            </div>

            <div className='w-full h-40 mt-4 border border-gray-300 flex flex-col justify-center items-center gap-2 rounded-md'>
              <span className='text-2xl flex justify-between items-center gap-2 font-semibold text-gray-500'>GitHub <BsGithub className='w-6 h-6'/></span>
              <p>EriumNode is free open source software. you can review and contribute to its codebase on GitHub!</p>
              <button className='border py-2 px-4 border-gray-300 rounded-md'>GitHub</button>
            </div>
          </div>
    </div>
  )
}

export default page