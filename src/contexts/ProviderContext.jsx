import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { getChannels, getVideos } from "../services/youtubeAPI";

const ContextProvider = createContext()

function ProviderContext({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [isOpenSidebarVideoPage, setIsOpenSidebarVideoPage] = useState(false)
  const [isFocusInput, setIsFocusInput] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [query, setQuery] = useState('')

  const { isLoading: gettingVideos, data: videos, error: getVideosError } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideos
  })

  const { isLoading: gettingChannels, data: channels, error: getChannelsError } = useQuery({
    queryKey: ['channels'],
    queryFn: getChannels
  })

  return <ContextProvider.Provider value={{
    videos,
    channels,
    isOpenSidebar,
    setIsOpenSidebar,
    getVideosError,
    gettingVideos,
    getChannelsError,
    gettingChannels,
    isFocusInput,
    setIsFocusInput,
    isNotification,
    setIsNotification,
    isOpenSidebarVideoPage,
    setIsOpenSidebarVideoPage,
    query,
    setQuery
  }}>
    {children}
  </ContextProvider.Provider>
}

function useValuesContext() {
  const context = useContext(ContextProvider)
  if (context == undefined) throw new Error('Error context')
  return context
}

export { ProviderContext, useValuesContext }
