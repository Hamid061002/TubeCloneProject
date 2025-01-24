import React, { useState } from 'react'
import { convertNumber, formatDistanceFromNow } from '../../utils/helpers';
import IconLike from '../../components/icons/IconLike';
import IconShare from '../../components/icons/IconShare';
import IconDisLike from '../../components/icons/IconDisLike';
import Modal from '../../components/Modal';
import { BsThreeDots } from 'react-icons/bs';
import VerifiedIcon from '../../components/icons/VerifiedIcon';
import { format } from "date-fns"
import { Link, useNavigate } from 'react-router-dom';
import IconVideos from '../../components/icons/IconVideos';
import IconAbout from '../../components/icons/IconAbout';


export default function VideoDetail({ video = {}, channel = {} }) {
  const { numViews, uploadDate, description, tags } = video

  const [isLiked, setIsLiked] = useState(false)
  const [isDisLiked, setIsDisLiked] = useState(false)
  const [isOpenDescription, setIsOpenDescription] = useState(false)

  const navigate = useNavigate()

  const currentUrl = window.location.href

  function handleCopy() {
    navigator.clipboard.writeText(currentUrl)
    toast('Link copied to clipboard')
  }

  return (
    <>
      {
        (channel.profile && channel.name && channel.numSubscribers) ?
          <div className='flex flex-col gap-3 '>
            <iframe className='w-full h-[480px] rounded-xl' src={`${video?.embedCode}&autoplay=1`} frameborder="0"></iframe>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>{video?.title}</h1>
                <div className='flex items-center gap-6 w-full'>
                  <figure onClick={() => navigate(`/channel/${channel?.publicId}`)} className='flex gap-3 cursor-pointer'>
                    <img className='size-10 rounded-full' src={channel?.profile} alt="" />

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
                  <div className='flex ms-auto gap-2 h-9'>
                    <div className='flex items-center rounded-full overflow-hidden'>
                      <button
                        onClick={() => { setIsLiked(e => !e); setIsDisLiked(false) }}
                        className='flex items-center gap-2 ps-3 pe-3 h-full bg-COLOR-9 hover:brightness-150'
                      >
                        <IconLike isLiked={isLiked} className='text-COLOR-4 fill-current size-6 box-content' />
                        <span className='text-sm'>{isLiked ? convertNumber(video?.numViews + 1) : convertNumber(video?.numViews)}</span>
                      </button>
                      <div className='flex items-center h-full bg-COLOR-9'>
                        <div className='w-[1px] h-6 bg-COLOR-10'></div>
                      </div>
                      <button
                        onClick={() => { setIsLiked(false); setIsDisLiked(e => !e) }}
                        className='px-3 h-full bg-COLOR-9 hover:brightness-150'
                      >
                        <IconDisLike isDisLiked={isDisLiked} className='text-COLOR-4 fill-current size-6 box-content' />
                      </button>
                    </div>
                    <Modal>
                      <Modal.Open name='more'>
                        <button className='flex items-center gap-2 ps-3 pe-3 h-full bg-COLOR-9 hover:brightness-150 rounded-full overflow-hidden text-COLOR-4'>
                          <IconShare className='fill-current size-6 box-content' />
                          <span className='text-sm'>Share</span>
                        </button>
                      </Modal.Open>
                      <Modal.Window name='more'>
                        <div className='flex flex-col gap-4'>
                          <div className='flex flex-col items-center gap-5'>
                            <h3 className='text-COLOR-4 '>Share in a post</h3>
                            <span className='text-xs text-COLOR-12'>no subscribers</span>
                            <div className='w-full h-[1px] bg-Ctext-COLOR-4 bg-opacity-20'></div>
                          </div>
                          <div className='flex flex-col gap-4'>
                            <h3 className='text-COLOR-4'>Share</h3>
                            <div className='flex justify-between items-center w-[470px] ps-4 pe-2 py-2 bg-COLOR-5 border border-Ctext-COLOR-4 border-opacity-20 rounded-xl text-sm'>
                              <p>{currentUrl}</p>
                              <button
                                onClick={handleCopy}
                                className='bg-COLOR-13 px-4 py-2 rounded-full text-COLOR-5 font-medium hover:brightness-110'>Copy</button>
                            </div>
                          </div>
                        </div>
                      </Modal.Window>
                    </Modal>
                    <button className='flex justify-center items-center size-9 bg-COLOR-9 hover:brightness-150 rounded-full box-content'><BsThreeDots /></button>
                  </div>
                </div>
              </div>
              <div className='bg-COLOR-14 p-3 rounded-xl '>
                <div className={`flex flex-col overflow-y-hidden text-sm ${!isOpenDescription && 'line-clamp-2'}`}>
                  <div className='flex gap-2'>
                    <span>{isOpenDescription || description.split(' ').length < 50 ? new Intl.NumberFormat().format(numViews) : convertNumber(numViews)} views</span>
                    <span>{isOpenDescription || description.split(' ').length < 50 ? format(new Date(uploadDate), "dd MMM yyyy") : formatDistanceFromNow(uploadDate)}</span>
                    <p className='flex gap-1 text-COLOR-13'>{tags.map(tag => <button>#{tag}</button>)}</p>
                  </div>
                  <p>{description}</p>
                  <div className={`flex flex-col gap-4 ${!isOpenDescription && 'hidden'}`}>
                    <Link className='mt-6' to={`/channel/${channel.publicId}`}>
                      <figure className='flex gap-3'>
                        <img className='size-10 rounded-full' src={channel?.profile} alt="" />

                        <figcaption className='flex flex-col justify-between'>
                          <h3 className='flex items-center gap-1'>
                            <span>{channel?.name}</span>
                            <VerifiedIcon className='size-[14px] text-[rgb(170,170,170)]' />
                          </h3>
                          <p className='text-xs text-COLOR-6'>{`${convertNumber(channel?.numSubscribers)} subscribers`}</p>
                        </figcaption>
                      </figure>
                    </Link>
                    <div className='flex gap-2 mb-6'>
                      <Link className='flex items-center gap-[6px] h-9 px-3 border border-white border-opacity-20 rounded-full hover:bg-neutral-600'>
                        <IconVideos className='fill-current text-COLOR-4' />
                        <span>Videos</span>
                      </Link>
                      <Link className='flex items-center gap-[6px] h-9 px-3 border border-white border-opacity-20 rounded-full hover:bg-neutral-600'>
                        <IconAbout className='fill-current text-COLOR-4' />
                        <span>About</span>
                      </Link>
                    </div>
                  </div>
                </div>
                {
                  description.split(' ').length > 50 &&
                  <button onClick={() => setIsOpenDescription(e => !e)} className='text-sm text-COLOR-4'>{!isOpenDescription ? '...more' : 'Show less'}</button>
                }
              </div>
            </div>
          </div> :
          /* skeleton loading code */
          <div className='flex flex-col gap-3'>
            <div className='w-full h-[480px] rounded-xl bg-COLOR-3 animate-pulse'></div>
            <div className='flex flex-col gap-2'>
              <div className='h-6 w-3/4 bg-COLOR-3 animate-pulse rounded'></div>
              <div className='flex items-center gap-6 w-full'>
                <div className='flex gap-3'>
                  <div className='size-10 rounded-full bg-COLOR-3 animate-pulse'></div>
                  <div className='flex flex-col justify-between'>
                    <div className='h-4 w-24 bg-COLOR-3 animate-pulse rounded'></div>
                    <div className='h-3 w-32 bg-COLOR-3 animate-pulse rounded mt-1'></div>
                  </div>
                </div>
                <div className='flex gap-2 font-medium *:rounded-full *:flex *:items-center *:h-9 *:px-4 *:text-sm'>
                  <div className='w-16 h-9 bg-COLOR-3 animate-pulse rounded-full'></div>
                  <div className='w-24 h-9 bg-COLOR-3 animate-pulse rounded-full'></div>
                </div>
                <div className='flex ms-auto gap-2 h-9'>
                  <div className='flex items-center rounded-full overflow-hidden'>
                    <div className='w-24 h-9 bg-COLOR-3 animate-pulse'></div>
                  </div>
                  <div className='w-16 h-9 bg-COLOR-3 animate-pulse rounded-full'></div>
                  <div className='size-9 bg-COLOR-3 animate-pulse rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}