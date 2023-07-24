"use client"
import {useState, useEffect} from "react"
import ProgressBar from "@/components/ProgressBar"

const Info = () => {
    const [systemInfo, setSystemInfo] = useState()

    const getSystemInfo = async () => {
            const res = await fetch(`http://localhost:3000/api/os`, {
              headers: {
                "Content-Type": "application/json",
              },
              method: "GET",
            });
            const sys = await res.json();
            return sys;
          };

    useEffect(()=>{
      // setInterval(() => {
        // getSystemInfo().then((data)=>{
        //     setSystemInfo(data)
        // })
      // }, 3000);
    },[])

  return (
    <div className=' mt-4'>
      <h1 className='text-2xl font-medium'>Machine Status</h1>
      <div className="w-full flex justify-start items-start gap-10">
       <div className="w-60 h-20 rounded-md mt-5 border flex flex-col justify-center items-start border-gray-300 p-4 bg-white">
            <span className="text-sm font-medium">Cpu <small className="font-light">Usage</small></span>
            <span className="w-52 h-4 mt-2 text-white align-top text-center text-xs rounded bg-red-400">
            <ProgressBar cpuUsage={systemInfo?.cpuUsage} />    
            {/* <small className="">100%</small> */}
            </span>
        </div> 
       
       <div className="w-60 h-20 rounded-md mt-5 border flex flex-col justify-center items-start border-gray-300 p-4 bg-white">
            <span className="text-sm font-medium">Memory <small className="font-light">Usage</small></span>
            <span className="w-52 h-4 mt-2 text-white align-top text-center text-xs rounded bg-red-400">
            <ProgressBar cpuUsage={systemInfo?.memoryUsage} /> 
            {/* <small className="">100%</small> */}
            </span>
        </div> 
       
       <div className="w-60 h-20 rounded-md mt-5 border flex flex-col justify-center items-start border-gray-300 p-4 bg-white">
            <span className="text-sm font-medium">Disk <small className="font-light">Usage</small></span>
            <span className="w-52 h-4 mt-2 text-white align-top text-center text-xs rounded bg-red-400">
            <ProgressBar cpuUsage={systemInfo?.diskUsage} /> 
            {/* <small className="">100%</small> */}
            </span>
        </div> 
        </div>

        <h1 className='text-2xl font-medium mt-4'>Volumes</h1>
        <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
            <div className="flex justify-between items-center text-sm">
            <span>Name</span>
            <div className=" flex justify-end items-center gap-2">
                <span className="w-36 text-center">Size</span>
                <span className="w-36 text-center">Created At</span>
            </div>
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
            <span>IPFS - Data</span>
            <div className=" flex justify-end items-center gap-2">
                <span className="w-36 text-center">372 MB</span>
                <span className="w-36 text-xs text-center">Today, 24 min ago</span>
            </div>
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
            <span>IPFS - Data</span>
            <div className=" flex justify-end items-center gap-2">
                <span className="w-36 text-center">372 MB</span>
                <span className="w-36 text-xs text-center">Today, 24 min ago</span>
            </div>
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
            <span>IPFS - Data</span>
            <div className=" flex justify-end items-center gap-2">
                <span className="w-36 text-center">372 MB</span>
                <span className="w-36 text-xs text-center">Today, 24 min ago</span>
            </div>
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
            <span>IPFS - Data</span>
            <div className=" flex justify-end items-center gap-2">
                <span className="w-36 text-center">372 MB</span>
                <span className="w-36 text-xs text-center">Today, 24 min ago</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Info
