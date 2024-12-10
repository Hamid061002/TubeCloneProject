import React from 'react'
import { useParams } from 'react-router-dom'
import { getVideoByID } from '../../services/youtubeAPI'
import { useQuery } from '@tanstack/react-query'

const Video = () => {
  const { id } = useParams()
  console.log(id);

  const { isLoading: gettingVideoById, data: video, error: getVideoError } = useQuery({
    queryKey: ['video'],
    queryFn: () => getVideoByID(id)
  })
  console.log(video);

  return (
    <div className='text-white'>
      {video?.title}
    </div>
  )
}

export default Video
