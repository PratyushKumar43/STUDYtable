import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="py-16 px-4 md:px-8 text-center fade-in-up">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Crafted for your all academic needs
        </h2>
        
        <Link 
          href="/signup" 
          className="inline-block mt-4 bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold py-3 px-8 rounded-md transition-colors"
        >
          Start for Free
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
