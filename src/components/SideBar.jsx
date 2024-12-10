import React, { useEffect, useRef } from 'react'
import IconHome from './icons/IconHome'
import IconShorts from './icons/IconShorts'
import IconSubscriptions from './icons/IconSubscriptions'
import IconAccount from './icons/IconAccount'
import { NavLink } from 'react-router-dom'
import IconHistory from './icons/IconHistory'
import IconPlaylist from './icons/IconPlaylist'
import IconGreater from './icons/IconGreater'
import IconVideo from './icons/IconVideo'
import { useValuesContext } from '../contexts/ProviderContext'

const SideBar = () => {
  const { isOpenSidebar } = useValuesContext()
  const navLinks1 = [
    {
      title: 'Home',
      icon: <IconHome className='flex-none size-6' />,
      url: '/home'
    },
    {
      title: 'Shorts',
      icon: <IconShorts className='flex-none size-6' />,
      url: '/',
    },
    {
      title: 'Subscriptions',
      icon: <IconSubscriptions className='flex-none size-6' />,
      url: '/',
    },
  ]

  const navLinks2 = [
    {
      title: 'History',
      icon: <IconHistory className='flex-none size-6' />,
      url: '/'
    },
    {
      title: 'Playlists',
      icon: <IconPlaylist className='flex-none size-6' />,
      url: '/',
    },
    {
      title: 'Your videos',
      icon: <IconVideo className='flex-none size-6' />,
      url: '/',
    },
  ]

  // useEffect(() => {
  //   const navLinks1 = Array.from(document.getElementsByClassName('navLink'))
  //   navLinks1.forEach(item => item.classList.contains('active') ? item.classList.add('bg-neutral-800') : item.classList.remove('bg-neutral-800'))
  // }, [])


  return (
    <>
      {
        isOpenSidebar ?
          <ul className='flex flex-col items-center h-full w-[72px] px-1 py-2'>
            <li className='w-full'>
              <NavLink className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-neutral-800 w-full' to='home'>
                <IconHome className='flex-none size-6' />
                <span className='flex-none text-[10px]'>Home</span>
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-neutral-800 w-full' to=''>
                <IconShorts className='flex-none size-6' />
                <span className='flex-none text-[10px]'>Shorts</span>
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-neutral-800 w-full' to=''>
                <IconSubscriptions className='flex-none size-6' />
                <span className='flex-none text-[10px]'>Subscriptions</span>
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink className='flex flex-col items-center gap-1 text-white py-[14px] rounded-lg hover:bg-neutral-800 w-full' to=''>
                <IconAccount className='flex-none size-6' />
                <span className='flex-none text-[10px]'>You</span>
              </NavLink>
            </li>
          </ul> :
          <div className='flex flex-col gap-3 divide-y divide-white divide-opacity-20 h-full w-60 p-3 text-white'>
            <ul>
              {
                navLinks1.map(item => (
                  <li key={item.title}>
                    <NavLink to={item.url} className='flex items-center gap-6 px-3 h-10 rounded-lg navLink hover:bg-neutral-800'>
                      {item.icon}
                      <span className='text-sm'>{item.title}</span>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            <ul className='pt-3'>
              <li>
                <NavLink to='/' className='flex items-center gap-2 px-3 h-10 rounded-lg navLink hover:bg-neutral-800'>
                  <span>You</span>
                  <IconGreater className='text-white fill-current' />
                </NavLink>
              </li>
              {
                navLinks2.map(item => (
                  <li key={item.title}>
                    <NavLink to={item.url} className='flex items-center gap-6 px-3 h-10 rounded-lg navLink hover:bg-neutral-800'>
                      {item.icon}
                      <span className='text-sm'>{item.title}</span>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
      }
    </>
  )
}

export default SideBar
