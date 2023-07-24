"use client";
import React, { useState } from "react";

const GnosisChian = () => {
    const [isCheck, setIsCheck] = useState(false);
    const handleToggle = () => {
      setIsCheck(!isCheck);
    };
    return (
      <div className=" mt-5">
        <div className="border border-gray-300 p-5 rounded bg-white mt-4">
          <div className="text-sm">
            <p>
              Set-up your Proof-Of-Stack validator configuration for Ethereum and
              Ethereum-based chains, You will need to:
            </p>
            <p>(1) Choose an Execution Layer client.</p>
            <p>(2) Choose an Consensus Layer client(+validator).</p>
            <p>
              (3) Install the web3signer, which will hold the validator key and
              sign.
            </p>
            {/* <p>
              (4) Optional; delegate block-building capacities through the MEV
              Boost Network and potentially profit from MEV.
            </p> */}
            <br />
            <br />
            <p>
              Gnosis chain is reliable payment EVM blockhcian built for rapid and cheap transactions. xDai is a stable token.
              GNO provieds Proof-Of-Stack protection using consenus-layer Gnosis Beacon chian 
            </p>
          </div>
          <div className="flex justify-start items-center mt-4">
            <label className="w-52 h-10 text-sm  border border-gray-300 rounded-l-md  bg-gray-100 px-4 p-2">
              Default Fee Recipient
            </label>
            <input
              className="w-full h-10 text-sm outline-none border border-gray-300 rounded-r-md p-2"
              placeholder="Deafult fee recipient to be used as a feedback in case you have not set a fee rcipient for validator"
            />
            {/* <button className="h-10 text-sm text-center border border-gray-300 rounded-r-md bg-gray-200 px-4 p-2">Upload</button> */}
          </div>
          <div className="mt-4 flex justify-start items-start">
            <div className="w-1/3 p-4">
              <h2 className="text-xl">Execution client</h2>
              <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
                <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                  {" "}
                  N{" "}
                </span>
                <h3 className=" p-2 text-lg font-semibold">Nethermind Xdai</h3>
                {/* <p className="text-center">
                  Geth is the official Go implementaion of Ethereum protocol
                </p> */}
              </div>
            </div>
  
            <div className="w-1/3 p-4">
              <h2 className="text-xl">Consensus client</h2>
              <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
                <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                  {" "}
                  P{" "}
                </span>
                <h3 className=" p-2 text-lg font-semibold">Gnosis Beacon Chian Prysm</h3>
                {/* <p className="text-center">
                  Prysm mainnet ETH2.0 Beacon chain + validator
                </p> */}
              </div>
              <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
                <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                  {" "}
                  L{" "}
                </span>
                <h3 className=" p-2 text-lg font-semibold">Lighthouse Gnosis</h3>
                {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
              </div>
              <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
                <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                  {" "}
                  T{" "}
                </span>
                <h3 className=" p-2 text-lg font-semibold">Teku Gnosis</h3>
                {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
              </div>
            </div>
  
            <div className="w-1/3 p-4">
              <h2 className="text-xl">Remote signer</h2>
              <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
                <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                  {" "}
                  W{" "}
                </span>
                <h3 className=" p-2 text-lg font-semibold">Web3Signer Gnosis</h3>
                {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
}

export default GnosisChian