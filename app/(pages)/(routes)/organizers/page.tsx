"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
   click to see organiser page
    <button onClick={()=>router.push('/organizers/:1')} className=' border border-orange-600 text-orange-500 p-3 rounded-lg'>user</button>
    </div>
  )
}

export default page