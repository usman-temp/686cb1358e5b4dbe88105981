import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Founder - Company Name',
  description: 'Learn about our visionary founder, their journey, and the driving force behind our company success.',
  keywords: ['founder', 'biography', 'leadership', 'entrepreneur', 'company history']
};

export default function FounderPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          Meet Our Founder
        </h1>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-semibold">John Doe</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">CEO & Visionary Leader</p>
            <p className="text-gray-600 dark:text-gray-300">
              With over 15 years of experience in technology leadership, John has been driving innovation
              and digital transformation since founding the company in 2010.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400" aria-label="LinkedIn profile">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400" aria-label="Twitter profile">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">Journey & Experience</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
          {[2010, 2015, 2020, 2024].map((year) => (
            <div key={year} className="relative pl-8">
              <div className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full" />
              <article className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{year}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {year === 2010 && 'Founded Company Name with vision to revolutionize tech industry'}
                  {year === 2015 && 'Led company through Series A funding round'}
                  {year === 2020 && 'Recognized as Tech Leader of the Year by Industry Awards'}
                  {year === 2024 && 'Expanded operations to 3 continents with 500+ employees'}
                </p>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">Notable Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Innovation Award {item}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recognized for groundbreaking work in digital transformation and AI integration.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
