"use client";
import React, { useState } from "react";

const AutoUpdate = () => {
    const [isCheck, setIsCheck] = useState(false);
    const handleToggle = () => {
      setIsCheck(!isCheck);
    };
  return (
    <div>
      <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        <p>Enable auto-update for EriumNode to install automatically te latest version. For major braking updates, your approvel will always be required</p>
        <div className="flex justify-between items-center">
            <div className="w-fit">

            </div>
            <div className="flex flex-row justify-end items-center">
                <span className="text-sm p-2 px-4">Latest auto-update</span>
                <span className="text-sm p-2 px-4">Enabled</span>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="w-fit flex justify-start items-center gap-5">
                <span className="p-1 rounded-md bg-blue-400 text-white font-medium">ON</span>
                <span>System Packages</span>
            </div>
            <div className="flex flex-row justify-end items-center">
                <span className="text-sm p-2 px-4">Scheduled, in 23 hours</span>
                <span className="text-sm p-2 px-4">
                <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isCheck}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                    isCheck ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                    isCheck ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            {/* <span className={`ml-3 text-xs text-gray-700  ${isChecked ? "font-medium" : "font-light"}`}>
              Use remote during syncing or erro
            </span> */}
          </label>
                </span>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="w-fit flex justify-start items-center gap-5">
                <span className="p-1 rounded-md bg-blue-400 text-white font-medium">ON</span>
                <span>System Packages</span>
            </div>
            <div className="flex flex-row justify-end items-center">
                <span className="text-sm p-2 px-4">Scheduled, in 23 hours</span>
                <span className="text-sm p-2 px-4">
                <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isCheck}
                onChange={handleToggle}
              />
              <div
                className={`toggle__line w-11 h-6  rounded-full shadow-inner ${
                    isCheck ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                    isCheck ? "right-1" : "left-1"
                } `}
              ></div>
            </div>
            {/* <span className={`ml-3 text-xs text-gray-700  ${isChecked ? "font-medium" : "font-light"}`}>
              Use remote during syncing or erro
            </span> */}
          </label>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AutoUpdate;
