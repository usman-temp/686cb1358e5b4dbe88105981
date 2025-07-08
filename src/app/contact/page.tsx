'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Submission failed');
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              {...register('subject')}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              {...register('message')}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              123 Business Street<br />
              New York, NY 10001<br />
              Phone: (555) 123-4567<br />
              Email: info@company.com
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-medium mb-2">Data Policy</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}