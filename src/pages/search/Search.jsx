import React, { useEffect } from 'react'
import { useValuesContext } from '../../contexts/ProviderContext'
import VideosList from '../../components/VideosList'
import Filter from '../../components/Filter'
import { useQuery } from '@tanstack/react-query'
import getVideosSearch from '../../services/youtubeAPI'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const { query } = useValuesContext()

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    searchParams.set('query', query)
    setSearchParams(searchParams)
  }, [query])

  const { data: searchVideos } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getVideosSearch(query)
  })

  const searchedVideos = searchVideos

  return (
    <div className='flex flex-col gap-6 pt-3'>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "related", label: "Related" },
        ]}
      />
      <VideosList videoSize='small' videos={searchedVideos} />
    </div>
  )
}