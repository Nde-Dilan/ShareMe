"use client"

import Login from '@components/Login'
import Home from '@container/Home'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const {data:session }=useSession();
  const router = useRouter();

  useEffect(()=>{
    localStorage.setItem('user',session?.user?.image);

  },[session])

  return (
    <div className="">
      
      {session?.user ?
        (
          router.push('/home')
        )
        :
      (
        <Login/>
      )}
    </div>
    
  )
}

export default LoginPage