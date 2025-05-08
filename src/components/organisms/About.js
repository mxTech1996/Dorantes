import { FaCheckCircle } from 'react-icons/fa';

export default function AboutPsychology() {
  return (
    <section className='bg-white py-20 px-6 md:px-16'>
      <div
        id='about'
        className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'
      >
        {/* Left */}
        <div>
          <span className='inline-block px-4 py-2 text-sm font-semibold bg-purple-100 text-purple-800 rounded-full mb-4'>
            About us
          </span>
          <h2 className='text-4xl font-extrabold text-gray-900 mb-6 leading-tight'>
            We’re more than just mental health support
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            From individual therapy sessions to executive mental coaching, we
            provide carefully curated services designed to help clients manage
            stress, anxiety, and emotional challenges in their personal and
            professional lives.
          </p>
        </div>

        {/* Right */}
        <div className='space-y-10'>
          <div className='flex items-start space-x-4'>
            <FaCheckCircle className='text-purple-600 text-xl mt-1' />
            <div>
              <h4 className='text-xl font-semibold text-gray-900'>
                Personalized Treatment Plans
              </h4>
              <p className='text-gray-600 mt-1'>
                Each client receives a tailored plan, combining evidence-based
                therapy with holistic care to ensure lasting results.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <FaCheckCircle className='text-purple-600 text-xl mt-1' />
            <div>
              <h4 className='text-xl font-semibold text-gray-900'>
                Confidential & Compassionate Care
              </h4>
              <p className='text-gray-600 mt-1'>
                We prioritize your privacy and emotional well-being, providing a
                safe and supportive environment every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
