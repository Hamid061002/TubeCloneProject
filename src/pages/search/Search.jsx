import React from 'react'
import { useValuesContext } from '../../contexts/ProviderContext'
import VideosList from '../../components/VideosList'

const Search = () => {
  const { videos } = useValuesContext()

  return (
    <div>
      <VideosList videoSize='small' videos={videos} />
    </div>
  )
}

export default Search
