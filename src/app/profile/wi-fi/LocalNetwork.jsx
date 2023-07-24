"use client";
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";

const LocalNetwork = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="mt-5 text-gray-800">
      <div className="p-2 bg-white flex flex-col rounded border border-neutral-300">
        <div className="flex flex-row gap-2 pb-5 justify-start items-center text-sm border-b border-b-slate-200 py-3 px-2">
          <p className="">
            If you are connected to the same router as your EriumNode you can
            use this page at
            <a href="" className="mx-1 text-blue-400">
              {" "}
              http://eriumnode.local
            </a>
            Learn more about the local network proxy at :
          </p>
          <a
            href=""
            className="flex flex-row gap-3 justify-start items-center font-light text-blue-400"
            target="none"
          >
            <BsInfoCircleFill className="w-5 h-5" />
            How to connect to EriumNode Local Network Proxy
          </a>
        </div>
        <div className=" w-full h-12 flex justify-between items-center px-2">
          <div className="flex flex-row justify-start gap-3  items-center">
            <p className=" text-xs font-semibold bg-cyan-400 h-4 rounded px-1 text-white">
              RUNNING
            </p>
            <IoIosWifi className="m-1 w-5 h-5" />
            <p className="text-base font-normal">Local Network proxy</p>
          </div>

          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                  isChecked ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                  isChecked ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            <span className="ml-3 text-gray-700 font-medium">
              {isChecked ? "On" : "Off"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LocalNetwork;
