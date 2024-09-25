import FilterShop from '@/components/local/Shop/FilterShop'
import ListProduct from '@/components/local/Shop/ListProduct'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export default function ShopPage() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className='w-full flex justify-center mt-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='volkov-font text-4xl mb-5'>Fashion</div>
          <Breadcrumb className='text-sm'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Shop</BreadcrumbItem>
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
