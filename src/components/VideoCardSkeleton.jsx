import React from 'react'

export default function VideoCardSkeleton() {
  return (
    <div className='flex gap-2 pe-5'>
      <div className='basis-[500px] relative'>
        <div className='aspect-[500/280] rounded-lg bg-COLOR-9 animate-pulse' />
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='text-sm font-semibold line-clamp-2 bg-COLOR-9 animate-pulse h-7 w-[500px] rounded-full' />
        </div>
        <div className='w-40 h-4 rounded-full bg-COLOR-9'></div>
        <div className='flex flex-col gap-2 text-COLOR-6 text-xs'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <div className='size-6 rounded-full bg-COLOR-9 animate-pulse'></div>
              <div className='w-24 h-4 rounded-full bg-COLOR-9'></div>
            </div>
          </div>
        </div>
        <div className='w-80 h-4 rounded-full bg-COLOR-9'></div>
      </div>
    </div>
  )
}
