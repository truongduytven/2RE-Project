import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { useLocation } from 'react-router-dom'
import ProductCard from './ProductCard'
import REAPI from '@/lib/2REAPI'
import { toast } from 'sonner'
import Loading from '@/components/global/Loading/Loading'
import { Product } from '@/types'
import { set } from 'react-hook-form'

const PRODUCTS_PER_PAGE = 9

const sizes = ['S', 'M', 'L', 'XL', 'Free']
const priceRanges = [
  '0 VND - 200.000 VND',
  '200.000 VND - 400.000 VND',
  '400.000 VND - 600.000 VND',
  '600.000 VND - 800.000 VND',
  'Trên 800.000 VND'
]
const catelogies = ['Jackets', 'Jeans', 'T-Shirts']
const brands = ['Adidas', 'Nike', 'Puma', 'Converse', 'Vans', 'New Balance', 'Reebok', 'Fila', 'Balenciaga', 'Gucci']
const collections = ['NewArrivals', 'Trending', 'DiscountDeals']
const genders = ['Nam', 'Nữ']

export default function ListProduct() {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = localStorage.getItem('currentPage')
    return savedPage ? parseInt(savedPage, 10) : 1
  })

  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await REAPI.get('/product')
        const products = response.data
        setProducts(products)
      } catch (error) {
        console.error('Fetching products failed:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const collectionParam = params.get('collection')
    const searchParam = params.get('search')
    if (collectionParam) {
      setSelectedCollection(collectionParam)
    }
    if (searchParam) {
      setSearchQuery(searchParam.toLowerCase())
    }
  }, [location])

  const calNewPrice = (price: number, sale: number) => {
    return price - (price * sale) / 100
  }

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString())
  }, [currentPage])

  useEffect(() => {
    if (selectedBrand.length > 0 || selectedSize || selectedPriceRange || selectedCollection) {
      setCurrentPage(1)
    }
  }, [selectedBrand, selectedSize, selectedPriceRange, selectedCollection])

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const newPrice = calNewPrice(product.price, 0)

      const matchesSize = selectedSize ? product.size === selectedSize : true

      const matchesPrice = selectedPriceRange
        ? (() => {
            if (selectedPriceRange === '0 VND - 200.000 VND') return newPrice >= 0 && newPrice <= 200000
            if (selectedPriceRange === '200.000 VND - 400.000 VND') return newPrice > 200000 && newPrice <= 400000
            if (selectedPriceRange === '400.000 VND - 600.000 VND') return newPrice > 400000 && newPrice <= 600000
            if (selectedPriceRange === '600.000 VND - 800.000 VND') return newPrice > 600000 && newPrice <= 800000
            if (selectedPriceRange === 'Trên 800.000 VND') return newPrice > 800000
            return true
          })()
        : true

      const matchesBrand = selectedBrand.length > 0 ? selectedBrand.includes(product.brand) : true

      // const matchesCollection = selectedCollection ? product.collection === selectedCollection : true

      const matchesCategory = selectedCategory ? product.category === selectedCategory : true

      const matchesGender = selectedGender ? product.genderCategory === selectedGender : true

      const matchesSearchQuery = searchQuery
        ? product.name.toLowerCase().includes(searchQuery) ||
          (product.brand && product.brand.toLowerCase().includes(searchQuery))
        : true

      return matchesSize && matchesPrice && matchesBrand && matchesGender && matchesSearchQuery && matchesCategory
    })
  }

  const filteredProducts = getFilteredProducts()
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    scrollToTop()
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    scrollToTop()
  }

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    scrollToTop()
  }

  const handleSizeSelection = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null)
      return
    }
    setSelectedSize(size)
  }

  const handleCollectionSelection = (collection: string) => {
    if (selectedCollection === collection) {
      setSelectedCollection(null)
      return
    }
    setSelectedCollection(collection)
  }

  const handleCategorySelection = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }

  const handleBrandSelection = (brand: string) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand([...selectedBrand.filter((item) => item !== brand)])
      return
    }
    setSelectedBrand([...selectedBrand, brand])
  }

  const handlePriceSelection = (range: string) => {
    if (selectedPriceRange === range) {
      setSelectedPriceRange(null)
      return
    }
    setSelectedPriceRange(range)
  }

  const handleGenderSelection = (gender: string) => {
    if (selectedGender === gender) {
      setSelectedGender(null)
      return
    }
    setSelectedGender(gender)
  }

  const handleReset = () => {
    setSelectedSize(null)
    setSelectedPriceRange(null)
    setSelectedBrand([])
    setSelectedCollection(null)
    setSelectedCategory(null)
    setSelectedGender(null)
    setSearchQuery('')
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='flex flex-col items-center'>
      {searchQuery && <div className='font-semibold text-xl mb-2'>Kết quả tìm kiếm cho '{searchQuery}'</div>}
      <div className='w-full flex justify-center max-w-6xl mr-5'>
        <div className='flex flex-grow' style={{ flex: '1' }}>
          {/* Filter Sidebar */}
          <div className='flex flex-col gap-5 w-full'>
            <div className='flex w-full justify-between'>
              <div className='text-2xl'>Bộ lọc</div>
              {(selectedSize ||
                selectedPriceRange ||
                selectedBrand.length !== 0 ||
                selectedCollection ||
                searchQuery ||
                selectedGender ||
                selectedCategory) && (
                <button className='border px-2 rounded-md text-sm' onClick={handleReset}>
                  Tạo lại
                </button>
              )}
            </div>
            <Accordion
              className='min-w-56'
              type='multiple'
              defaultValue={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
            >
              {/* Size Filter */}
              <AccordionItem value='item-1'>
                <AccordionTrigger>Kích cỡ</AccordionTrigger>
                <AccordionContent>
                  <div className='grid grid-cols-4 gap-2 mb-4 px-2'>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`border border-gray-300 px-1 py-1 rounded ${selectedSize === size ? 'bg-gray-300' : ''}`}
                        onClick={() => handleSizeSelection(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4'>
                <AccordionTrigger>Giới tính</AccordionTrigger>
                <AccordionContent>
                  <div className='grid grid-cols-4 gap-2 mb-4 px-2'>
                    {genders.map((gender) => (
                      <button
                        key={gender}
                        className={`border border-gray-300 px-1 py-1 rounded ${selectedGender === gender ? 'bg-gray-300' : ''}`}
                        onClick={() => handleGenderSelection(gender)}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Price Filter */}
              <AccordionItem value='item-2'>
                <AccordionTrigger>Giá</AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col'>
                    {priceRanges.map((range, index) => (
                      <button
                        key={index}
                        className={`text-left text-sm p-2 ${selectedPriceRange === range ? 'font-bold' : 'font-normal'}`}
                        onClick={() => handlePriceSelection(range)}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Brand Filter */}
              <AccordionItem value='item-3'>
                <AccordionTrigger>Thương hiệu</AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        className={`border px-2 py-1 rounded ${selectedBrand.includes(brand) ? 'border-gray-300' : 'border-white'}`}
                        onClick={() => handleBrandSelection(brand)}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value='item-4'>
                <AccordionTrigger>Bộ sưu tập</AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-2'>
                    {collections.map((collection) => (
                      <div
                        key={collection}
                        className='flex justify-between'
                        onClick={() => handleCollectionSelection(collection)}
                      >
                        <button className={`border-none border-gray-300 text-left px-2 py-1 rounded`}>
                          {collection === 'NewArrivals'
                            ? 'Hàng mới về'
                            : collection === 'Trending'
                              ? 'Xu hướng'
                              : 'Ưu đãi'}
                        </button>
                        {selectedCollection === collection && <Check size={20} />}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem> */}

              <AccordionItem value='item-5'>
                <AccordionTrigger>Loại sản phẩm</AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-2'>
                    {catelogies.map((category) => (
                      <div
                        key={category}
                        className='flex justify-between'
                        onClick={() => handleCategorySelection(category)}
                      >
                        <button className={`border-none border-gray-300 text-left px-2 py-1 rounded`}>
                          {category === 'T-Shirts' ? 'Áo thun' : category === 'Jeans' ? 'Jean' : 'Áo khoác'}
                        </button>
                        {selectedCategory === category && <Check size={20} />}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* Product Grid */}
        <div className='flex flex-grow flex-col' style={{ flex: '3.5' }}>
          {paginatedProducts.length > 0 ? (
            <div className='grid grid-cols-3 p-5 gap-4 gap-y-14'>
              {paginatedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center'>Không tìm thấy sản phẩm</div>
          )}
          {/* Pagination */}
          <div className='mt-4 flex justify-center'>
            <Pagination>
              {totalPages > 0 && (
                <PaginationPrevious className='cursor-pointer' onClick={handlePreviousPage}>
                  Trước
                </PaginationPrevious>
              )}
              <PaginationContent>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink isActive={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
              {totalPages > 0 && (
                <PaginationNext className='cursor-pointer' onClick={handleNextPage}>
                  Sau
                </PaginationNext>
              )}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
