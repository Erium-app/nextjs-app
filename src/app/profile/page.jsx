'use client'

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
  return (
    <div>
      Signed in as {session.user.email} <br/>
     <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
  }
}

export default page