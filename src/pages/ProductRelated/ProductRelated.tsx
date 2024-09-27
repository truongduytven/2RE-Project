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
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mb-4">
      <div className="border-b-4 border-black mb-4">
        <h2 className="text-3xl font-bold pt-4 pb-2 pl-2">Product related</h2>
      </div>
      <div className="flex flex-wrap gap-4 ml-4">
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            className="relative w-44 border border-gray-300 rounded overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:border-orange-500"
          >
            <div className="w-full h-36 overflow-hidden">
              <img src={product.imgSrc} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="px-2 py-1 font-bold text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
              {product.title}
            </div>
            <div className="px-2 py-1 flex justify-between text-sm">
              <div className="font-bold">{product.price}</div>
              <div className="text-gray-500">{product.hasSold} sold</div>
            </div>
            <div className="absolute top-2 right-2 bg-gray-300 text-red-600 px-2 py-1 text-sm rounded">
              {product.discount}%
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5 pb-5">
        <button
          className="bg-none border-none text-2xl text-gray-500 cursor-pointer transition-colors hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed mr-4"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FaArrowCircleLeft />
        </button>
        <span className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-none border-none text-2xl text-gray-500 cursor-pointer transition-colors hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed ml-4"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductRelated;
