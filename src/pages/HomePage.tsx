import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner3.png'
import Banner4 from '@/assets/banner4.png'
import Brand from '@/assets/brands.png'
import Follow from '@/assets/follow.png'
import { Button } from '@/components/ui/button'
import SlideShow from '@/components/local/Home/SlideShow'
import CountdownTimer from '@/components/local/Home/Coutdown'
import Arrivals from '@/components/local/Home/Arrivals'
import Sub1 from '@/assets/sub1.png'
import Sub2 from '@/assets/sub2.png'
import Subscribe from '@/components/local/Home/Subscribe'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col mx-auto'>
      <div className='w-full flex justify-center'>
        <div className='w-full gap-3 flex justify-between max-w-5xl'>
          <div className='w-1/3 bg-[#E0E0E0] p-4 rounded-lg'>
            <img src={Banner1} alt='banner' />
          </div>
          <div className='w-1/3 max-h-full flex flex-col justify-between items-center'>
            <img src={Banner3} alt='banner' />
            <Link to='/products'>
              <Button>Shop now</Button>
            </Link>
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
      <div className='flex justify-center my-5'>
        <img src={Brand} alt='brand' />
      </div>
      <div className='flex justify-center bg-[#FAFAFA]'>
        <div className='w-full max-w-5xl flex justify-between'>
          <div className='p-5 flex flex-col gap-14 '>
            <div>
              <h2 className='text-3xl font-bold volkov-font'>This week's products</h2>
              <p className='text-sm'>Limited quantity</p>
            </div>
            <div>
              <Link to='/products?collection=DiscountDeals'>
                <Button>Buy Now</Button>
              </Link>
            </div>
            <div>
              <h3 className='text-xl font-bold'>Hurry, Before It's Too Late!</h3>
              <CountdownTimer />
            </div>
          </div>
          <SlideShow />
        </div>
      </div>
      <div className='flex justify-center items-center w-full py-20'>
        <div className='flex flex-col items-center justify-center w-full max-w-5xl gap-10'>
          <div className='text-6xl font-semibold volkov-font'>New Arrivals</div>
          <div>
            <Arrivals />
          </div>
          <div>
            <Link to='/products?collection=NewArrivals'>
              <Button>View More</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-20 py-20 bg-gradient-to-b from-[#f9f9f9] to-white'>
        <div className='flex flex-col items-center gap-8'>
          <p className='text-4xl font-semibold volkov-font'>Follow Us On Fanpage</p>
          <p className='text-sm'>
            To not miss the latest offers, new and unique products at extremely affordable prices.
          </p>
        </div>
        <img src={Follow} />
      </div>
      <div className='w-full flex justify-center'>
        <div className=' w-full max-w-6xl flex'>
          <img className='scale-75' src={Sub1} alt='subscrition' />
          <div className='flex flex-col justify-center'>
            <Subscribe />
          </div>
          <img className='scale-75' src={Sub2} alt='subscrition' />
        </div>
      </div>
    </div>
  )
}
