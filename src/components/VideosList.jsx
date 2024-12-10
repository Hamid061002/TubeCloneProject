import React, { useEffect, useState } from 'react'
import { getChannels, getVideos } from '../services/youtubeAPI'
import { useQuery } from '@tanstack/react-query'
import { useValuesContext } from '../contexts/ProviderContext'
import ErrorConnection from './icons/ErrorConnection'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

export default function VideosList() {
  const { isOpenSidebar, videos, getVideosError } = useValuesContext()

  return (
    <>
      {
        getVideosError ?
          <div className='w-full h-full'>
            <ErrorConnection />
          </div> :
          <div className={`grid gap-4 pt-6 pb-10 pe-6 w-full text-white ${isOpenSidebar ? 'grid-cols-4' : 'grid-cols-3'}`}>
            {
              videos?.map(item => (<Link to={`/video/${item.id}`}><VideoCard key={item} video={item} /></Link>))
            }
          </div>
      }
    </>
  )
}
