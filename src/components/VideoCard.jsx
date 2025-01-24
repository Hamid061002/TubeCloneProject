import React from 'react'
import ThreeDots from './icons/ThreeDots'
import { convertNumber, formatDistanceFromNow } from '../utils/helpers'
import { useValuesContext } from '../contexts/ProviderContext'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'
import { getChannelByID } from '../services/youtubeAPI'

export default function VideoCard({ video, isTable, isSmallSize }) {
  const { isOpenSidebar, channels, gettingVideos } = useValuesContext()
  const { title, coverImage, time, channelId, numViews, uploadDate } = video

  function handleOption(e) {
    e.preventDefault()
  }

  const { isLoading: isFetchingChannels, data: channel, error: errorChannels } = useQuery({
    queryKey: ['channel'],
    queryFn: () => getChannelByID(channelId)
  })

  return (
    <>
      {
        isSmallSize ?
          channel?.name ?
            <div className='flex gap-2'>
              <figure className='flex-1 relative'>
                <img className='aspect-[84/47] rounded-lg' src={coverImage} alt="image" />
                <span className='absolute bottom-1 right-1 py-[2px] px-[6px] rounded-full bg-black bg-opacity-60 text-xs'>{time}</span>
              </figure>
              <div className='basis-56 flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <h3 className='text-sm text-COLOR-4 font-semibold line-clamp-2'>{title}</h3>
                  <button
                    onClick={handleOption}
                    className='flex-none flex justify-center items-center size-[22px] p-1 box-content rounded-full active:bg-COLOR-3'>
                    <BsThreeDotsVertical className='size-[18px]' />
                  </button>
                </div>
                <div className='flex flex-col text-COLOR-6 text-xs'>
                  <span></span>
                  <div className='flex flex-col'>
                    <span>{channel?.name}</span>
                    <div className='flex gap-1'>
                      <span>{convertNumber(numViews)} views</span>
                      <span>•</span>
                      <span>{formatDistanceFromNow(uploadDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            /* skeleton code */
            <div className='flex gap-2'>
              <div className='flex-1 relative'>
                <div className='aspect-[84/47] rounded-lg bg-COLOR-3 animate-pulse' />
                <span className='absolute bottom-1 right-1 py-[2px] px-[6px] rounded-full bg-COLOR-3 animate-pulse' />
              </div>
              <div className='basis-56 flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <div className='text-sm font-semibold line-clamp-2 bg-COLOR-3 animate-pulse h-4 w-32' />
                </div>
                <div className='flex flex-col gap-1 text-COLOR-6 text-xs'>
                  <div className='flex flex-col gap-1'>
                    <div className='bg-COLOR-3 animate-pulse h-4 w-24 rounded-lg' />
                    <div className='flex gap-1'>
                      <div className='bg-COLOR-3 animate-pulse h-4 w-16 rounded-lg' />
                      <div className='bg-COLOR-3 animate-pulse h-4 w-16 rounded-lg' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          :
          <div className="flex justify-center cursor-pointer">
            <div className="flex flex-col items-end w-full">
              {/* video cover */}
              <span className="relative timesShowHover">
                {
                  gettingVideos ?
                    <div className='w-[400px] h-[224px] rounded-lg bg-COLOR-6'></div>
                    :
                    <img src={video.coverImage} className={`rounded-lg ${isOpenSidebar ? 'w-[338px] h-[190px]' : 'w-[400px] h-[224px] '}`} />
                }
                <span
                  className="timesShow absolute bottom-1 left-1 z-10 px-2 py-0.5 text-sm rounded-xl bg-body-bg-color bg-opacity-70">6:33</span>
              </span>
              {/* discription */}
              <div className="flex gap-3 ps-1 pt-4 leftSpansHover w-full">
                {/* channel's profile  */}
                <div>
                  <img src={channels?.find(e => e.id == video.channelId).profile} className="size-9 rounded-full" width={36} />
                </div>
                {/* information */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between text-base pb-2 w-full">
                    <span>{video.title}</span>
                    <div className='flex-none'>
                      <ThreeDots />
                    </div>
                  </div>
                  <div className="text-sm text-neutral-400 line-clamp-2">{channels?.find(e => e.id == video.channelId)?.name}</div>
                  <span className="text-sm text-neutral-400"><span>{convertNumber(video.numViews)} views</span> • 3 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}
