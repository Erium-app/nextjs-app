"use client"
import React, { useState } from 'react'
import Wireguard from './Wireguard'
import OpenVpn from './OpenVpn'


const page = () => {
  const [active, setActive] = useState('wireguard')
  return (
    <div className="w-full p-10 text-gray-800 ">
      <h1 className="w-full text-3xl font-medium">VPN</h1>

      <div className='flex flex-row justify-center gap-4 text-black text-center'>
        <button className={`m-2 align-middle text-lg  ${active === 'wireguard' ? "border-b-4 font-semibold border-blue-400" : ""}`} onClick={() => setActive('wireguard')}> Wireguard </button>
        {/* <button className={`m-2 align-middle text-lg  ${active === 'openvpn' ? "border-b-4 font-semibold border-blue-400" : ""}`} onClick={() => setActive('openvpn')}>OpenVpn</button> */}
      </div>
      <div className=''>
        {/* {
          active === 'wireguard' ? */}
            <Wireguard /> :
            {/* <OpenVpn /> */}
        {/* } */}
      </div>

    </div>
  )
}

export default page