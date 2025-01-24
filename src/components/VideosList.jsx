import React from 'react'
import { Link, useParams } from 'react-router-dom'
import VideoCard from './VideoCard'
import { useQuery } from '@tanstack/react-query'
import { getChannelByPublicId } from '../services/youtubeAPI'
import VideoChannelCard from './VideoChannelCard'

export default function VideosList({ videos, isChannelVideos = false }) {
  const { publicId } = useParams()

  const { data: channel } = useQuery({
    queryKey: ['channel', publicId],
    queryFn: () => getChannelByPublicId(publicId)
  })

  const thisChannelVideos = videos?.filter(video => video.channelId == channel?.id)

  if (isChannelVideos) return (
    <div className="grid grid-cols-4 gap-4 pb-20">
      {thisChannelVideos?.map(video =>
        <Link
          key={video.id}
          to={`/video/${video.id}`}
        >
          <VideoChannelCard video={video} />
        </Link>)}
    </div>
  )

  return (
    <div className='flex flex-col gap-4'>
      {
        videos?.map(item => (
          <Link
            key={item.id}
            to={`/video/${item.id}`}
          >
            <VideoCard video={item} isSmallSize={true} />
          </Link>
        ))
      }
    </div>
  )

}
