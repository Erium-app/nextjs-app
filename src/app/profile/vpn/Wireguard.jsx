"use client"
import { useState } from 'react'
import {BsDownload, BsInfoCircleFill, BsQrCode} from 'react-icons/bs'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import {MdDelete} from 'react-icons/md'

const Wireguard = () => {
    const [isCliked, setIsCliked] = useState(false)
    const handleLink =()=>{
        setIsCliked(true)
    }
    return (
        <div className='w-full mt-5'>
            <div className='flex flex-row justify-start items-center text-sm'>
                Create a VPN profile for each of your devices(laptop, phone)so you can access your EriumNode from an external network. Learn more about VPN at: 
                <BsInfoCircleFill className='m-1 w-5 h-5 fill-blue-400'/>
                <a href="" className=" text-xs text-blue-400">How to connect to your EriumNode VPN</a>
            </div>
            {
                !isCliked ?<>
                
            <div className='flex flex-row mt-4'>
                <input type="text" placeholder="Devices's unique name" className='p-2 outline-none text-sm border rounded-l border-gray-300 w-11/12 ' />
                <button className='p-1 bg-blue-400 text-white w-1/12 rounded-r'>Add device</button>
            </div>
            <div className='flex flex-col bg-white border rounded border-gray-300 justify-between p-1 mt-4'>
                <div className='flex w-full text-xs px-2 justify-between items-center'>
                    <label className='m-1 w-16 text-neutral-500'>Name</label>
                    <div className='flex gap-2 justify-end items-center'>
                    <label className='mx-2 w-16 text-neutral-500'>Credentials</label>
                    <label className='mx-2 w-16 text-neutral-500'>Remove</label>
                    </div>
                </div>

                <div className='flex w-full  px-2 justify-between items-center'>
                    <label className='m-1 text-base text-gray-800'>dappnode_admin</label>
                    <div className='flex gap-2 justify-end items-center'>
                    <label className='m-1 w-20'>
                    <button className='border text-sm border-gray-300 cursor-pointer text-gray-800 p-1 rounded' onClick={()=>handleLink()}>Get Link</button>
                    </label>
                    <label className='m-1 w-16 text-center'>
                    <MdDelete className='m-2 w-6 h-6 text-neutral-500'/>
                    </label>
                    </div>
                </div>
            </div>
                </>
                :
                <>
                <h1 className='text-2xl mt-4'>VPN eriumnode_admine</h1>
                 <div className='flex flex-col bg-white border rounded border-gray-300 justify-between p-5 mt-4'>
                <span className='font-medium'>eriumnode_admin</span>
                <p className='text-sm mt-4'>Allow the following VPN configration in your wirgard client</p>
                <p className='text-sm mt-4 flex justify-start items-center gap-1' >In case you experiance issue connecting from the same network as your eriumnode, use the loacl credentials.<span className='text-blue-400'>Show local credentials</span></p>

                <div className='flex justify-start items-center gap-5 my-4'>
                    <button className='border-gray-400 border rounded-md p-2 px-4 flex justify-center items-center gap-2'><BsDownload className='w-5 h-5'/>Download</button>
                    <button className='border-gray-400 border rounded-md p-2 px-4 flex justify-center items-center gap-2'><HiOutlineClipboardCopy className='w-5 h-5'/>Copy cofig</button>
                    <button className='border-gray-400 border rounded-md p-2 px-4 flex justify-center items-center gap-2'><BsQrCode className='w-5 h-5'/>Show config QR code</button>
                </div>
            
                <span className='text-sx'>VPN credentials</span>

                <div className='w-full h-56 bg-gray-100 rounded-md mt-4'></div>

                <div className='w-full h-10 mt-4 bg-gray-200 text-sm rounded-md flex p-4 justify-start items-center' >
                    <span >Beware of shoulder surfing attacks (unsolicated observer), This data grants access to your eriumnode</span>
                </div>
            </div>
                </>
            }
            
        
           
        </div>
    )
  }

  export default Wireguard