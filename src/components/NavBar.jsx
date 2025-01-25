import React, { useState } from 'react'
import IconHamburgerMenu from './icons/IconHamburgerMenu'
import Logo from './Logo'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import IconSearch from './icons/IconSearch'
import IconMicrophone from './icons/IconMicrophone'
import IconNotification from './icons/IconNotification'
import { useValuesContext } from '../contexts/ProviderContext'
import Search from './Search'

const NavBar = () => {
  const { setIsOpenSidebar, isNotification, setIsOpenSidebarVideoPage } = useValuesContext()
  const imageUrl = 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  const { query, setQuery } = useValuesContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleSearch(e) {
    setQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (pathname != '/search') navigate('/search')
  }

  return (
    <div className='flex justify-between items-center h-14 px-4'>
      <div className='flex items-center gap-4'>
        <button onClick={() => {
          setIsOpenSidebarVideoPage(e => !e)
          setIsOpenSidebar(e => !e)
        }}>
          <IconHamburgerMenu className='rounded-full hover:bg-stone-800 text-white size-6 p-2 box-content' />
        </button>
        <Link to='home'><Logo className='text-white fill-current w-28' /></Link>
      </div>
      <div className='flex items-center gap-4'>
        <form onSubmit={handleSubmit} className='rounded-full text-white'>
          <Search handleSearch={handleSearch} query={query} />
        </form>
        <button className='bg-neutral-800 py-2 px-2 rounded-full hover:bg-neutral-700'>
          <IconMicrophone />
        </button>
      </div>
      <div className='flex items-center gap-4'>
        <button className='hover:bg-neutral-800 rounded-full p-2'><IconNotification isNotification={isNotification} className='text-white fill-current' /></button>
        <button className='overflow-hidden rounded-full mx-2'><img className='object-cover size-8' src={imageUrl} alt="" /></button>
      </div>
    </div>
  )
}

export default NavBar
