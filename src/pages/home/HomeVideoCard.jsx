import React from 'react'
import ThreeDots from '../../components/icons/ThreeDots'
import { convertNumber, formatDistanceFromNow } from '../../utils/helpers'
import { useValuesContext } from '../../contexts/ProviderContext'

export default function HomeVideoCard({ video, isTable, isSmallSize }) {
  const { isOpenSidebar, channels, gettingVideos } = useValuesContext()
  const currentChannel = channels?.find(e => e.id == video.channelId)

  return (
    <>
      {
        isTable ? (
          isSmallSize ?
            <div></div> :
            <div></div>
        ) :
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
                  <img src={currentChannel?.profile} className="size-9 rounded-full" width={36} />
                </div>
                {/* information */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between text-base pb-2 w-full">
                    <span className='line-clamp-2'>{video.title}</span>
                    <div className='flex-none'>
                      <ThreeDots />
                    </div>
                  </div>
                  <div className="text-sm text-neutral-400 line-clamp-2">{currentChannel?.name}</div>
                  <span className="text-sm text-neutral-400"><span>{convertNumber(video.numViews)} views</span> • {formatDistanceFromNow(video.uploadDate)}</span>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}
