import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChannelByID, getVideoByID } from '../../services/youtubeAPI'
import { useQuery } from '@tanstack/react-query'
import VerifiedIcon from '../../components/icons/VerifiedIcon'
import { convertNumber } from '../../utils/helpers'
import IconLike from '../../components/icons/IconLike'
import IconDisLike from '../../components/icons/IconDisLike'
import Spinner from '../../components/Spinner'
import IconShare from '../../components/icons/IconShare'
import Modal from '../../components/Modal'
import toast from 'react-hot-toast'

export default function Video() {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisLiked, setIsDisLiked] = useState(false)
  const { id } = useParams()

  const currentUrl = window.location.href

  const { isLoading: gettingVideoById, data: video, error: getVideoError } = useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideoByID(id)
  })

  const { data: channel } = useQuery({
    queryKey: ['channel'],
    queryFn: () => getChannelByID(video.channelId)
  })

  function handleCopy() {
    navigator.clipboard.writeText(currentUrl)
    // toast.custom('link copied to clipboard!')
    toast.success('Link copied to clipboard')
  }

  return (
    gettingVideoById ? <div className='flex justify-center items-center size-full'>
      <Spinner />
    </div> :
      getVideoError ? <div className='flex justify-center items-center size-full text-3xl text-white'>{getVideoError.message}</div> :
        <div className='flex justify-center gap-6 pt-6 text-white'>
          <div className='flex flex-col gap-3 h-screen w-[853px]'>
            {video?.embedCode && <iframe className='w-full h-[480px] rounded-xl' src={`${video?.embedCode}&autoplay=1`} frameborder="0"></iframe>}
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-medium'>{video?.title}</h1>
              <div className='flex items-center gap-6 w-full'>
                <figure className='flex gap-3'>
                  {gettingVideoById ? <div className='size-10 rounded-full bg-COLOR-6'></div> : <img className='size-10 rounded-full' src={channel?.profile} alt="" />}
                  <figcaption className='flex flex-col justify-between'>
                    <h3 className='flex items-center gap-1'>
                      <span>{channel?.name}</span>
                      <VerifiedIcon className='size-[14px] text-[rgb(170,170,170)]' />
                    </h3>
                    <p className='text-xs text-COLOR-6'>{`${convertNumber(channel?.numSubscribers)} subscribers`}</p>
                  </figcaption>
                </figure>
                <div className='flex gap-2 font-medium *:rounded-full *:flex *:items-center *:h-9 *:px-4 *:text-sm'>
                  <button className='bg-COLOR-8 hover:brightness-125'>Join</button>
                  <button className='bg-COLOR-4 text-black hover:brightness-90'>Subscribe</button>
                </div>
                <div className='ms-auto flex items-center h-9 rounded-full overflow-hidden'>
                  <button
                    onClick={() => { setIsLiked(e => !e); setIsDisLiked(false) }}
                    className='flex items-center gap-2 ps-3 pe-3 h-full bg-COLOR-9 hover:brightness-150'
                  >
                    <IconLike isLiked={isLiked} className='text-white fill-current size-6 box-content' />
                    <span className='text-sm'>{isLiked ? convertNumber(video?.numViews + 1) : convertNumber(video?.numViews)}</span>
                  </button>
                  <div className='flex items-center h-full bg-COLOR-9'>
                    <div className='w-[1px] h-6 bg-COLOR-10'></div>
                  </div>
                  <button
                    onClick={() => { setIsLiked(false); setIsDisLiked(e => !e) }}
                    className='px-3 h-full bg-COLOR-9 hover:brightness-150'
                  >
                    <IconDisLike isDisLiked={isDisLiked} className='text-white fill-current size-6 box-content' />
                  </button>
                </div>
                <Modal>
                  <Modal.Open>
                    <button className='flex items-center gap-2 ps-3 pe-3 h-full bg-COLOR-9 hover:brightness-150 rounded-full overflow-hidden text-white'>
                      <IconShare className='fill-current size-6 box-content' />
                      <span className='text-sm'>Share</span>
                    </button>
                  </Modal.Open>
                  <Modal.Window>
                    <div className='flex flex-col gap-4'>
                      <div className='flex flex-col items-center gap-5'>
                        <h3 className='text-COLOR-4 '>Share in a post</h3>
                        <span className='text-xs text-COLOR-12'>no subscribers</span>
                        <div className='w-full h-[1px] bg-white bg-opacity-20'></div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        <h3 className='text-COLOR-4'>Share</h3>
                        <div className='flex justify-between items-center w-[470px] ps-4 pe-2 py-2 bg-COLOR-5 border border-white border-opacity-20 rounded-xl text-sm'>
                          <p>{currentUrl}</p>
                          <button
                            onClick={handleCopy}
                            className='bg-COLOR-13 px-4 py-2 rounded-full text-COLOR-5 font-medium hover:brightness-110'>Copy</button>
                        </div>
                      </div>
                    </div>
                  </Modal.Window>
                </Modal>
              </div>
            </div>
          </div>
          <div className='h-screen  w-[402px]'></div>
        </div>
  )
}

