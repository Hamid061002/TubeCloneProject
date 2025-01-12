import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'
import SideBarVideoPage from './SideBarVideoPage'

const AppLayout = () => {
  const path = useLocation()
  const isVideoPage = path.pathname.includes('video')

  return (
    <div className='bg-bgColor h-screen overflow-hidden relative'>
      <NavBar />
      <div className='flex gap-5 h-full'>
        <div className='flex-none'>
          {
            isVideoPage ? <SideBarVideoPage />
              : <SideBar />
          }
        </div>
        <div className='overflow-scroll w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
