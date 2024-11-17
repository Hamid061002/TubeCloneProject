import React, { useState } from 'react'
import IconHamburgerMenu from './icons/IconHamburgerMenu'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import IconSearch from './icons/IconSearch'
import IconMicrophone from './icons/IconMicrophone'
import IconNotification from './icons/IconNotification'

const NavBar = ({ setIsOpenSidebar }) => {
  const [isFocusInput, setIsFocusInput] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const imageUrl = 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'

  return (
    <div className='flex justify-between items-center h-14 px-4'>
      <div className='flex items-center gap-4'>
        <button className='p-2 rounded-full hover:bg-stone-800'><IconHamburgerMenu className='text-white size-6' onClick={() => setIsOpenSidebar(e => !e)} /></button>
        <Link to='home'><Logo className='text-white fill-current' /></Link>
      </div>
      <form className='flex items-center gap-4 rounded-full text-white'>
        <div className='flex items-center'>
          <div className={`flex items-center gap-3 px-4 py-2 w-[500px] h-full rounded-y-full border-y  bg-colorDark relative ${isFocusInput ? 'border-blue-400 border-e' : 'rounded-s-full border-s border-colorLigthDark'}`}>
            {isFocusInput && <IconSearch className={`size-5 absolute -left-8 h-full rounded-s-full ps-4 box-content border-s border-y bg-colorDark ${isFocusInput ? 'border-blue-400' : 'border-colorLigthDark'}`} />}
            <input
              className='bg-transparent outline-none placeholder:text-neutral-400'
              onFocus={() => setIsFocusInput(true)}
              onBlur={() => setIsFocusInput(false)}
              placeholder='Search'
              type="search"
            />
          </div>
          <button className='bg-neutral-800 py-2 px-5 border border-neutral-800 rounded-r-full'>
            <IconSearch className='size-6' />
          </button>
        </div>
        <button className='bg-neutral-800 py-2 px-2 rounded-full hover:bg-neutral-700'>
          <IconMicrophone />
        </button>
      </form>
      <div className='flex items-center gap-4'>
        <button className='hover:bg-neutral-800 rounded-full p-2'><IconNotification isNotification={isNotification} className='text-white fill-current' /></button>
        <button className='overflow-hidden rounded-full mx-2'><img className='object-cover size-8' src={imageUrl} alt="" /></button>
      </div>
    </div>
  )
}

export default NavBar
