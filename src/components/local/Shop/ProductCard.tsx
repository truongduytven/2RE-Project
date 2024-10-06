import { Button } from '@/components/ui/button'
import { useCartContext } from '@/contexts/CartContext'
import { formatCurrency } from '@/lib/utils'
import { Product } from '@/types'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCartContext()
  // const calNewPrice = (price: number, sale: number) => {
  //   return price - (price * sale) / 100
  // }
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addToCart(product.productId.toString())
    toast.success('Thêm sản phẩm vào giỏ hàng thành công!')
  }
  return (
    <Link key={product.productId} to={`/productDetails/` + product.productId}>
      <div className='w-full h-full flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2'>
        <div className='w-60 h-80 rounded-lg overflow-hidden relative'>
          <img className='w-full h-full object-cover' src={product.imgUrl} alt={product.name} />
          {/* <Button onClick={handleAddToCart} className='absolute top-2 right-2' variant='outline' size='icon'>
            <img src={ShoppingCartPlus} alt='Add to cart' className='w-6 h-6' />
          </Button> */}
        </div>

        <div className='flex gap-1'>
          <div className='font-bold truncate'>{product.name}</div>
          <div className='font-bold'>({product.size})</div>
        </div>
        <div className='flex gap-2 items-center'>
          {/* {( product.sale && product.sale > 0) ? (
            <div className='font-medium'>
              <span className='text-sm'></span>
              {formatCurrency(calNewPrice(product.price, 0))}
            </div>
          ) : (
            <div className='font-medium'>
              <span className='text-sm'></span>
              {formatCurrency(product.price)}
            </div>
          )}
          {product.sale > 0 && (
            <div className='line-through text-gray-500 opacity-70 text-xs'>{formatCurrency(product.price)}</div>
          )} */}
          <div className='font-medium'>
            <span className='text-sm'></span>
            {formatCurrency(product.price)}
          </div>
        </div>
        <div className='flex items-center justify-between w-full gap-3'>
          <Button className='flex-1' variant='outline'>
            So sánh
          </Button>
          <Button className='flex-1' onClick={handleAddToCart}>
            Thêm vào giỏ
          </Button>
        </div>
      </div>
    </Link>
  )
}