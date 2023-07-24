"use client";
import React, { useState } from "react";

const Logs = () => {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const handleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
  };
  const [displayTimestamp, setDisplayTimestamp] = useState(false);
  const handleDisplayTimestamp = () => {
    setDisplayTimestamp(!displayTimestamp);
  };
  return (
    <div className=" mt-5">
      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
        <div className="flex justify-start items-center gap-5">
        <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={autoRefresh}
                onChange={handleAutoRefresh}
              />
              <div
                className={`toggle__line w-10 h-6  rounded-full shadow-inner ${
                  autoRefresh ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                  autoRefresh ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            <span className={`ml-3 text-sm text-gray-700 ${autoRefresh ? "font-medium" : "font-light"} `}>
              Auto-refresh logs
            </span>
          </label>

          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={displayTimestamp}
                onChange={handleDisplayTimestamp}
              />
              <div
                className={`toggle__line w-10 h-6  rounded-full shadow-inner ${
                  displayTimestamp ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                  displayTimestamp ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            <span className={`ml-3 text-sm text-gray-700 ${displayTimestamp ? "font-medium" : "font-light"} `}>
              Display timestamp
            </span>
          </label>
        </div>

        <div className="flex justify-start items-center mt-4">
          <label className=" h-10 text-sm text-center border border-gray-300 rounded-l-md bg-gray-100 px-4 p-2">Lines</label>
          <input className="w-full h-10 text-sm border border-gray-300 p-2" placeholder="200"/>
          <button className="w-40 h-10 text-sm text-center border border-gray-300 rounded-r-md bg-gray-50 p-2">Download all</button>
        </div>

        <div className="flex justify-start items-center mt-4">
          <label className=" h-10 text-sm text-center border border-gray-300 rounded-l-md bg-gray-100 px-4 p-2">Search</label>
          <input className="w-full h-10 text-sm border border-gray-300 rounded-r-md p-2" placeholder="Filter By.."/>
        </div>

        <div className="mt-4 w-full h-96 bg-gray-900 text-white rounded-md"></div>
      </div>
    </div>
  )
}

export default Logs