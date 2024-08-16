import React from 'react'

type Props = {}

export default function Navbar({} :Props) {
  return (
    <div>
        <nav className=' sticky top-0 left-0 z-50 '>
            <div className='h-16 pt-4'>
                <div className='flex items-center justify-center'>
                    <h2 className='text-black text-3xl items-center underline font-extrabold font-serif'>WEATHER APP</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-yellow-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </div>
            </div>
        </nav>
    </div>
  )
}

