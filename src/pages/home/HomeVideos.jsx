import React from 'react'
import { useValuesContext } from '../../contexts/ProviderContext'
import ErrorConnection from '../../components/icons/ErrorConnection'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import HomeVideoCard from './HomeVideoCard'

export default function HomeVideos() {
  const { isOpenSidebar, videos, getVideosError, gettingVideos } = useValuesContext()

  return (
    <>
      {
        gettingVideos ? <Spinner /> :
          getVideosError ?
            <div className='w-full h-full'>
              <ErrorConnection />
            </div> :
            <div className={`grid gap-4 pt-6 pb-10 pe-6 w-full text-white ${isOpenSidebar ? 'grid-cols-5' : 'grid-cols-4'}`}>
              {
                videos?.map(item => (<Link key={item.id} to={`/video/${item.id}`}><HomeVideoCard video={item} /></Link>))
              }
            </div>
      }
    </>
  )
}
