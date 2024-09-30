import React, { useEffect, useState } from 'react'
import { Product } from '@/types'
import { useNavigate, useParams } from 'react-router-dom'
import ProductRelated from '../ProductRelated/ProductRelated'
import Container from '@/components/global/Container'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Star } from 'lucide-react'
import { DataArrivals } from '@/lib/DataArrivals'
import { formatCurrency, formatProductType } from '@/lib/utils'
import { toast } from 'sonner'
import { useCartContext } from '@/contexts/CartContext'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [mainImage, setMainImage] = useState<string>('')
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const { addToCart } = useCartContext()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      const productData = DataArrivals.filter((product) => product.id.toString() === productId)[0]
      setProduct(productData)
      setMainImage(productData.mainImage)
    }

    if (id) {
      fetchProduct(id)
    }
  }, [id])

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    addToCart(product!.id.toString())
    toast.success('Product added to cart')
  }

  const handleImageHover = (image: string) => {
    setMainImage(image)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMainImage(product ? product.mainImage : '')
  }

  if (!product) {
    return <div>Loading product details...</div>
  }

  const relatedProducts = [
    {
      id: 1,
      title: 'Mai 1',
      imgSrc:
        'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/95490582_269326424238394_6090282016777961472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6KL885QXp64Q7kNvgFbtC1M&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AEywV9PSaXUFexajUsDM19D&oh=00_AYB0_6YYbbc99aw7e85P0hkPx2ei0rpv2pxGk4Q6sxgWyw&oe=671B83BF',
      price: '$49.99',
      discount: 20,
      hasSold: 100
    },
    {
      id: 2,
      title: 'Mai 2',
      imgSrc:
        'https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.6435-9/95490582_269326424238394_6090282016777961472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6KL885QXp64Q7kNvgFbtC1M&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AEywV9PSaXUFexajUsDM19D&oh=00_AYB0_6YYbbc99aw7e85P0hkPx2ei0rpv2pxGk4Q6sxgWyw&oe=671B83BF',
      price: '$59.99',
      discount: 10,
      hasSold: 200
    }
  ]

  return (
    <Container className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-start items-center gap-2'>
            <ArrowLeft size={16} />
            <button className='hover:underline' onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
          <div className='flex flex-row gap-14'>
            <div className='flex flex-1 flex-row gap-4'>
              <div className='flex flex-col gap-2 overflow-scroll h-[500px]'>
                {product.relatedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`related-${index}`}
                    className='w-full h-[80px] object-cover border border-gray-300 cursor-pointer transition duration-300 hover:border-black'
                    onMouseEnter={() => handleImageHover(image)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
              <img
                src={mainImage}
                alt={product.name}
                className='w-[400px] h-[500px] object-cover border border-gray-300'
              />
            </div>

            <div className='flex flex-1 flex-col gap-8 flex-grow h-full'>
              <div className='flex justify-between items-center'>
                <p className='text-3xl volkov-font font-semibold'>{product.name}</p>
                <Star strokeWidth={1} color='black' className='w-8 h-8 p-2 border rounded-full' />
              </div>

              {product.sale > 0 ? (
                <div className='flex justify-start gap-3 items-center'>
                  <p className='text-2xl font-bold'>
                    {formatCurrency(product.price - (product.price * product.sale) / 100)}
                  </p>
                  <p className='text-lg text-gray-600 line-through'>{formatCurrency(product.price)}</p>
                  <Badge className='bg-red-500'>Save {product.sale}%</Badge>
                </div>
              ) : (
                <p className='text-2xl font-bold'>{formatCurrency(product.price)}</p>
              )}

              <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <strong>Shop:</strong> {product.shopName}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Size:</strong> {product.size}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Brand:</strong> {product.brand}
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Cond:</strong> {product.cond}%
                </div>
                <div className='flex gap-2 items-center'>
                  <strong>Type:</strong> {formatProductType(product.type)}
                </div>
              </div>
              <div className='w-full h-full flex items-end gap-10'>
                <button
                  onClick={handleAddToCart}
                  className='bg-white border-2 border-black rounded-md px-4 py-2 font-bold hover:bg-black hover:text-white'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <ProductRelated products={relatedProducts} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails
