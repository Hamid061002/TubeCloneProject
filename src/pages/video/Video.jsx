import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChannelByID, getVideoByID, getVideos } from '../../services/youtubeAPI'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../components/Spinner'
import VideosList from '../../components/VideosList'
import toast from 'react-hot-toast'
import Filter from '../../components/Filter'
import { useValuesContext } from '../../contexts/ProviderContext'
import VideoDetail from './VideoDetail'
import Error from '../../components/Error'

export default function Video() {
  const { id } = useParams()

  const { isLoading: isFetchingVideo, data: video, error: errorVideo } = useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideoByID(id)
  })

  const { isLoading: isFetchingChannels, data: channel, error: errorChannels } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => getChannelByID(video?.channelId)
  })

  const { videos } = useValuesContext()

  const filterChannelName = channel?.name.split(' ').join('-')

  return (
    (isFetchingVideo && isFetchingChannels) ? <div className='flex justify-center items-center size-full'>
      <Spinner />
    </div> :
      errorVideo || errorChannels ? <Error error={errorVideo || errorChannels} /> :
        <div className='grid grid-cols-[916fr_402fr] px-6 justify-center gap-6 pt-6 pb-20 text-white'>
          <VideoDetail video={video} channel={channel} />
          <div className='flex flex-col gap-4'>
            <Filter
              filterField="status"
              options={[
                { value: "all", label: "All" },
                { value: filterChannelName, label: channel?.name },
                { value: "related", label: "Related" },
                { value: "for-you", label: "For you" },
                { value: "recently-uploaded", label: "Recently uploaded" },
              ]}
            />
            <VideosList videos={videos} />
          </div>
        </div>
  )
}

