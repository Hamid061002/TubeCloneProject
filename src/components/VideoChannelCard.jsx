import React from 'react'
import ThreeDots from './icons/ThreeDots'
import { convertNumber, formatDistanceFromNow } from '../utils/helpers'

export default function VideoChannelCard({ video }) {
  const { title, coverImage, time, channelId, numViews, uploadDate } = video

  return (
    <figure className='flex flex-col gap-3'>
      <img className='aspect-[251/141] rounded-lg' src={coverImage} alt="image" />
      <figcaption className='flex flex-col'>
        <div className='flex justify-between text-sm pb-2 w-full'>
          <span className='line-clamp-2 text-sm'>{video.title}</span>
          <div className='flex-none'>
            <ThreeDots />
          </div>
        </div>
        <div className='flex flex-col text-COLOR-6 text-xs'>
          <div className='flex gap-1'>
            <span>{convertNumber(numViews)} views</span>
            <span>•</span>
            <span>{formatDistanceFromNow(uploadDate)}</span>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
