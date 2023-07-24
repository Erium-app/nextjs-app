import React, {useState, useEffect} from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { toast } from 'react-toastify'

const Security = () => {

  const [ssid , setSsid] = useState('')
  const [wifiCurrentPassword, setWifiCurrentPassword] = useState('')
  const [wifiPassword, setWifiPassword] = useState('')
  const [wifiPasswordConfirm, setwifiPasswordConfirm] = useState('')
  const [hostCurrentPassword, setHostCurrentPassword] = useState('')
  const [hostNewPassword, setHostNewPassword] = useState('')
  const [hostPasswordConfirm, setHostPasswordConfirm] = useState('')

  useEffect(() => {
   console.log(hostCurrentPassword)
   console.log(hostNewPassword)
   console.log(hostPasswordConfirm)
  }, [hostPasswordConfirm])
  
  const handleWiFiChangePasswordSubmit = async () => {
    if (ssid === '' || wifiPassword === '') {
      toast.error("Fill all fields")
      return
    }

    if (wifiPassword !== wifiPasswordConfirm) {
      toast.error("Please re-enter the Password ")
      return
    }


    try {
      const res = await fetch('http://localhost:3000/api/changeWifiCredentials', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ssid, wifiCurrentPassword, wifiPassword })
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success("Connected to Wi-Fi Successfully")
        return
      } else {
        toast.error("Error occured while connecting")
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleHostChangePasswordSubmit = async () => {
    if (hostCurrentPassword === '' || hostNewPassword === '') {
      toast.error("Fill all fields")
      return
    }

    if (hostNewPassword !== hostPasswordConfirm) {
      toast.error("Please re-enter the Password ")
      return
    }


    try {
      const res = await fetch('http://localhost:3000/api/changeHostPassword', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({ hostCurrentPassword, hostNewPassword })
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success("Host Password Changed Successfully")
        return
      } else {
        toast.error("Error occured while Changing Host Password")
        return
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div>
     
     <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
      <div className='py-5 border-b border-gray-400 flex justify-start items-center gap-3'>
      <BsFillInfoCircleFill className='w-5 h-5  text-red-600'/>
        <span>Sme issues require your attention</span>
      </div>
      <div className='mt-4'>
      <span className=' text-sm flex justify-start items-center gap-2'> <RxCross2 className='w-5 h-5 text-red-700'/>Change host user password</span>
      <span className=' text-sm flex justify-start items-center gap-2'> <RxCross2 className='w-5 h-5 text-red-700'/>Change WiFi defualt password</span>
      </div>
     </div>

    
     <h1 className="my-4 text-2xl">Change host user Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className="text-sm  text-gray-500 mb-2">Please change the host pasword. The current pasword is the factory inseucre default. Changing it to a strong password will protect your EriumNode from external attackers.</p>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">Current Password</h2>
          <input
            type="text"
            onChange={(e)=> setHostCurrentPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">New Password</h2>
          <input
            type="password"
            onChange={(e)=> setHostNewPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">
            Confirm new Password
          </h2>
          <input
            type="password"
            onChange={(e)=> setHostPasswordConfirm(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <button className="text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 "
          onClick={()=>handleHostChangePasswordSubmit()}
          >
            Change Password
          </button>
        </div>
      </div>


      <h1 className="my-4 text-2xl">Change WiFI default Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className="text-sm  text-gray-500 mb-2">Please chainge tha WIFI credentials. The current password is the factory insecure default. changin it to a strong pasword will protect your EriumNode from external attackers.</p>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">SSID</h2>
          <input
            type="text"
            onChange={(e)=> setSsid(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">Current Password</h2>
          <input
            type="text"
            onChange={(e)=> setWifiCurrentPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">New Password</h2>
          <input
            type="newPassword"
            onChange={(e)=> setWifiPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">
            Confirm new Password
          </h2>
          <input
            type="newPassword"
            onChange={(e)=> setwifiPasswordConfirm(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <button className="text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 "
          onClick={()=>handleWiFiChangePasswordSubmit()}
          >
            Change Password
          </button>
        </div>
      </div>


      <h1 className="my-4 text-2xl">Change WiFI default Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className='text-sm'>Keep your host updated by performing host updates of outdated libraries and kernel</p>
      
        <button className="w-32 text-gray-500 border mt-4 border-gray-400 text-sm font-semibold rounded-md p-2 ">
            Host Update
          </button>
      </div>
    </div>
  )
}

export default Security