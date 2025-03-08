'use client';

import { useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import UnlimitedPractice from '../components/UnlimitedPractice';
import ManagingStudents from '../components/ManagingStudents';
import PersonalizedAssessment from '../components/PersonalizedAssessment';
import HowWeComeToThis from '../components/HowWeComeToThis';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  // Function to handle animations
  const addAnimations = () => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  };
  
  useEffect(() => {
    const cleanup = addAnimations();
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <UnlimitedPractice />
        <ManagingStudents />
        <PersonalizedAssessment />
        <HowWeComeToThis />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
