"use client";
import React, { useState, useEffect } from "react";
import Info from "./comp/Info"; 
import Config from "./comp/Config"; 
import Networks from "./comp/Networks"; 
import Logs from "./comp/Logs"; 
import FileManager from "./comp/FileManager"; 

const page = (props) => {
  const [active, setActive] = useState("Info");
  const tabs = ["Info", "Config", "Network", "Logs", "File Manager"];
  const { pkName } = props.params;
  return (
    <div className="w-full px-10 pt-10 text-gray-800 ">
      <h1 className="w-full text-4xl text-gray-500 font-medium">
        Packages <span className="text-gray-800">{pkName}</span>
      </h1>

      <div className="flex flex-row justify-center mt-5 gap-4 text-black text-center">
        {tabs.map((item, i) => {
          return (
            <button
              className={`m-2 align-middle text-lg  ${
                active === item
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive(item)}
              key={i}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className=' mt-5 h-[70vh] overflow-auto scrollbar-none '>
                      {
                      active === 'Info'?
                        <Info/>
                        :active === 'Config'?
                        <Config/>
                        :active === 'Network'?
                        <Networks/>
                        :active === 'Logs'?
                        <Logs/>
                        :active === 'File Manager'?
                        <FileManager/>
                        :''
                        }
                    </div>
    </div>
  );
};

export default page;
