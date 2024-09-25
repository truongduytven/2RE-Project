// import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { useState } from 'react'

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
                      <button
                        key={collection}
                        className={`border-none border-gray-300 text-left px-2 py-1 rounded`}
                      >
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
      <div className='flex flex-grow' style={{ flex: '3.5' }}></div>
    </div>
  )
}
