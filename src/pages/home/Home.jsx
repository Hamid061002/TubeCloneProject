import React from 'react'
import Filter from '../../components/Filter'
import HomeVideos from './HomeVideos'


const Home = () => {
  return (
    <div className='px-1 py-2 w-full h-full'>
      <Filter
        filterField='status'
        options={[
          {
            label: 'All',
            value: 'all',
          },
          {
            label: 'Sport',
            value: 'sport',
          },
          {
            label: 'Learning',
            value: 'learning',
          },
          {
            label: 'Funny',
            value: 'funny',
          },
          {
            label: 'Programming',
            value: 'programming',
          },
        ]} />
      <HomeVideos />
    </div>
  )
}

export default Home
