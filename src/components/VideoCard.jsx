import React from 'react'
import ThreeDots from './icons/ThreeDots'
import { convertNumber, formatDistanceFromNow } from '../utils/helpers'
import { useValuesContext } from '../contexts/ProviderContext'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'
import { getChannelByID } from '../services/youtubeAPI'
import VideoCardSkeleton from './VideoCardSkeleton'

export default function VideoCard({ video, isSmallSize }) {
  const { isOpenSidebar, channels, gettingVideos } = useValuesContext()
  const { title, coverImage, time, channelId, numViews, uploadDate, description } = video

  function handleOption(e) {
    e.preventDefault()
  }

  const { isLoading: isFetchingChannels, data: channel, error: errorChannels } = useQuery({
    queryKey: ['channel', video],
    queryFn: () => getChannelByID(channelId)
  })

  return (
    <>
      {
        isSmallSize ?
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
          channel?.name ?
            <div className='flex gap-4 pe-5'>
              <figure className='basis-[500px] relative'>
                <img className='w-full aspect-[500/280] rounded-lg' src={coverImage} alt="image" />
                <span className='absolute bottom-1 right-1 py-[2px] px-[6px] rounded-full bg-black bg-opacity-60 text-xs text-COLOR-4 font-semibold'>{time}</span>
              </figure>
              <div className='flex-1 flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <h3 className='text-lg text-COLOR-4 line-clamp-2'>{title}</h3>
                  <button
                    onClick={handleOption}
                    className='flex-none flex justify-center items-center size-5 box-content rounded-full active:bg-COLOR-3'>
                    <BsThreeDotsVertical className='size-5 text-COLOR-4' />
                  </button>
                </div>
                <div className='flex flex-col text-COLOR-6 text-xs'>
                  <div className='flex gap-1'>
                    <span>{convertNumber(numViews)} views</span>
                    <span>•</span>
                    <span>{formatDistanceFromNow(uploadDate)}</span>
                  </div>
                  <figure className='flex items-center gap-2 py-3'>
                    <img className='size-6 rounded-full' src={channel?.profile} alt="" />
                    <figcaption>{channel?.name}</figcaption>
                  </figure>
                  <p className='line-clamp-1'>{description}</p>
                </div>
              </div>
            </div> :
            <VideoCardSkeleton />
      }
    </>
  )
}
