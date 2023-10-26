"use client"

import Home from '@container/Home';
import { useSession } from 'next-auth/react';


const HomePage = () => {
  return (
    <Home />
  )
}

export default HomePage