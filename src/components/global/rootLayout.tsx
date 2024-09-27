import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='h-screen relative'>
      <Header />
      <div className='min-h-[70%] pt-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
