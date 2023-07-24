"use client";
import React, { useState } from "react";

const Ethereum = () => {
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
          <p>
            (4) Optional; delegate block-building capacities through the MEV
            Boost Network and potentially profit from MEV.
          </p>
          <br />
          <br />
          <p>
            Ethereum is open source, distributed software platform that is based
            on blockchain technology. It has it's own cryptocurrency called
            Ether and a programming language called Solidity.
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
          <div className="w-1/4 p-4">
            <h2 className="text-xl">Execution client</h2>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                G{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Geth</h3>
              <p className="text-center">
                Geth is the official Go implementaion of Ethereum protocol
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                N{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Nethermind</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                E{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Erigon</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                B{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Besu</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
          </div>

          <div className="w-1/4 p-4">
            <h2 className="text-xl">Consensus client</h2>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                P{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Prysm</h3>
              <p className="text-center">
                Prysm mainnet ETH2.0 Beacon chain + validator
              </p>
              <div className="w-full mx-2 mt-1 h-12 border-t border-gray-300 flex justify-center items-center">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isCheck}
                      onChange={handleToggle}
                    />
                    <div
                      className={`toggle__line w-10 h-6  rounded-full shadow-inner ${
                        isCheck ? "bg-blue-400" : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`toggle__dot absolute w-5 h-5 bg-white rounded-full  shadow inset-y-[2px] ${
                        isCheck ? "right-1" : "left-1"
                      } `}
                    ></div>
                  </div>
                  <span
                    className={`ml-3 text-sm text-gray-700 ${
                      isCheck ? "font-medium" : "font-light"
                    } `}
                  >
                    Use checksync
                  </span>
                </label>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                L{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Lighthouse</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                T{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Teku</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                N{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Nimbus</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
          </div>

          <div className="w-1/4 p-4">
            <h2 className="text-xl">Remote signer</h2>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                W{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Web3Signer</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
          </div>

          <div className="w-1/4 p-4 ">
            <h2 className="text-xl">Mev Boost</h2>
            <div className="w-full flex flex-col justify-center items-center border-2 border-b-4 p-5 border-gray-400 rounded-sm hover:border-gray-200 mt-4">
              <span className="w-20 h-20 border-4 text-6xl text-gray-400 font-extrabold text-center p-2 border-gray-300 rounded-full">
                {" "}
                M{" "}
              </span>
              <h3 className=" p-2 text-lg font-semibold">Mev Boost</h3>
              {/* <p className='text-center'>Geth is the official Go implementaion of Ethereum protocol</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethereum;
