import React from 'react'

export default function HomeVideoCardSkeleton() {
  return (
    <div className="flex justify-center cursor-pointer">
      <div className="flex flex-col items-end w-full">
        <div className="size-full aspect-[271/152] rounded-lg bg-COLOR-9 animate-pulse"></div>
        <div className="absolute bottom-1 left-1 z-10 px-2 py-0.5 text-sm rounded-xl bg-body-bg-color bg-opacity-70 animate-pulse w-10 h-5"></div>
        <div className="flex gap-3 ps-1 pt-4 leftSpansHover w-full">
          <div className="size-9 bg-COLOR-9 animate-pulse rounded-full"></div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="w-1/2 h-5 bg-COLOR-9 animate-pulse rounded-full"></div>
            <div className="text-sm text-neutral-400 line-clamp-2 h-5 bg-COLOR-9 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
