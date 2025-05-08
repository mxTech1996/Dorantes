import { dataSite } from '@/data';
import Link from 'next/link';
import { FaUserMd, FaHeart, FaComments } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='bg-indigo-50 py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Left */}
        <div className='bg-yellow-300 p-8 rounded-3xl space-y-6 relative'>
          <h2 className='text-blck text-4xl font-bold'>NeuroMind</h2>
          <h1 className='text-5xl  font-extrabold leading-tight text-indigo-700'>
            {dataSite.subtitle}
          </h1>
          <p className='text-gray-800 mb-5'>{dataSite.description}</p>
          <Link href='/#products'>
            <button className='bg-indigo-700 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition'>
              Get Started
            </button>
          </Link>

          {/* Floating Avatars */}
          {/* <div className='absolute -bottom-6 left-8 flex space-x-[-10px]'>
            {['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg'].map((src, i) => (
              <img
                key={i}
                src={src}
                className='w-10 h-10 rounded-full border-2 border-white'
                alt='Client'
              />
            ))}
          </div> */}
        </div>

        {/* Right */}
        <div className='relative'>
          <img
            src={dataSite.image_hero}
            alt='Therapy visual'
            className='rounded-3xl object-cover w-full h-[500px]'
          />
          {/* Decorative Icons */}
          <FaHeart className='absolute top-4 -right-8 text-pink-500 text-xl animate-bounce' />
          <FaUserMd className='absolute top-1/2 -right-8 text-indigo-500 text-2xl animate-bounce' />
          <FaComments className='absolute bottom-4 -right-8 text-yellow-500 text-xl animate-bounce' />
        </div>
      </div>
    </section>
  );
}
