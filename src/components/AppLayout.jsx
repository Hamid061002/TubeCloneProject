import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'
import SideBarVideoPage from './SideBarVideoPage'

const AppLayout = () => {
  const path = useLocation()
  const isVideoPage = path.pathname.includes('/video') && !path.pathname.includes('/videos')

  return (
    <div className='bg-bgColor h-screen -mb-7 overflow-y-hidden relative'>
      <NavBar />
      <div className='flex gap-5 h-full'>
        <div className='flex-none'>
          {
            isVideoPage ? <SideBarVideoPage />
              : <SideBar />
          }
        </div>
        <div className='overflow-y-scroll w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
