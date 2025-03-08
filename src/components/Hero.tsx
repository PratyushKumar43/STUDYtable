import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <Image 
          src="/logo.png" 
          alt="StudyTable Logo" 
          width={150} 
          height={50} 
          className="object-contain"
        />
        <div className="flex gap-3">
          <Link 
            href="/signin" 
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/notice-board" 
            className="border border-gray-300 hover:border-gray-400 font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Notice Board
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Optimize <span className="text-blue-500">Your</span><br />
          Performance <span className="text-blue-500">For</span><br />
          JEE, NEET, <span className="text-blue-500">and</span> Boards
          </h1>
          
        <p className="text-gray-800 dark:text-black-200 mb-8 text-lg">
            Your personal AI Tutor for educational needs. Whether the student wants more practice in one subject or they need help with understanding concepts, our AI tutor is designed to provide personalized learning and ongoing interactive sessions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/signup" 
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Apply For Admission
            </Link>
            
            <Link 
              href="/overview" 
              className="border border-gray-300 hover:border-gray-400 font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Overview
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="/Hero.png" 
            alt="Hero Image" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
