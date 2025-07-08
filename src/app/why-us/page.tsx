import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us - Company Name',
  description: 'Discover our unique value proposition, expert team, and proven track record in delivering innovative solutions.',
  keywords: ['USP', 'value proposition', 'expertise', 'testimonials', 'why choose us']
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, Tech Corp',
    text: 'Their innovative approach transformed our digital infrastructure completely.'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, StartUp Inc',
    text: 'Exceptional expertise and reliable delivery - truly partners in our success.'
  }
];

export default function WhyUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Why Choose Company Name?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We deliver transformative solutions through innovative technology, proven expertise, and unwavering commitment to client success.
        </p>
      </section>

      {/* Value Propositions */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {['Innovation Engine', 'Proven Expertise', 'Client-Centric'].map((title) => (
          <div key={title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {title === 'Innovation Engine' && 'Pioneering solutions that redefine industry standards through cutting-edge R&D'}
              {title === 'Proven Expertise' && '150+ successful implementations across 20 industries with measurable ROI'}
              {title === 'Client-Centric' && 'Dedicated partnership model ensuring alignment with your strategic objectives'}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {['AI/ML', 'Cloud Solutions', 'Cybersecurity', 'IoT'].map((tech) => (
            <div key={tech} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-3" />
              <h3 className="font-semibold">{tech}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">15+ years experience</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
