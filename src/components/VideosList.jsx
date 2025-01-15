import React from 'react'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'

export default function VideosList({ videos }) {
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
