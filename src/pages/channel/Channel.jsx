import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getChannelByPublicId } from '../../services/youtubeAPI'
import { convertNumber } from '../../utils/helpers'
import { useValuesContext } from '../../contexts/ProviderContext'
import Modal from '../../components/Modal'
import IconGlobal from '../../components/icons/IconGlobal'
import IconVideo from '../../components/icons/IconVideo'
import IconInfo from '../../components/icons/IconInfo'
import { format } from 'date-fns'
import Filter from '../../components/Filter'

const Channel = () => {
  const { publicId: paramsPublicId } = useParams()
  const [isSubscribe, setIsSubscribe] = useState(false)
  const currentUrl = window.location.href

  const { isLoading: isFetchingChannels, data: channel = {}, error: errorChannels } = useQuery({
    queryKey: ['channel', paramsPublicId],
    queryFn: () => getChannelByPublicId(paramsPublicId)
  })

  const { profile, name, publicId, numSubscribers, about, numVideos, createDate } = channel

  /* skeleton code */
  if (isFetchingChannels) return (
    <div className='flex gap-4 py-4 px-14'>
      <div className='size-40 rounded-full bg-COLOR-9 animate-pulse'></div>
      <div className='flex flex-col gap-4'>
        <div className='h-10 w-52 bg-COLOR-9 animate-pulse rounded-full'></div>
        <div className='flex items-center gap-1 text-sm'>
          <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
          <div className='flex items-center gap-2 text-COLOR-12'>
            <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
            <div className='h-5 w-20 bg-COLOR-9 animate-pulse rounded-full'></div>
          </div>
        </div>
        <div className='h-5 w-80 bg-COLOR-9 animate-pulse rounded-full'></div>
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-6 text-COLOR-4'>
      <div className='h-44 rounded-2xl bg-COLOR-4 overflow-hidden mx-14'><img className='object-cover size-full' src={profile} alt="" /></div>
      <div className='flex gap-4 px-14'>
        <figure>
          <img className='size-40 rounded-full' src={profile} alt="" />
        </figure>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold'>{name}</h2>
          <div className='flex items-center gap-1 text-sm'>
            <span className='font-semibold'>{publicId}</span>
            <div className='flex items-center gap-1 text-COLOR-12'>
              <span>•</span>
              <span>{convertNumber(numSubscribers)} subscribers</span>
              <span>•</span>
              <span>{convertNumber(numVideos)} videos</span>
            </div>
          </div>
          <Modal>
            <p className='text-sm text-COLOR-12'>
              {about} <Modal.Open name='about'><button className='text-COLOR-4'>...more</button></Modal.Open>
            </p>
            <Modal.Window name='about'>
              <div className='flex flex-col gap-4 min-w-[450px]'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-semibold'>About</h3>
                  <p className=''>{about}</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-semibold'>Channel details</h3>
                  <div className='flex flex-col py-3 gap-6 text-COLOR-4'>
                    <div className='flex gap-4'>
                      <IconGlobal className='flex-none fill-current' />
                      <Link to={currentUrl}>{currentUrl}</Link>
                    </div>
                    <div className='flex-none flex gap-4'>
                      <IconVideo />
                      <p>{convertNumber(numVideos)} videos</p>
                    </div>
                    <div className='flex-none flex gap-4'>
                      <IconInfo className='fill-current' />
                      <p>Joind at {createDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Window>
          </Modal>
          {
            isSubscribe ?
              <button onClick={() => setIsSubscribe(e => !e)} className='flex items-center w-fit h-9 px-4 bg-white bg-opacity-10 rounded-full text-COLOR-4 text-sm font-medium hover:brightness-90'>Subscribed</button>
              : <button onClick={() => setIsSubscribe(e => !e)} className='flex items-center w-fit h-9 px-4 bg-COLOR-4 rounded-full text-COLOR-5 text-sm font-medium hover:brightness-90'>Subscribe</button>
          }
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <ul className='border-b border-white border-opacity-20 px-14'>
          <li className='font-semibold'><Link to={`/channel/${publicId}/videos`}>Videos</Link></li>
        </ul>
        <div className='flex flex-col gap-4 px-14'>
          <Filter
            filterField="status"
            options={[
              { value: "all", label: "All" },
              { value: "related", label: "Related" },
            ]}
          />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Channel
