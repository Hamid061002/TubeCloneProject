import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'

const AppLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return (
    <div className='bg-bgColor h-screen overflow-hidden'>
      <NavBar setIsOpenSidebar={setIsOpenSidebar} />
      <div className='flex h-full'>
        <SideBar isOpen={isOpenSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
