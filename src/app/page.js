import Link from "next/link"
// import Navbar from "@/components/Navbar"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-full h-[80%] flex flex-col justify-start items-center text-center'>
      <h1 className='text-7xl font-extrabold'>Welcome to Erium Node</h1>
      <h2 className='text-5xl mt-10 font-bold'>Please Login to continue....</h2>
      <div className='w-[80vh] h-[40vh] mt-10 flex justify-between items-center'>
        <Link href={'/login'}><button className='bg-blue-400 text-white text-lg font-semibold rounded-xl w-60 h-16'>Login</button></Link>
        <Link href={'/register'}><button className='border border-blue-400 text-blue-400 text-lg font-semibold rounded-xl w-60 h-16'>Register</button></Link>
      </div>
      </div>
    </main>
    // <Navbar/>

  )
}
