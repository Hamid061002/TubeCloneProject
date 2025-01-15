import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getChannelByID } from '../../services/youtubeAPI'

const Channel = () => {
  const { id } = useParams()

  const { isLoading: isFetchingChannels, data: channel, error: errorChannels } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => getChannelByID(id)
  })

  return (
    <div className='text-COLOR-4'>
      channel :{channel?.name}
    </div>
  )
}

export default Channel
