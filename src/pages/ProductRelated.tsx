import ProductCard from '@/components/local/Shop/ProductCard';
import { DataArrivals } from '@/lib/DataArrivals';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface ProductRelatedInterface {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
  discount: number;
  hasSold: number;
}

interface ProductRelatedListProps {
  products: ProductRelatedInterface[];
}

const ProductRelated: React.FC<ProductRelatedListProps> = ({ products }) => {
  const listProducts = DataArrivals.slice(0, 4);

  return (
    <div className="mb-4">
      <div className="border-b-4 border-black -mb-4">
        <h2 className="text-3xl font-bold pt-4 pb-2 pl-2">Product related</h2>
      </div>
      <div className='grid grid-cols-5'>
        {listProducts.map((product) => (
          <div className='scale-75 flex justify-center'>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRelated;
