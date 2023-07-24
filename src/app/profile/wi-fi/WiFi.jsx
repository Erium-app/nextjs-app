"use client";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";

const WiFi = () => {
  // http://localhost:3000/api/changeWifiCredentials

  const [isChecked, setIsChecked] = useState(false);
  const [ssid , setSsid] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    console.log(ssid)
    console.log(password)
    console.log(passwordConfirm)
  }, [passwordConfirm])
  

  const handleSubmit = async () => {
    if (ssid === '' || password === '') {
      toast.error("Fill all fields")
      return
    }

    // if (password !== passwordConfirm) {
    //   toast.error("Please re-enter the Password ")
    //   return
    // }


    try {
      const res = await fetch('http://localhost:3000/api/connectToWiFi', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ssid, password})
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success("Connected to Wi-Fi Successfully")
        return
      } else {
        toast.error("Error occured while connecting")
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="transition-all ease-in-out delay-700">
      <div className="mt-5 w-full p-2 bg-[#fff] flex flex-col rounded border text-gray-800 border-neutral-300">
        <div className="flex flex-row text-sm font-normal gap-4 pb-5 border-b border-b-slate-200 py-3 px-2">
          <p className="">
            Connect to the Wi-fi hotspot exposed by your EriumNode using your
            credentials. More information at:
          </p>
          <a
            href=""
            className="flex flex-row justify-start items-center gap-2 font-light text-blue-400"
            target="none"
          >
            <BsInfoCircleFill className="w-5 h-5" />
            How to connect to EriumNode Wifi
          </a>
        </div>
        <div className=" w-full h-12 flex justify-between items-center px-2 ">
          <div className="flex flex-row justify-start gap-3 items-center">
            <p className=" text-xs font-semibold bg-cyan-400 h-4 rounded px-1 text-white">
              RUNNING
            </p>
            <IoIosWifi className="m-1 w-5 h-5" />
            <p className="text-base font-normal">Wifi</p>
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

      {isChecked ? (
        <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
          <h2 className="pb-4">Connect To EriunNode WIFI </h2>
          <div className="mb-4">
            <h2 className="font-normal text-gray-400 mb-2">SSID</h2>
            <input
              type="text"
              onChange={(e)=> setSsid(e.target.value)}
              className="w-full outline-none text-xs rounded p-2 border border-stone-300"
            />
          </div>
          <div className="mb-4">
            <h2 className="font-normal text-gray-400 mb-2">Password</h2>
            <input
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full outline-none text-xs rounded p-2 border border-stone-300"
            />
          </div>
          {/* <div className="mb-4">
            <h2 className="font-normal text-gray-400 mb-2">
              Confirm new Password
            </h2>
            <input
              type="password"
              onChange={(e)=> setPasswordConfirm(e.target.value)}
              className="w-full outline-none text-xs rounded p-2 border border-stone-300"
            />
          </div> */}
          <div className="mb-4">
            <button className="text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 "
            onClick={()=>handleSubmit()}>
              Change credentials
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WiFi;
