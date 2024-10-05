import ListProduct from '@/components/local/Shop/ListProduct'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { useEffect } from 'react'

export default function ProductsPage() {
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
    <div className='w-full flex flex-col gap-10 my-10'>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='volkov-font text-4xl mb-5'>Fashion</div>
          <Breadcrumb className='text-sm'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='font-bold'>Products</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <ListProduct />
      </div>
    </div>
  )
}
