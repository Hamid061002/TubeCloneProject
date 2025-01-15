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
import { Toaster } from "react-hot-toast"

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
              <Route path="channel/:id" element={<Channel />} />
              <Route path="search" element={<Search />} />
              <Route path="video/:id" element={<Video />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProviderContext>
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
    </QueryClientProvider>
  )
}

export default App
