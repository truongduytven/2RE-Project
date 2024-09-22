import { Facebook, Instagram, Mail, PhoneCall } from 'lucide-react'
import { Button } from '../ui/button'
import Container from './Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className='w-full h-full pt-5'>
          <div className='flex mt-6 gap-14 justify-between'>
            <div className='flex flex-col items-center flex-1 gap-1'>
              {/* <div className='text-2xl font-bold text-primary'>Customer Support</div> */}
              <div className='flex gap-4 mt-10'>
                <Button variant='ghost' size='icon'>
                  <Facebook />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Instagram />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Mail />
                </Button>
                <Button variant='ghost' size='icon'>
                  <PhoneCall />
                </Button>
              </div>
            </div>

            <div className='flex flex-col items-center flex-1 gap-1'>
              {/* <div className='text-2xl font-bold text-primary'>Contact information</div> */}
              <div className='flex flex-col items-start gap-4 mt-2'>
                <div className='text-xs sm:text-base'>
                  <strong>Support</strong>
                </div>
                <div className='text-xs sm:text-base'>Delivery & Payment</div>
                <div className='text-xs sm:text-base'>Help & Support</div>
                <div className='text-xs sm:text-base'>24/7H Services</div>
              </div>
            </div>

            <div className='flex flex-col items-center flex-1 gap-1'>
              {/* <div className='text-2xl font-bold text-primary'>Contact information</div> */}
              <div className='flex flex-col items-start gap-4 mt-2'>
                <div className='text-xs sm:text-base'>
                  <strong>Infomation</strong>
                </div>
                <div className='text-xs sm:text-base'>+8496 416 0769</div>
                <div className='text-xs sm:text-base'>2re2hand@gmail.com</div>
                <div className='text-xs sm:text-base'>
                  <a href='/'>https://2re.vercel.app/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='flex justify-center items-center text-base h-10 mt-10'>
        © Copyright 2024. All rights reserved.
      </div>
    </footer>
  )
}
