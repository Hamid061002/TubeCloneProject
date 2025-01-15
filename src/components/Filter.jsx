import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentFilter = searchParams.get(filterField) || options.at(0).value

  function handleClickFilter(value) {
    searchParams.set(filterField, value)
    if (searchParams.get('page')) searchParams.set('page', 1)
    setSearchParams(searchParams)
  }

  return (
    <div className='overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-3 text-white text-sm font-medium'>
        {
          options.map(item =>
            item.value &&
            <button
              onClick={() => handleClickFilter(item.value)}
              className={`flex-none px-3 py-2 rounded-lg ${item.value == currentFilter ? 'bg-COLOR-4 text-COLOR-5' : 'bg-white bg-opacity-10'}`}
            >
              {item.label}
            </button>
          )
        }
      </div>
    </div>
  )
}
