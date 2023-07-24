import React from 'react'
import { MdOpenInNew } from 'react-icons/md'
import { RiRestartLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

const SystemPackages = () => {
  const router = useRouter()
  const packages = [
    {name:'Bind', status:'RUNNING'},
    {name:'DappManager', status:'RUNNING'},
    {name:'Https', status:'RUNNING'},
    {name:'Ipfs', status:'RUNNING'},
    {name:'Wfi', status:'RESTARTING'},
    {name:'Wirgard', status:'RUNNING'},
  ]
  return (
    <div className='mt-5 bg-white border border-gray-300 rounded '>
      <div className='flex flex-row h-12 mt-2 p-4 justify-between items-center'>
        <div className='flex flex-row justify-center gap-5 items-center'>
          <label className='text-sm w-20 text-center text-gray-500'>Status</label>
          <label className='text-sm w-20 text-center text-gray-500'>Name</label>
        </div>

        <div className='flex flex-row justify-center gap-5 items-center'>
          <label className='text-sm w-20 text-center text-gray-500'>Open</label>
          <label className='text-sm w-20 text-center text-gray-500'>Restart</label>
        </div>
      </div>

     { packages.map((item, i)=>{
      return(
      <div className='flex flex-row h-12 p-4 justify-between items-center' key={i}>
      <div className='flex flex-row justify-center gap-5 items-center'>
        <label className={`text-xs font-semibold ${item.status === 'RUNNING'? 'bg-cyan-400': 'bg-yellow-400'} p-[0.125rem] rounded text-white w-20 text-center`}>{item.status}</label>
        <div className='flex flex-row justify-center items-center gap-2'> 
        <span className='w-6 h-6 rounded-full border-2 border-gray-400'></span>
        <span className='text-base font-medium text-center text-gray-800'>{item.name}</span>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-5 items-center'>
        <label className='w-20 flex justify-center items-center' onClick={()=>router.push(`/profile/package/${item.name}`)}><MdOpenInNew className='w-6 h-6 text-gray-500'/></label>
        <label className='w-20 flex justify-center items-center'><RiRestartLine className='w-6 h-6 text-gray-500'/></label>
      </div>
    </div>
    )
     })
     
      }
    </div>
  )
}

export default SystemPackages