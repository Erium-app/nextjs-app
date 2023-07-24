
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";


const Ipfs = () => {

  return (
    <div className=" mt-5">
      <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        <h1 className="text-xl text-gray-500 font-medium">IPFS</h1>
        <br/>
        <div className=" flex justify-start items-center gap-1">
        <p>EriumNode uses IPFS to distribute EriumNode packages in a decentrallized way. Choose to connect to a emote IPFS gateway or use your own local IPFS node. more information at:</p>
        <span className="flex justify-start items-center gap-2 text-blue-400 "><BsInfoCircleFill className="w-4 h-4"/> How to use EriumNode IPFS remote</span>
        </div>
      <br/>
  
      <div className="p-2 flex flex-row justify-center items-center gap-4">

      <div className="w-1/2 h-40 border border-b-4 text-center p-5 border-gray-300 rounded">
        <h3 className="text-lg text-gray-500">Remote</h3>
        <p className="text-xs mt-2">Public IPFS node API mantained by EriumNode https://gateway.ipfs.eriumnode.io or choose one from https://ipfs.github.io/public-gatway-checker/ </p>
      <input className="w-full p-2 outline-none rounded-md mt-4 bg-gray-200" value="https://gateway.ipfs.eriumnode.io"/>
      </div>

      <div className="w-1/2 h-40 border border-b-4 text-center p-5 border-gray-300 rounded">
      <h3 className="text-lg text-gray-500">Local</h3>
      <p>Your own IPFS node w/out 3rd parties</p>

      </div>
      </div>

      <div className="flex justify-end p-2">
        <button className="bg-gray-500 text-sm px-4 text-white rounded-md p-2">Change</button>
      </div>
      </div>

    </div>
  );
}

export default Ipfs