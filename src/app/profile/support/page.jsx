"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AutoDignose from './AutoDignose'
import Report from './Report'
import { Port_Lligat_Sans } from 'next/font/google'
import Port from './Port'
import Activity from './Activity'
// import Ethereum from './Ethereum'
// import GnosisChian from './GnosisChian'
// import Prater from './Prater'

const page = () => {
    const router = useRouter()
    const[active, setActive] = useState('AutoDignose')

    
  return (
    
        <div className="w-full p-10 text-gray-800 ">
          <h1 className="w-full text-3xl font-medium">Stakers</h1>

          <div className="flex flex-row justify-center gap-4 text-black text-center">
            <button
              className={`m-2 align-middle text-lg  ${
                active === "AutoDignose"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("AutoDignose")}
            >
              {" "}
              Auto Dignose
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Report"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Report")}
            >
              {" "}
              Report
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Port"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Port")}
            >
              Port
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Activity"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Activity")}
            >
              Activity
            </button>
          </div>
          <div className='mt-5 h-[75vh] overflow-auto scrollbar-none'>
                      {
                      active === 'AutoDignose'?
                        <AutoDignose/>:
                        active === 'Report'?
                        <Report/>:
                        active === 'Port'?
                        <Port/>:
                        active === 'Activity'?
                        <Activity/>:
                        ''
                        }
                    </div>

        </div>

  );
}

export default page