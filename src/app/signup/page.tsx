'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    academicJourney: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    // You could add API call or redirect logic here
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="max-w-3xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="mb-8">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="StudyTable Logo" 
              width={150} 
              height={50} 
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Apply for Admission</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label htmlFor="academicJourney" className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about your academic journey
              </label>
              <textarea
                id="academicJourney"
                name="academicJourney"
                value={formData.academicJourney}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share your academic background, achievements, and goals..."
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
