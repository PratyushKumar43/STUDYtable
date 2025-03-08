import Image from 'next/image';

const UnlimitedPractice = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Unlimited Practice session
          </h2>
          
          <p className="text-gray-800 dark:text-black-200 mb-6">
            For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your day's need. <span className="font-semibold">Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.</span>
          </p>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="/UnlimitedPractice.png" 
            alt="Practice Session Interface" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default UnlimitedPractice;
