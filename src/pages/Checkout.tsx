import Container from '@/components/global/Container'
import CheckoutForm from '@/components/local/Checkout/CheckoutForm'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { formatCurrency } from '@/lib/utils'
import { Product } from '@/types'
import { useLocation } from 'react-router-dom'

export default function Checkout() {
  const location = useLocation()
  const selectedProducts: Product[] = location.state?.selectedProducts || []
  return (
    <div className='w-full justify-center my-5'>
      <Container>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-4xl'>Thanh toán</div>
          <Breadcrumb className='text-sm'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/cart'>Giỏ hàng</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='font-bold'>Thanh toán</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='w-full flex '>
            <div className='flex-1'>
              <CheckoutForm />
            </div>
            <div className='flex-1'>
              <div className='flex flex-col gap-4 px-10'>
                <div className='flex flex-col gap-4 mt-10'>
                  {selectedProducts.map((product: any) => (
                    <div key={product.id} className='flex gap-4 justify-between items-center'>
                      <div className='flex items-center gap-3'>
                        <div className='w-16 h-16 bg-gray-200'>
                          <img src={product.mainImage} className='w-full h-full object-cover' alt={product.name} />
                        </div>
                        <div>
                          <div className='text-base'>{product.name}</div>
                          <div className='text-sm'>{product.size}</div>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        {product.sale > 0 ? (
                          <div className='flex flex-col items-center gap-1'>
                            <div>{formatCurrency(product.price - (product.price * product.sale) / 100)}</div>
                            <div className='line-through text-sm'>{formatCurrency(product.price)}</div>
                          </div>
                        ) : (
                          <div>{formatCurrency(product.price)}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  <hr></hr>
                  <div className='w-full flex justify-between'>
                    <div>Tổng cộng</div>
                    <div>
                      {formatCurrency(
                        selectedProducts.reduce(
                          (total, items) => total + (items.price - (items.price * items.sale) / 100),
                          0
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
