'use client'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import randomstring from 'randomstring';
import { useRouter } from 'next/navigation';
import {BsShieldLock, BsInfoCircle} from 'react-icons/bs'
// import axios from 'axios';

const Register = () => {
  
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [recoveryCode, setRecoveryCode] = useState("")
  const [registerSuccess, setRegisterSuccess] = useState(false)

  useEffect(() => {
   console.log(registerSuccess)
  }, [registerSuccess])
  

  useEffect(() => {
    const rc = randomstring.generate({
      length: 32,
    });
    setRecoveryCode(rc)
  }, [])

  console.log(recoveryCode)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username === '' || email === '' || password === '' || recoveryCode === '') {
      toast.error("Fill all fields")
      return
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }


    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password, recoveryCode })
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success("Successfully registered the user")
        setRegisterSuccess(true)
        return
      } else {
        toast.error("Error occured while registering")
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <div className='w-[30rem]  h-[35rem] shadow-2xl shadow-gray-500 rounded-3xl'>
        {!registerSuccess?<>
        <h2 className='w-full text-center mt-24 text-2xl font-semibold m-2'>Register</h2>
        <form className='mt-10 w-4/5  mx-auto flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <input type="text" className='w-80 h-10 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-300' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
          <input type="email" className='w-80 h-10 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-300' placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className='w-80 h-10 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-300' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
          <div className=' w-4/5  gap-4 flex justify-between items-center'>
          <button  className='w-36 h-10 my-5 rounded-lg bg-blue-500 text-white text-lg font-medium' >Register</button>
          <button type='reset' className='w-36 h-10 my-5 rounded-lg border border-blue-500 text-blue-500 text-lg font-medium'> Reset </button>
          </div>
        </form>
        </>:<>
        <div className='mt-5 w-3/4  mx-auto flex flex-col justify-center items-center' >
          <div className='w-full gap-3 h-10 mb-2 rounded-md bg-blue-100 text-xs px-5 text-blue-500 flex justify-center items-center'> <BsInfoCircle className='w-5 h-5'/> User Registered Successfully</div>
        <div className='flex flex-col items-center justify-center font-bold'>
          <BsShieldLock className='w-24 h-24 mb-5 text-gray-300 '/>
          <h1 className="text-2xl text-center">Recovery Token</h1>
        </div>
        <div className='text-justify text-sm my-5'>
          Store the recovery token in a safe space. If you lose your password it will allow you to reset the admin account and register again
        </div>
        <h2 className='text-center text-base font-medium mb-5'>{recoveryCode}</h2>
        <div className='text-center bg-yellow-200 rounded-md px-4 py-2'>
          <p className='text-sm'>Warning! If you lose your recovery token you will have to directly access your machine.</p>
        </div>
        <button className=' bg-cyan-500 w-full text-white font-medium rounded-md  py-2 mt-5 text-center text-sm'>I've copied the recovery token</button>
        <button className=' text-cyan-500 w-full border-2 border-cyan-600 font-medium rounded-md  py-2 mt-5 text-center text-sm' 
        onClick={()=>{
          router.push('/login');
          setTimeout(() => {
          setRegisterSuccess(false)
        }, 700)
        }}
        >Login</button>
        </div>
        </>}
      </div>
    </div>
  )
}

export default Register