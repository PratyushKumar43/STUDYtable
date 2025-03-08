import Image from 'next/image';

const PersonalizedAssessment = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <Image 
            src="/PersonalizedAssessment.png" 
            alt="Progress Chart Interface" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Personalized Assessment
          </h2>
          
          <p className="text-gray-800 dark:text-black-200 mb-6">
            We measure your learning differently. Not just comparing you among your 
            classmates and peers rather, how much you have learnt and how much have 
            your skills in each subject have grown. We create test based on your 
            learning session and exam requirement to understand and modify study plan 
            for you. The test are uniquely created for each student to improve and 
            advance their respective knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedAssessment;
