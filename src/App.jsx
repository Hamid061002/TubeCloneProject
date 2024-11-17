import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Account from "./pages/account/Account"
import Channel from "./pages/channel/Channel"
import Search from "./pages/search/Search"
import Video from "./pages/video/Video"
import AppLayout from "./components/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index element={<Navigate replace to='home' />} />
          <Route path="home" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="channel" element={<Channel />} />
          <Route path="search" element={<Search />} />
          <Route path="video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
