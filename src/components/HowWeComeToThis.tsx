import Link from 'next/link';

const HowWeComeToThis = () => {
  return (
    <section className="py-16 px-4 md:px-8 fade-in-up">
      <div className="max-w-6xl mx-auto border-2 border-gray-200 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          How we come to this?
        </h2>
        
        <p className="text-black-800 mb-6 max-w-3xl ">
          We observed and researched for three years in a variety of student. 
          Where The best needs more attention to do better and the student 
          struggling needs more attention to improve their own abilities. 
          All students need personal attention. Based on the notion of 'Personal 
          attention' we have built our algorithm and AI tutor to cater each 
          children uniquely…
        </p>
        
        <Link 
          href="/story" 
          className="inline-flex items-center text-[#007BFF] hover:text-[#0056b3] font-semibold transition-colors"
        >
          Read the full story →
        </Link>
      </div>
    </section>
  );
};

export default HowWeComeToThis;
