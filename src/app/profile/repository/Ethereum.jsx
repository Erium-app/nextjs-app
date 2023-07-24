"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Ethereum = () => {
  const [isCheck, setIsCheck] = useState(false);
  const handleToggle = () => {
    setIsCheck(!isCheck);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Select Option');

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('Select Option');

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleS = () => {
    setIsChecked(!isChecked)
  }
  
  return (
    <div className=" mt-5">
      <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        <h1 className="text-xl text-gray-500 font-medium">Ethereum</h1>
        <br/>
        <p>EriumNode uses smart contracts to access a decentralized repository of DApps. Choose to connect to a remote network or use your own local node.</p>
      <br/>
      <p className="text-sm font-medium">Execution client: <span className="text-sm font-light">Geth</span></p>
      <p className="text-sm font-medium">Cosensus client: <span className="text-sm font-light">Prysm</span></p>
      <p className="text-sm font-medium">Status: <span className="text-sm font-light">Not availabe (using remote)- state is not synced</span></p>
      <br/>

      <div className="p-2 flex flex-row justify-center items-center gap-4">

      <div className="w-1/2 h-56 border border-b-4 text-center p-5 border-gray-300 rounded">
        <h3 className="text-lg text-gray-500">Remote</h3>
        <p>Public Node API mantained by EriumNode</p>
      </div>

      <div className="w-1/2 h-56 border border-b-4 text-center p-5 border-gray-300 rounded">
      <h3 className="text-lg text-gray-500">Full node</h3>
      <p>Your own Ethereum node w/out 3rd parties</p>
      

      <div className="relative w-full inline-block text-left mt-4">
      <div className="flex justify-start items-center ">
        <span className=" w-44 text-sm border border-gray-300 px-4 py-2 rounded-l-md">Execution client</span>
        <button
          type="button"
          className="inline-flex w-full justify-between px-4 py-2 text-sm font-medium border border-gray-300 text-gray-800 rounded-r-md outline-none "
          id="dropdown-button"
          onClick={toggleDropdown1}
          aria-haspopup="true"
          aria-expanded={isOpen1 ? "true" : "false"}
        >
          {selectedOption1}
          <FaAngleDown className="w-4 h-4"/>
        </button>
      </div>

      {isOpen1 && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-[80%] rounded-md shadow-lg bg-white z-10 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
          tabIndex="-1"
        >
          <ul className="py-1" role="none">
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-1"
              onClick={() => handleOptionSelect1('Geth')}
            >
              Geth 
            </li>
            <li
             
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-2"
              onClick={() => handleOptionSelect1('Besu')}
            >
              Besu
            </li>
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-3"
              onClick={() => handleOptionSelect1('Erigon')}
            >
              Erigon
            </li>
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-3"
              onClick={() => handleOptionSelect1('Nethermind')}
            >
              Nethermind
            </li>
          </ul>
        </div>
      )}
      </div>

      <div className="relative w-full inline-block text-left mt-4">
      <div className="flex justify-start items-center ">
        <span className=" w-44 text-sm border border-gray-300 px-3 py-2 rounded-l-md">Consensus client</span>
        <button
          type="button"
          className="inline-flex w-full justify-between px-4 py-2 text-sm font-medium border border-gray-300 text-gray-800 rounded-r-md outline-none "
          id="dropdown-button"
          onClick={toggleDropdown2}
          aria-haspopup="true"
          aria-expanded={isOpen2 ? "true" : "false"}
        >
          {selectedOption2}
          <FaAngleDown className="w-4 h-4"/>
        </button>
      </div>

      {isOpen2 && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-[80%] z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
          tabIndex="-1"
        >
          <ul className="py-1" role="none">
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-1"
              onClick={() => handleOptionSelect2('Prysm')}
            >
              Prysm
            </li>
            <li
             
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-2"
              onClick={() => handleOptionSelect2('OLighthouse')}
            >
              Lighthouse
            </li>
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-3"
              onClick={() => handleOptionSelect2('Teku')}
            >
              Teku
            </li>
            <li
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="dropdown-menu-item-3"
              onClick={() => handleOptionSelect2('Nimbus')}
            >
              Nimbus
            </li>
          </ul>
        </div>
      )}
      </div>

      </div>
      </div>

      <div className="flex justify-start p-2">
      <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggleS}
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
            <span className={`ml-3 text-xs text-gray-700  ${isChecked ? "font-medium" : "font-light"}`}>
              Use remote during syncing or erro
            </span>
          </label>
      </div>

      <div className="flex justify-end p-2">
        <button className="bg-gray-500 text-sm px-4 text-white rounded-md p-2">Change</button>
      </div>
      </div>

    </div>
  );
};

export default Ethereum
