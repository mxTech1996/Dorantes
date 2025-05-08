import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { FaUserMd, FaHandshake, FaSmileBeam } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className='bg-indigo-950 text-white rounded-3xl px-6 py-12 md:flex items-center gap-10 max-w-6xl mx-auto mt-10'>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='flex-1'
      >
        <img
          src={dataSite.image_hero2}
          alt='Therapy session'
          className='rounded-2xl w-full object-cover'
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex-1 space-y-6'
      >
        <span className='inline-block text-sm bg-purple-300 text-indigo-900 font-medium px-4 py-1 rounded-full'>
          Why choose our clinic?
        </span>
        <h2 className='text-3xl md:text-4xl font-bold'>
          What makes us different
        </h2>

        <div className='space-y-6'>
          {/* Feature 1 */}
          <div className='flex items-start gap-4'>
            <FaUserMd className='text-yellow-400 text-xl mt-1' />
            <div>
              <h4 className='font-semibold text-lg'>Licensed Professionals</h4>
              <p className='text-sm text-gray-200'>
                All sessions are conducted by certified psychologists and
                therapists with years of clinical experience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className='flex items-start gap-4'>
            <FaHandshake className='text-orange-400 text-xl mt-1' />
            <div>
              <h4 className='font-semibold text-lg'>Personalized Approach</h4>
              <p className='text-sm text-gray-200'>
                We tailor treatment plans to each individual&#39;s mental health
                needs, fostering trust and long-term growth.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className='flex items-start gap-4'>
            <FaSmileBeam className='text-green-400 text-xl mt-1' />
            <div>
              <h4 className='font-semibold text-lg'>Comfort & Accessibility</h4>
              <p className='text-sm text-gray-200'>
                Enjoy a welcoming environment, flexible scheduling, and both
                in-person and online sessions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
