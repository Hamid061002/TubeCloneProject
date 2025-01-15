import React from 'react'

export default function Error({ error }) {
  console.log(error);
  return (
    <div className='flex flex-col items-center justify-center w-full py-56'>
      <p className='text-3xl font-semibold text-COLOR-4'>{error?.message}!</p>
      <p className='text-COLOR-6'>{error}</p>
    </div>
  )
}
