import { useState } from 'react'
import ProductCard from './ProductCard'
import { DataArrivals } from '@/lib/DataArrivals'
import { Button } from '@/components/ui/button'

export default function Arrivals() {
  // Initialize selectedType with 'MenFashion'
  const [selectedType, setSelectedType] = useState<string>('MenFashion')

  const handleNavClick = (type: string) => {
    setSelectedType(type)
  }

  const filteredProducts =
    DataArrivals.filter((product) => product.type === selectedType)

  if(filteredProducts.length > 6) {
    filteredProducts.length = 6;
  }

  // Function to add active class
  const getButtonClass = (type: string) => {
    return `${selectedType === type ? 'hover:bg-black hover:text-white' : 'bg-[#FAFAFA] text-[#8A8A8A] shadow-none hover:bg-[#FAFAFA] hover:text-[#8A8A8A]' }`;
  }

  return (
    <div>
      <div className='flex justify-center space-x-10 p-4'>
        <Button onClick={() => handleNavClick('MenFashion')} className={getButtonClass('MenFashion')}>
          Men's Fashion
        </Button>
        <Button onClick={() => handleNavClick('WomenFashion')} className={getButtonClass('WomenFashion')}>
          Women's Fashion
        </Button>
        <Button onClick={() => handleNavClick('DiscountDeal')} className={getButtonClass('DiscountDeal')}>
          Discount Deals
        </Button>
      </div>
      <div className='grid grid-cols-3 gap-10 px-10 mt-3'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
