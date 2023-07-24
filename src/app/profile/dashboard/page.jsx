"use client"
import {useState, useEffect} from "react"
import ProgressBar from "@/components/ProgressBar"

const page = () => {
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
      //   getSystemInfo().then((data)=>{
      //       setSystemInfo(data)
      //   })
      // }, 3000);
    },[])

  return (
    
    <div className="w-full p-10 ">
       <h1 className="w-full text-3xl font-medium">Dashboard</h1>
       <div className=" w-full flex flex-col ">  
       <div className="w-full flex justify-stretch items-center">
        <div className="w-1/2 h-40">
            <h1 className="text-xl font-medium mt-10 text-gray-400">Chain</h1>
            <div className="w-60 h-20 rounded-md mt-5 border flex flex-col justify-center items-start border-gray-300 p-4 bg-white">
            <span className="text-sm font-medium">Repository source</span>
            <span className="text-xs font-normal">Full node: using remote</span>
            <span className="text-xs font-normal">Unknown error: undefied</span>
            </div> 
        </div>
        <div className="w-1/2 h-40">
            <h1 className="text-xl font-medium mt-10 text-gray-400">Packages</h1>
            <div className="bg-green-200 mt-5 text-xs px-5 py-3 w-4/5 h-10 rounded-md">
            All packages are up to date 
            </div> 
        </div>
       </div>
       <h1 className="text-xl font-medium mt-10 text-gray-400">Machine Status</h1>
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
        {/* <ProgressBar cpuUsage={systemInfo?.cpuUsage} /> */}
        <div>
    </div>
       </div>
    </div>
  )
}

export default page
