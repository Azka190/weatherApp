import { cn } from '@/utils/cn';
import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {
    className?:string;
    value:string;
    onChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit:React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function Searchbox(props: Props) {
  return (
    <div>
        <form onSubmit={props.onSubmit} className={cn("flex gap-2 relative items-center justify-center h-10", props.className)}>
        <input type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder='Search location...' className='px-6 py-2 w-[230px] border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-full' />
        <button>
        <FaSearch className='text-black' />
        
        </button>
        </form>
    </div>
  )
}
