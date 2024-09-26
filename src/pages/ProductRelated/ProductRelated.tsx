import React, { useState } from 'react';
import './ProductRelated.scss';
import { FaArrowCircleLeft, FaArrowCircleRight, FaHiking, FaThinkPeaks } from 'react-icons/fa';

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
    <div className="home-suggestion">
      <div className="home-suggestion__header">
        <h2 className="home-suggestion__title"> Product related</h2>
      </div>
      <div className="home-suggestion__products">
        {selectedProducts.map((product) => (
          <div key={product.id} className="home-suggestion__product">
            <div className="home-suggestion__product-image">
              <img src={product.imgSrc} alt={product.title} />
            </div>
            <div className="home-suggestion__product-title">{product.title}</div>
            <div className="home-suggestion__product-data">
              <div className="home-suggestion__product-price">{product.price}</div>
              <div className="home-suggestion__product-sold">{product.hasSold} sold</div>
            </div>
            <div className="home-suggestion__discount">{product.discount}%</div>
          </div>
        ))}
      </div>
      <div className="home-suggestion__pagination">
        <button
          className="home-suggestion__arrow"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FaArrowCircleLeft />
        </button>
        <span className="home-suggestion__page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="home-suggestion__arrow"
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
