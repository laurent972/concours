import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-[60vh] gap-4 text-2xl text-blue-300'>

        
        <Image src="/img/loader.gif" alt="Loading..." width={100} height={100}/>
        Chargement...
    </div>
  )
}
