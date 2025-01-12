import React from 'react'
import IconHamburgerMenu from './icons/IconHamburgerMenu'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import IconGreater from './icons/IconGreater'
import IconHome from './icons/IconHome'
import IconShorts from './icons/IconShorts'
import IconSubscriptions from './icons/IconSubscriptions'
import IconHistory from './icons/IconHistory'
import IconPlaylist from './icons/IconPlaylist'
import IconVideo from './icons/IconVideo'
import { useValuesContext } from '../contexts/ProviderContext'

export default function SideBarVideoPage() {
  const { isOpenSidebarVideoPage, setIsOpenSidebarVideoPage } = useValuesContext()

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
      url: '/'
    },
  ]

  return (
    <>
      <div
        onClick={() => {setIsOpenSidebarVideoPage(e => !e)}}
        className={`fixed top-0 size-full backdrop-brightness-50 transition-all duration-300 ${isOpenSidebarVideoPage ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
      </div>
      <div className={`fixed top-0 transition-all duration-300 w-60 ${isOpenSidebarVideoPage ? 'translate-x-0 opacity-100' : '-translate-x-60 opacity-0'}`}>
        <div className='flex flex-col gap-3 divide-y divide-white divide-opacity-20 h-screen bg-COLOR-5 w-60 p-3 text-white'>
          <div className='flex items-center gap-4'>
            <button onClick={() => setIsOpenSidebarVideoPage(e => !e)}>
              <IconHamburgerMenu className='rounded-full hover:bg-stone-800 text-white size-6 p-2 box-content' />
            </button>
            <Link to='home'><Logo className='text-white fill-current' /></Link>
          </div>
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
      </div>
    </>
  )
}
