import { Link } from 'react-router-dom'
import paymentSuccess from '@/assets/paymentSuccess.jpeg'
import { useEffect } from 'react'
function PaymentSuccess() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    scrollToTop()
  }, [])
  return (
    <div className='w-screen flex justify-center items-center mb-8'>
      <div className='flex flex-col items-center'>
        <img src={paymentSuccess} className='w-[450px] h-[450px]' />
        <div className='text-2xl font-medium'>Thanh toán thành công</div>
        <div className='text-xl mt-4'>Vui lòng kiểm tra đơn hàng trong đơn hàng của tôi hoặc trong email!!!</div>
        <p className='text-lg mt-4'>
          Cảm ơn vì đã tin tưởng <span className='text-primary font-medium'>2RE Secondhand Fashion</span>
        </p>

        <Link to='/' className='underline hover:text-primary font-medium text-xl mt-8'>
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccess
