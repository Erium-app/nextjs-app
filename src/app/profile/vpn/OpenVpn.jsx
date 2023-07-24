import {BsInfoCircleFill} from 'react-icons/bs'

const OpenVpn = () => {
    return (
        <div className=' mt-5'>
            <div className='px-1 flex flex-row justify-start items-center text-sm'>
                    Create a VPN for each of tour devices, so you can access your EriumNode from an external network. Learn more about VPN at:
                <BsInfoCircleFill className=' mx-2 w-5 h-5 fill-blue-400'/>
                <a href="" className="text-xs text-blue-400">How to connect to your EriumNode VPN</a>
            </div>
            <div className='py-4 p-2 mt-4 text-sm bg-white border border-gray-300 rounded my-2s'>
                <p>
                    You must 
                    <a href="" className="text-blue-400 hover:underline" > install the OpenVPN package </a>
                    to use this feature
                </p>
            </div>
        </div>    
    )
  }

  export default OpenVpn