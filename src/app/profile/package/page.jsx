"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MyPackages from './MyPackages'
import SystemPackages from './SystemPackages'

const page = () => {
    const router = useRouter()
    const[active, setActive] = useState('myPackages')

    
  return (
    
        <div className="w-full p-10 text-gray-800 ">
          <h1 className="w-full text-3xl font-medium">Packages</h1>

          <div className="flex flex-row justify-center gap-4 text-black text-center">
            <button
              className={`m-2 align-middle text-lg  ${
                active === "myPackages"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("myPackages")}
            >
              {" "}
              My Packages
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "systemPackages"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("systemPackages")}
            >
              System Packages
            </button>
          </div>
          <div className=''>
                      {
                      active === 'myPackages'?
                        <MyPackages/>:
                        <SystemPackages/>
                        }
                    </div>

        </div>

  );
}

export default page