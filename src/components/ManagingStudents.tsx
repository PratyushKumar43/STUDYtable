import Image from 'next/image';

const ManagingStudents = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Managing students academic life
          </h2>
          
          <p className="text-gray-800 dark:text-black-200 mb-6">
            There is more to study than just practicing giving test. To meet the requirement of board, we need to manage our academic life. We need to plan and to understand the dimension of the subjects. This all needs to be done along with keeping the goal of JEE, NEET, or any other competitive exams. So that you, focus on learning and worry no more.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <Image 
            src="/ManagingStudents.png" 
            alt="Academic Management Interface" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ManagingStudents;
