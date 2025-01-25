import React from 'react'
import { useValuesContext } from '../contexts/ProviderContext'
import IconSearch from './icons/IconSearch'
import { useSearchParams } from 'react-router-dom'

export default function Search({ query, handleSearch }) {
  const { setIsFocusInput, isFocusInput } = useValuesContext()

  return (
    <div className='flex items-center'>
      <div className={`flex items-center gap-3 px-4 py-2 w-[500px] h-full rounded-y-full border-y  bg-COLOR-2 relative ${isFocusInput ? 'border-blue-400 border-e' : 'rounded-s-full border-s border-COLOR-3'}`}>
        {isFocusInput && <IconSearch className={`size-5 absolute -left-8 h-full rounded-s-full ps-4 box-content border-s border-y bg-COLOR-2 ${isFocusInput ? 'border-blue-400' : 'border-COLOR-3'}`} />}
        <input
          className='bg-transparent outline-none placeholder:text-neutral-400 w-full'
          onFocus={() => setIsFocusInput(true)}
          onBlur={() => setIsFocusInput(false)}
          placeholder='Search'
          onChange={handleSearch}
          value={query}
          type="search"
        />
      </div>
      <button className='bg-neutral-800 py-2 px-5 border border-neutral-800 rounded-r-full'>
        <IconSearch className='size-6' />
      </button>
    </div>
  )
}
