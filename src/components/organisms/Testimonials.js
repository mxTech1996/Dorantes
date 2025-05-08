import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const testimonials = dataSite.references;

export default function TestimonialsSection() {
  return (
    <section id='testimonials' className='bg-white py-16 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-12'>
          <span className='bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-1 rounded-full mb-2 inline-block'>
            Testimonials
          </span>
          <h2 className='text-4xl font-bold text-gray-900'>
            What our clients say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className='bg-purple-50 p-6 rounded-xl shadow-sm'
            >
              <p className='text-gray-700 text-lg font-semibold mb-4'>
                “{t.description}”
              </p>
              <div className='flex items-center gap-4 mt-4'>
                {/* <img
                  src={t.avatar}
                  alt={t.name}
                  className='w-10 h-10 rounded-full object-cover'
                /> */}
                <div>
                  <p className='font-medium text-gray-800'>{t.name}</p>
                  <div className='text-yellow-400 text-sm'>
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
