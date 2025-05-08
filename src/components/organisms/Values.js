import { dataSite } from '@/data';
import Link from 'next/link';
import { FaHeart, FaShieldAlt, FaBrain } from 'react-icons/fa';

export default function ValuesSection() {
  return (
    <section id='about' className='bg-white py-20 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left */}
        <div>
          <span className='inline-block px-4 py-2 text-sm font-semibold bg-purple-100 text-purple-800 rounded-full mb-4'>
            Our values
          </span>
          <h2 className='text-4xl font-extrabold text-gray-900 mb-6 leading-tight'>
            Guided by empathy, integrity, and mental well-being
          </h2>
          <p className='text-gray-600 mb-6'>
            We believe every individual deserves a safe, respectful space to
            explore their thoughts and heal. Our private practice is rooted in
            values that promote emotional growth, clinical excellence, and
            holistic care.
          </p>
          <Link href='/#services'>
            <button className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition'>
              Our Services
            </button>
          </Link>
        </div>

        {/* Right - Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='rounded-xl bg-yellow-100 p-6 shadow-md'>
            <div className='flex items-center mb-4'>
              <FaHeart className='text-purple-700 text-xl mr-2' />
              <h4 className='text-lg font-bold text-gray-900'>
                {dataSite.info[0].title}
              </h4>
            </div>
            <p className='text-sm text-gray-700'>
              {dataSite.info[0].description}
            </p>
          </div>

          <div className='rounded-xl bg-purple-600 text-white p-6 shadow-md'>
            <div className='flex items-center mb-4'>
              <FaShieldAlt className='text-white text-xl mr-2' />
              <h4 className='text-lg font-bold'>{dataSite.info[1].title}</h4>
            </div>
            <p className='text-sm'>{dataSite.info[1].description}</p>
          </div>

          <div className='rounded-xl bg-green-200 p-6 shadow-md'>
            <div className='flex items-center mb-4'>
              <FaBrain className='text-green-800 text-xl mr-2' />
              <h4 className='text-lg font-bold text-gray-900'>
                {dataSite.info[2].title}
              </h4>
            </div>
            <p className='text-sm text-gray-800'>
              {dataSite.info[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
