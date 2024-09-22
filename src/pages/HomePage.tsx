import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner3.png'
import Banner4 from '@/assets/banner4.png'
import Brand from '@/assets/brands.png'
import Slider from 'react-slick'
import { Button } from '@/components/ui/button'
import SlideShow from '@/components/local/Home/SlideShow'
import CountdownTimer from '@/components/local/Home/Coutdown'

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='w-full flex justify-center'>
        <div className='w-full gap-3 flex justify-between max-w-5xl'>
          <div className='w-1/3 bg-[#E0E0E0] p-4 rounded-lg'>
            <img src={Banner1} alt='banner' />
          </div>
          <div className='w-1/3 max-h-full flex flex-col justify-between items-center'>
            <img src={Banner3} alt='banner' />
            <Button>Shop now</Button>
            <div className='relative w-full'>
              <img src={Banner4} alt='banner' className='w-full' />
              <div className='absolute bottom-0 w-full h-1/2 rounded-lg bg-[#E0E0E0] -z-50'></div>
            </div>
          </div>
          <div className='w-1/3 bg-[#E0E0E0] p-4 rounded-lg'>
            <img src={Banner2} alt='banner' />
          </div>
        </div>
      </div>
      <div>
        <img src={Brand} alt='brand' />
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-5xl flex justify-between mb-96'>
          <div className='p-5 bg-white flex flex-col gap-10 '>
            <div>
              <h2 className='text-2xl font-bold'>This week's products</h2>
              <p className='text-sm'>Limited quantity</p>
            </div>
            <div>
              <Button>Buy Now</Button>
            </div>
            <div>
              <h3 className='text-xl font-bold'>Hurry, Before It's Too Late!</h3>
              <CountdownTimer />
            </div>
          </div>
          <SlideShow />
        </div>
      </div>
    </div>
  )
}
