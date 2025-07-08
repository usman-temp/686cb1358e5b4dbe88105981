import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Company Name',
  description: 'Learn about our mission, values, and the team dedicated to driving innovation in our industry.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Our Story
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Founded in 2010, we've been at the forefront of digital innovation, helping businesses transform their ideas into reality through cutting-edge solutions.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section className="space-y-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses through innovative technology solutions that drive growth, efficiency, and sustainable success.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Customer-Centric Innovation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ethical Business Practices
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sustainable Growth
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-3" />
                <h3 className="font-medium mb-1">Team Member</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Journey</h2>
        <div className="relative h-1 bg-gray-200 dark:bg-gray-700 max-w-4xl mx-auto mb-8">
          <div className="absolute left-0 w-1/3 h-full bg-blue-600" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">2010</h3>
            <p className="text-gray-600 dark:text-gray-300">Founded with 5 team members</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">2015</h3>
            <p className="text-gray-600 dark:text-gray-300">Expanded to international markets</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">2024</h3>
            <p className="text-gray-600 dark:text-gray-300">Serving 1000+ clients worldwide</p>
          </div>
        </div>
      </section>
    </div>
  );
}
