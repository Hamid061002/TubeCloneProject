import React from 'react'
import TabList from '../../components/TabList'
import VideosList from '../../components/VideosList'

const Home = () => {
  return (
    <div className='px-1 py-2 w-full'>
      <TabList />
      <VideosList />
    </div>
  )
}

export default Home
