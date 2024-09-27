// import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { DataArrivals } from '../../../lib/DataArrivals'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { formatCurrency } from '@/lib/utils'
import { Link } from 'react-router-dom'
const PRODUCTS_PER_PAGE = 9

const sizes = ['S', 'M', 'L', 'XL']
const priceRanges = [
  '0 VND - 200.000 VND',
  '200.000 VND - 400.000 VND',
  '400.000 VND - 600.000 VND',
  '600.000 VND - 800.000 VND',
  'Over 800.000 VND'
]
const brands = ['Adidas', 'Nike', 'Puma', 'Converse', 'Vans', 'New Balance', 'Reebok', 'Fila', 'Balenciaga', 'Gucci']
const collections = ['Best sellers', 'New arrivals', 'Trending', 'Discount deals']

export default function ListProduct() {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)

  const [currentPage, setCurrentPage] = useState<number>(1)

  const calNewPrice = (price: number, sale: number) => {
    return price - (price * sale) / 100
  }

  const getFilteredProducts = () => {
    return DataArrivals.filter((product) => {
      const newPrice = calNewPrice(product.price, product.sale);
      const matchesSize = selectedSize ? product.size === selectedSize : true

      const matchesPrice = selectedPriceRange
        ? (() => {
            if (selectedPriceRange === '0 VND - 200.000 VND') return newPrice >= 0 && newPrice <= 200000
            if (selectedPriceRange === '200.000 VND - 400.000 VND') return newPrice > 200000 && newPrice <= 400000
            if (selectedPriceRange === '400.000 VND - 600.000 VND') return newPrice > 400000 && newPrice <= 600000
            if (selectedPriceRange === '600.000 VND - 800.000 VND') return newPrice > 600000 && newPrice <= 800000
            if (selectedPriceRange === 'Over 800.000 VND') return newPrice > 800000
            return true
          })()
        : true

      const matchesBrand = selectedBrand.length > 0 ? selectedBrand.includes(product.brand) : true

      const matchesCollection = selectedCollection ? product.type === selectedCollection : true

      return matchesSize && matchesPrice && matchesBrand && matchesCollection
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

  const handleReset = () => {
    setSelectedSize(null)
    setSelectedPriceRange(null)
    setSelectedBrand([])
    setSelectedCollection(null)
  }

  return (
    <div className='w-full flex justify-center max-w-5xl'>
      <div className='flex flex-grow' style={{ flex: '1' }}>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex w-full justify-between'>
            <div className='text-2xl'>Filters</div>
            {(selectedSize || selectedPriceRange || selectedBrand.length !== 0 || selectedCollection) && (
              <button className='border px-2 rounded-md text-sm' onClick={handleReset}>
                Reset
              </button>
            )}
          </div>
          <Accordion type='multiple' defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <div className='grid grid-cols-4 gap-2 mb-4'>
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
            <AccordionItem value='item-2'>
              <AccordionTrigger>Price</AccordionTrigger>
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
            <AccordionItem value='item-3'>
              <AccordionTrigger>Brand</AccordionTrigger>
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
            <AccordionItem value='item-4'>
              <AccordionTrigger>Collections</AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col gap-2'>
                  {collections.map((collection) => (
                    <div className='flex justify-between' onClick={() => handleCollectionSelection(collection)}>
                      <button key={collection} className={`border-none border-gray-300 text-left px-2 py-1 rounded`}>
                        {collection}
                      </button>
                      {selectedCollection === collection && <Check size={20} />}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='flex flex-grow flex-col' style={{ flex: '3.5' }}>
        {paginatedProducts.length > 0 ? (
          <div className='grid grid-cols-3 p-5 gap-4 gap-y-14'>
            {paginatedProducts.map((product) => (
              <Link to={`/productDetails/` + product.id}>
                <div className='w-full h-full flex flex-col gap-4'>
                  <div className='w-60 h-80'>
                    <img className='w-full h-full object-cover' src={product.mainImage} alt={product.name} />
                  </div>
                  <div className='font-bold truncate'>{product.name}</div>
                  <div className='flex gap-2 items-center'>
                    {product.sale > 0 ? (
                      <div className='font-medium'>{formatCurrency(calNewPrice(product.price, product.sale))}</div>
                    ) : (
                      <div className='font-medium'>{formatCurrency(product.price)}</div>
                    )}
                    {product.sale > 0 && (
                      <div className='line-through text-gray-500 opacity-70 text-xs'>
                        {formatCurrency(product.price)}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center'>No products found</div>
        )}
        <div className='mt-4 flex justify-center'>
          <Pagination>
            {totalPages > 0 && (
              <PaginationPrevious className='cursor-pointer' onClick={handlePreviousPage}>
                Previous
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
                Next
              </PaginationNext>
            )}
          </Pagination>
        </div>
      </div>
    </div>
  )
}
