import React from 'react'
import { useFavoriteContext } from '@/contexts/FavoriteContext'
import { DataArrivals } from '@/lib/DataArrivals'
import Container from '@/components/global/Container'
import { formatCurrency } from '@/lib/utils'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import ProductCard from '@/components/local/Shop/ProductCard'

const FavoritePage: React.FC = () => {
  const { favorites } = useFavoriteContext()
  const favoriteProducts = DataArrivals.filter((product) => favorites.includes(product.id.toString()))

  return (
    <div className='w-full flex flex-col gap-20 my-10'>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl mb-5'>Sản phẩm yêu thích</div>
          <Breadcrumb className='text-sm'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='font-bold'>Yêu thích</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <Container>
          {favoriteProducts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {favoriteProducts.map((product) => (
                <div className='w-full flex justify-center'>
                  <ProductCard key={product.id} product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <p className='text-center text-gray-500'>Không có sản phẩm yêu thích nào được thêm!</p>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default FavoritePage
