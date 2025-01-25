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
    queryKey: ['channel'],
    queryFn: () => getChannelByID(channelId)
  })

  return (
    <>
      {
        isSmallSize ?
          channel?.name ?
            <div className='flex gap-4 pe-5'>
              <figure className='basis-[500px] relative'>
                <img className='aspect-[500/280] rounded-lg' src={coverImage} alt="image" />
                <span className='absolute bottom-1 right-1 py-[2px] px-[6px] rounded-full bg-black bg-opacity-60 text-xs'>{time}</span>
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
