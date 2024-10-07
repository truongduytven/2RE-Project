import Loading from '@/components/global/Loading/Loading'
import ProductCard from '@/components/local/Shop/ProductCard'
import REAPI from '@/lib/2REAPI'
import { Product } from '@/types'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

interface ShopDetailInterface {
  shopName: string
  shopLogo: string
  shopDescription: string
  shopAddress: string
  totalRating: number
  quantityRating: number
}

export default function ShopDetail() {
  const { id } = useParams<{ id: string }>()
  const [listProduct, setListProduct] = useState<Product[]>([])
  const [shopDetail, setShopDetail] = useState<ShopDetailInterface>()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'products' | 'contact' | 'rating'>('products')

  useEffect(() => {
    const fetchShopDetail = async () => {
      try {
        setIsLoading(true)
        const response = await REAPI.get(`/detail/${id}`)
        const responseProduct = await REAPI.get(`/product/product-from-shop/${id}`)
        setShopDetail(response.data)
        setListProduct(responseProduct.data)
        toast.success('Tải chi tiết cửa hàng thành công!')
      } catch (error) {
        console.error('Fetching shop detail failed:', error)
      } finally {
        setIsLoading(false)
      }
    }
    if (id) {
      fetchShopDetail()
    }
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  if (!shopDetail) {
    return <div>Shop not found</div>
  }

  return (
    <div className='w-full h-full flex justify-center mt-10 min-h-screen'>
      <div className='w-full max-w-5xl flex flex-col items-center gap-5'>
        <div className='flex justify-center'>
          <div className='w-40 h-40 border rounded-full'>
            <img
              src={
                !shopDetail.shopLogo
                  ? 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b8beed59949097.5a357be858f77.jpg'
                  : shopDetail.shopLogo
              }
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl font-bold'>{shopDetail.shopName}</div>
          <div className='flex items-center gap-2'>
            <div>{shopDetail.totalRating}</div>
            <Star size={20} />
            <div>({shopDetail.quantityRating} đánh giá)</div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex gap-4 mt-5'>
          <button
            className={`px-4 py-2 ${activeTab === 'products' ? 'font-bold border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Sản phẩm
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'contact' ? 'font-bold border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Liên hệ
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'rating' ? 'font-bold border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('rating')}
          >
            Đánh giá
          </button>
        </div>

        {/* Tab Content */}
        <div className='w-full mt-5'>
          {activeTab === 'products' && (
            <div className='grid grid-cols-3 p-5 gap-4 gap-y-14'>
              {listProduct.map((product) => (
                <ProductCard key={product.productId} product={product} />
              ))}
            </div>
          )}
          {activeTab === 'contact' && (
            <div className='w-full flex justify-center'>
              <div className='flex w-full max-w-4xl justify-center items-center gap-3 flex-col'>
                <div className='text-lg'>
                  <strong>Address:</strong> {shopDetail.shopAddress}
                </div>
                <div className='text-lg'>
                  <strong>Description:</strong> {shopDetail.shopDescription}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'rating' && (
            <div>
              <div>Total Rating: {shopDetail.totalRating}</div>
              <div>Quantity of Ratings: {shopDetail.quantityRating}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
