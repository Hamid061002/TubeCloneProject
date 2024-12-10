import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Account from "./pages/account/Account"
import Channel from "./pages/channel/Channel"
import Search from "./pages/search/Search"
import Video from "./pages/video/Video"
import AppLayout from "./components/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ProviderContext } from "./contexts/ProviderContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ProviderContext>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />} >
              <Route index element={<Navigate replace to='home' />} />
              <Route path="home" element={<Home />} />
              <Route path="account" element={<Account />} />
              <Route path="channel" element={<Channel />} />
              <Route path="search" element={<Search />} />
              <Route path="video/:id" element={<Video />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProviderContext>
    </QueryClientProvider>
  )
}

export default App
