import React from 'react'

export default function ChannelSkeleton() {
  return (
    <div className='flex flex-col px-14'>
      <div className='w-full h-44 rounded-2xl bg-COLOR-9 animate-pulse'></div>
      <div className='flex gap-4 py-4'>
        <div className='size-40 rounded-full bg-COLOR-9 animate-pulse'></div>
        <div className='flex flex-col gap-4'>
          <div className='h-10 w-52 bg-COLOR-9 animate-pulse rounded-full'></div>
          <div className='flex items-center gap-1 text-sm'>
            <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
            <div className='flex items-center gap-2'>
              <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
              <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
            </div>
          </div>
          <div className='h-5 w-80 bg-COLOR-9 animate-pulse rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
