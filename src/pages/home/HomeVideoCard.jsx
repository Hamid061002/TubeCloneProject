import React from 'react'
import ThreeDots from '../../components/icons/ThreeDots'
import { convertNumber, formatDistanceFromNow } from '../../utils/helpers'
import { useValuesContext } from '../../contexts/ProviderContext'
import { Link } from 'react-router-dom'
import HomeVideoCardSkeleton from './HomeVideoCardSkeleton'

export default function HomeVideoCard({ video }) {
  const { isOpenSidebar, channels, gettingVideos } = useValuesContext()
  const currentChannel = channels?.find(e => e.id == video.channelId)

  return (
    <>
      {
        currentChannel?.profile && video?.coverImage ?
          <div className="flex justify-center cursor-pointer">
            <div className="flex flex-col items-end w-full">
              {/* video cover */}
              <figure className="relative timesShowHover">
                <img src={video.coverImage} className={`rounded-lg aspect-[271/152]`} />
                <span className="timesShow absolute bottom-1 left-1 z-10 px-2 py-0.5 text-sm rounded-xl bg-black bg-opacity-70">{video.time}</span>
              </figure>
              {/* discription */}
              <div className="flex gap-3 ps-1 pt-4 leftSpansHover w-full">
                {/* channel's profile  */}
                <Link to={`/channel/${currentChannel?.publicId}`}>
                  <img src={currentChannel?.profile} className="size-9 rounded-full" width={36} />
                </Link>
                {/* information */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between text-sm pb-2 w-full">
                    <span className='line-clamp-2'>{video.title}</span>
                    <div className='flex-none'>
                      <ThreeDots />
                    </div>
                  </div>
                  <Link to={`/channel/${currentChannel?.publicId}`} className="text-xs text-neutral-400 line-clamp-2">{currentChannel?.name}</Link>
                  <span className="text-xs text-neutral-400"><span>{convertNumber(video.numViews)} views</span> • {formatDistanceFromNow(video.uploadDate)}</span>
                </div>
              </div>
            </div>
          </div> :
          <HomeVideoCardSkeleton />
      }
    </>
  )
}
