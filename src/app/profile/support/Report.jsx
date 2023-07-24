import React from 'react'
import { FaDiscourse } from 'react-icons/fa'

const Report = () => {
  return (
    <div className=" mt-5">
      <div className="border text-sm border-gray-300 p-5 rounded bg-white mt-4">
        <p className='text-xs'>To help support team, the Report button will prefill a new forum topic with the information shows below.If you dont't want to share any information, use the Report without providing information button.</p>
        <p className='text-xs mt-4'>Befor report, please make sure that the topic does not alrady exist in our <span className='text-blue-400'>forum</span></p>
        <div className='mt-4 flex flex-col justify-center items-center '>
          <div className='w-full px-5 p-2 flex flex-row border border-gray-400 rounded-t-md bg-gray-200 justify-start items-center gap-2 text-gray-500'>
            <FaDiscourse className='w-6 h-6'/>
            <div className='flex justify-start items-center font-semibold gap-2'><span>{'  >  '}</span> New Topic <span>{'  >  '}</span> Body</div>
          </div>
          <div className='w-full p-5 flex flex-col border border-gray-400 rounded-b-md bg-gray-100 justify-start items-start gap-2 text-gray-500'>
            <span>Befor filing a new topic, please provide the following information.</span>
            <h2 className='text-3xl'>Core EriumNode Package versions</h2>
              <ol className='px-2 gap-2 flex flex-col justify-center items-start'>
                <li>&#x2022;  bind.epn.eriumnode.eth: 0.2.6</li>
                <li>&#x2022;  dappmanager.epn.eriumnode.eth: 0.2.64, commit: a27021fe</li>
                <li>&#x2022;  https.epn.eriumnode.eth: 0.1.4</li>
                <li>&#x2022;  ipfs.epn.eriumnode.eth: 0.2.19</li>
                <li>&#x2022;  wifi.epn.eriumnode.eth: 0.2.8</li>
                <li>&#x2022;  wireguard.epn.eriumnode.eth: 0.1.2</li>
              </ol>
              <h2 className='text-3xl'>System info</h2>
                <ol className='px-2'>
                  <li>&#x2022; Disk Usage: 34%</li>
                </ol>
          </div>
        </div>
        <div className='mt-4 flex flex-rwo justify-start items-center gap-4'>
          <button className=' p-2 px-4 bg-blue-400 rounded-md text-white'>Report</button>
          <button className=' p-2 px-4 border border-blue-400 rounded-md text-blue-400'>Report without providing information</button>
        </div>
      </div>
    </div>
  )
}

export default Report