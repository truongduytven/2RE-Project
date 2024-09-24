// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

export default function SlideShow() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://i.pinimg.com/564x/9a/6c/c0/9a6cc02c9beb72b314e93416daea041a.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.pinimg.com/736x/fb/8d/94/fb8d9437bcba7207d1195ebd85c51574.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.pinimg.com/564x/f3/76/18/f3761899995636f3af116d70cbc12474.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.pinimg.com/564x/6b/a9/9e/6ba99eaa116a329a1aa462cf79dec250.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.pinimg.com/564x/a8/72/ff/a872ff233b799d050a87b0a7913815f3.jpg' />
        </SwiperSlide>

        <div className='w-full flex justify-center'>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </>
  )
}
