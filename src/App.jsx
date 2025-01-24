import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Account from "./pages/account/Account"
import Channel from "./pages/channel/Channel"
import Search from "./pages/search/Search"
import Video from "./pages/video/Video"
import AppLayout from "./components/AppLayout"
import { Toaster } from "react-hot-toast"
import VideosList from "./components/VideosList"
import { useValuesContext } from "./contexts/ProviderContext"

function App() {
  const { videos } = useValuesContext()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} >
            <Route index element={<Navigate replace to='home' />} />
            <Route path="home" element={<Home />} />
            <Route path="account" element={<Account />} />
            <Route path="channel/:publicId" element={<Channel />}>
              <Route path="videos" element={<VideosList videos={videos} isChannelVideos={true} />} />
            </Route>
            <Route path="search" element={<Search />} />
            <Route path="video/:id" element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position='bottom-left'
        gutter={12}
        toastOptions={{
          duration: 3000,
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          className: 'min-h-12 me-auto p-3 rounded-lg bg-COLOR-4 shadow-md text-sm'
        }}
      />
    </>
  )
}

export default App
