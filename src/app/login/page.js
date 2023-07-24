'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'
import {FcGoogle } from 'react-icons/fc'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    useEffect(() => {
        console.log(email)
        console.log(password)
    }, [password])
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })
            console.log(res)
            if (res?.error == null) {
                router.push("profile/dashboard")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Google Handler function
    // async function handleGoogleSignin(){
    //     signIn('google', { callbackUrl : "http://localhost:3000/profile"})
    // }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[30rem]  h-[35rem] shadow-2xl shadow-gray-500 rounded-3xl'>
                <h2 className='w-full text-center mt-24 text-2xl font-semibold m-2'>Log In</h2>
                <form className='mt-10 pb-5 border-b border-gray-300 w-4/5 mx-auto flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <input type="email" className='w-80 h-10 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-300' placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className='w-80 h-10 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-300' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className='w-36 h-12 my-5 rounded-lg bg-blue-500 text-white text-lg font-medium'>Log in</button>
                    <Link className='w-50 h-auto p-2 text-center' href='/register'>
                        Don&apos;t have an account? <br /> <span className='mt-1 text-sm text-blue-600'>Register now.</span>
                    </Link>
                </form>

                {/* <div className='w-full my-5' >
                    <button type='button' onClick={handleGoogleSignin} className="w-64 mx-auto px-8 h-12 transition-transform ease-linear duration-300 hover:shadow-xl hover:shadow-gray-400 hover:-translate-x-1 hover:-translate-y-1 hover:border-none flex justify-between items-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold ">
                     <span>Sign In with Google</span> <FcGoogle className='w-6 h-6'/>
                    </button>
                </div> */}

            </div>
            <ToastContainer />
        </div>
    )
}

export default Login