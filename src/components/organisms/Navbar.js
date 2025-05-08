'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBrain, FaPhoneAlt, FaShoppingBag } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { products } = useCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto'>
        <Link href='/'>
          <div className='flex items-center space-x-2 text-2xl font-bold text-indigo-800'>
            <img
              src={dataSite.iconImage}
              alt='Logo'
              className='w-20 h-20 rounded-full'
            />
            <span>Dorantes</span>
          </div>
        </Link>
        <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
          <a href='/#services'>Services</a>
          <a href='/#about'>About</a>
          <a href='/#products'>Products</a>
          <a href='/more-information'>Contact</a>
        </nav>

        {/* button cart */}

        <div className='relative hidden md:flex items-center space-x-4'>
          <a
            href='/my-cart'
            className='flex items-center text-gray-700 font-medium hover:text-indigo-600 transition'
          >
            {/* counter */}
            <span className='bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2 -left-4'>
              {products.length}
            </span>
            <FaShoppingBag className='text-xl' />
            <span className='ml-1'>Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
}
