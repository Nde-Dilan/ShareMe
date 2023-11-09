"use client"
import { signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import {FcGoogle} from 'react-icons/fc';

const GoogleLoginBtn = () => {
  const router = useRouter();
  return (
    <button
    type='button'
    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
    onClick={()=>{signIn('google', { callbackUrl: 'http://localhost:3000/home' })}}
    >
      <FcGoogle/> {` `}
      Sign in with Google
    </button>
  )
}

export default GoogleLoginBtn;