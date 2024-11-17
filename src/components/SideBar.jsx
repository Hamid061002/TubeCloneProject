import React from 'react'
import IconHome from './icons/IconHome'
import IconShorts from './icons/IconShorts'
import IconSubscriptions from './icons/IconSubscriptions'
import IconAccount from './icons/IconAccount'
import { Link } from 'react-router-dom'

const SideBar = ({ isOpen }) => {
  return (
    <>
      {
        isOpen ?
          <div className='flex flex-col items-center  h-full w-[72px] px-1 py-2'>
            <Link className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-stone-800 w-full' to='home'>
              <IconHome className='flex-none size-6' />
              <span className='flex-none text-[10px]'>Home</span>
            </Link>
            <Link className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-stone-800 w-full' to=''>
              <IconShorts className='flex-none size-6' />
              <span className='flex-none text-[10px]'>Shorts</span>
            </Link>
            <Link className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-stone-800 w-full' to=''>
              <IconSubscriptions className='flex-none size-6' />
              <span className='flex-none text-[10px]'>Subscriptions</span>
            </Link>
            <Link className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-stone-800 w-full' to=''>
              <IconAccount className='flex-none size-6' />
              <span className='flex-none text-[10px]'>You</span>
            </Link>
          </div> :
          <ul className='bg-slate-900 h-full w-60'>
            
          </ul>
      }
    </>
  )
}

export default SideBar
