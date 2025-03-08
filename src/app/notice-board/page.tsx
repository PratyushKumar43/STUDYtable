'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NoticeBoardPage() {
  const [activeTab, setActiveTab] = useState('All Updates');
  
  const tabs = ['All Updates', 'JEE/NEET', 'CBSE', 'ICSE'];
  
  const notices = [
    {
      id: 1,
      title: 'NEET 2025 Application Open',
      content: 'The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.',
      resources: ['Link1', 'Link2', 'Link3'],
      date: 'December 14, 2024',
      tags: ['NEET', 'Application', '2025 Exam']
    },
    {
      id: 2,
      title: 'NEET 2025 Exam Pattern Update',
      content: 'The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.',
      resources: ['Link1', 'Link2', 'Link3'],
      date: 'May 14, 2025',
      tags: ['NEET', 'Application', '2025 Exam']
    },
    {
      id: 3,
      title: 'NEET 2025 Exam Pattern Update',
      content: 'The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.',
      resources: ['Link1', 'Link2', 'Link3'],
      date: 'May 14, 2025',
      tags: ['NEET', 'Application', '2025 Exam']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 px-6 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-2xl font-bold">STUDY<span className="font-normal">table</span></span>
            </div>
          </Link>
          <Link 
            href="/signup" 
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Apply for admission
          </Link>
        </div>
      </header>

      <main className="flex-grow flex bg-gray-50">
        <div className="max-w-6xl mx-auto w-full py-8 px-4 md:px-6 flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <h2 className="text-xl font-bold mb-4">Notice Board</h2>
            <div className="bg-white rounded-lg shadow-sm">
              <ul className="divide-y">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      className={`w-full text-left px-4 py-3 ${activeTab === tab ? 'font-semibold text-blue-600' : 'text-gray-700'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-6">{activeTab}</h1>
            
            <div className="space-y-6">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
                  <p className="text-gray-700 mb-3">{notice.content}</p>
                  
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">Resources: </span>
                    {notice.resources.map((link, index) => (
                      <span key={index}>
                        <a href="#" className="text-blue-500 hover:underline text-sm">{link}</a>
                        {index < notice.resources.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
                    <span>{notice.date}</span>
                    <div className="flex gap-2">
                      {notice.tags.map((tag, index) => (
                        <span key={index} className="text-blue-600">{tag}{index < notice.tags.length - 1 ? ' | ' : ''}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Studytable</h3>
              <p className="text-gray-400 text-sm">© Copyright 2025 Studytable</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">What's App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Blogs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">How we plan learning session?</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How we plan assessment session?</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How we manage student life?</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">The effective student</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
