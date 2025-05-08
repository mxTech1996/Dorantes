'use client';

import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { dataSite } from '@/data';
import { useRouter } from 'next/navigation';
import { useCart } from 'ecommerce-mxtech';

const products = dataSite.products;

export default function ProductsSection() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const router = useRouter();

  const scroll = (direction) => {
    const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;
    setIndex((prev) => {
      if (direction === 'left') return Math.max(prev - 1, 0);
      if (direction === 'right') return Math.min(prev + 1, maxIndex);
      return prev;
    });
  };

  const visibleItems = products.slice(
    index * itemsPerPage,
    index * itemsPerPage + itemsPerPage
  );

  return (
    <section id='products' className='py-20 px-6 md:px-16 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-10'>
          <div>
            <span className='inline-block px-4 py-2 text-sm font-semibold bg-purple-100 text-purple-800 rounded-full mb-2'>
              Shop
            </span>
            <h2 className='text-4xl font-bold text-gray-900'>
              Explore our products
            </h2>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => scroll('left')}
              className='bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-3'
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className='bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-3'
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel with 3 fixed items */}
        <div o className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {visibleItems.map((product, i) => {
            return (
              <motion.div
                key={i}
                className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  onClick={() => router.push(`/product/${product.id}`)}
                  src={product.image}
                  alt={product.name}
                  className='w-full h-56 object-cover cursor-pointer'
                />
                <div className='p-4'>
                  <h4 className='text-lg font-semibold text-gray-900'>
                    {product.name}
                  </h4>
                  <p className='text-gray-600 mt-2'>{product.description}</p>
                  <p className='text-purple-600 font-bold mt-2'>
                    {product.price}
                  </p>
                  {/* button add to cart */}
                  <button
                    onClick={() => {
                      handleAddOrRemoveProduct(product.id);
                    }}
                    className='mt-4 bg-purple-600 text-white rounded-full px-4 py-2 hover:bg-purple-700 transition'
                  >
                    {validateProductInCart(product.id)
                      ? 'Remove from Cart'
                      : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
