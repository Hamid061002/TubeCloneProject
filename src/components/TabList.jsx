import React from 'react'
import { Link } from 'react-router-dom'

const tabListItems = [
  {
    title: 'All',
    path: '/',
    isActive: true
  },
  {
    title: 'Sport',
    path: '/',
    isActive: false
  },
  {
    title: 'Learning',
    path: '/',
    isActive: false
  },
  {
    title: 'Funny',
    path: '/',
    isActive: false
  },
  {
    title: 'Programming',
    path: '/',
    isActive: false
  },
]

export default function TabList() {
  return (
    <ul className='flex gap-3 py-3 text-white text-sm font-medium'>
      {
        tabListItems.map(item => <li key={item} className=''><Link className={`px-3 py-2 rounded-lg ${item.isActive ? 'bg-COLOR-4 text-COLOR-5' : 'bg-white bg-opacity-10'}`} to={item.path}>{item.title}</Link></li> )
      }
    </ul>
  )
}
