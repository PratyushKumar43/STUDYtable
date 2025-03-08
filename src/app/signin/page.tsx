'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SigninPage() {
  const [formData, setFormData] = useState({
    admissionNo: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle authentication here
    console.log('Sign in attempt:', formData);
    // You could add API call or redirect logic here
    alert('Sign in successful!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="max-w-md mx-auto px-4 py-12 flex-grow w-full">
        <div className="mb-8 text-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="StudyTable Logo" 
              width={150} 
              height={50} 
              className="object-contain cursor-pointer mx-auto"
            />
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="admissionNo" className="block text-sm font-medium text-gray-700 mb-1">
                Admission Number
              </label>
              <input
                type="text"
                id="admissionNo"
                name="admissionNo"
                value={formData.admissionNo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your admission number"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Sign In
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-600">
              <p>Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Apply for admission</Link></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
