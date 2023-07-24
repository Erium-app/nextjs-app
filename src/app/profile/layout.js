import { Inter } from 'next/font/google'
import Provider from '@/SessionProvider'
import Navbar from "@/components/Navbar"
import {BiUser, BiCube} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
          <div className="w-screen max-h-screen flex justify-start items-start">
    <Navbar/>
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full h-12 flex justify-end items-center bg-white shadow-md shadow-gray-400">
        <div className="w-96 h-10 m-1 flex justify-end items-center p-5">
        <div className="w-8 h-8 rounded-full border-2 border-gray-500 mr-4"></div>
        <BiCube className="w-5 h-5 mx-2"/>
        <IoMdNotificationsOutline className="w-5 h-5 mx-2"/>
        <BiUser className="w-5 h-5 mx-2"/>
        </div>
      </div>
      <div className='w-full'>
        {children}
      </div>
    </div>
    </div>
        </Provider>
      </body>
    </html>
  )
}
