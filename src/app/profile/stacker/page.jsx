"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Ethereum from './Ethereum'
import GnosisChian from './GnosisChian'
import Prater from './Prater'

const page = () => {
    const router = useRouter()
    const[active, setActive] = useState('ethereum')

    
  return (
    
        <div className="w-full p-10 text-gray-800 ">
          <h1 className="w-full text-3xl font-medium">Stakers</h1>

          <div className="flex flex-row justify-center gap-4 text-black text-center">
            <button
              className={`m-2 align-middle text-lg  ${
                active === "ethereum"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("ethereum")}
            >
              {" "}
              Ethereum
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "genosisChian"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("genosisChian")}
            >
              Genosis Chian
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "prater"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("prater")}
            >
              Prater
            </button>
          </div>
          <div className='mt-5 h-[75vh] overflow-auto scrollbar-none'>
                      {
                      active === 'ethereum'?
                        <Ethereum/>:
                        active === 'genosisChian'?
                        <GnosisChian/>:
                        <Prater/>

                        }
                    </div>

        </div>

  );
}

export default page