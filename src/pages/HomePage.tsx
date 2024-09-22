import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner3.png'
import Banner4 from '@/assets/banner4.png'
import Brand from '@/assets/brands.png'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='w-screen flex justify-center'>
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
    </div>
  )
}
