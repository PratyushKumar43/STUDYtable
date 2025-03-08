'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const OverviewPage = () => {
  // Using useState to handle client-side rendering properly
  const [mounted, setMounted] = useState(false);

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <div className="flex justify-between items-start mb-8">
          <Image 
            src="/logo.png" 
            alt="StudyTable Logo" 
            width={150} 
            height={50} 
            className="object-contain"
          />
          <Link 
            href="/signup" 
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Apply for admission
          </Link>
        </div>

        <div className="flex gap-16">
          {/* Left Sidebar */}
          <div className="w-64">
            <h2 className="text-xl mb-6">Overview</h2>
            <div className="space-y-3 text-gray-500">
              <p>Product Strategy</p>
              <p>By Learning</p>
              <p>By Assessing</p>
              <p>By managing</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl text-center font-bold mb-8">Product strategy</h1>
            
            <div className="space-y-6 text-gray-800">
              <p className="text-justify">
                When we imagine teaching process I see two important activity. First, where students take a particular lecture or class. Where a teacher explains a topic and important concepts. Second, part of the learning happens when a student goes out of the class. When he reads by himself and solves a question. While both parts are necessary but it is the second part that matters the most. Our product is for that second part.
              </p>

              <div>
                <p className="mb-4 text-justify">
                  <span className="font-semibold">That second part</span> constitutes reading, doing questions, revising topic, mock test, practice sheets, managing study, different subjects, different exams and a lot more that can be comprehend. Our focus in this iteration is on three core parts
                </p>
                <div className="space-y-1 ml-4 mb-12">
                  <p>I. Learning</p>
                  <p>II. Assessing</p>
                  <p>III. Managing</p>
                </div>
              </div>

              {/* By Learning Section */}
              <section>
                <h2 className="text-3xl text-center font-bold mb-8">By Learning</h2>
                <p className="mb-4 text-justify">
                  It means learning by reading and practicing questions. I am breaking it for two parts.
                </p>
                <ol className="list-decimal list-inside mb-6 ml-4 space-y-1">
                  <li>First time learning and growing: Linear move</li>
                  <li>Revision and Reassuring</li>
                </ol>
                <p className="mb-4 text-justify">
                  In General, A student opens a Book or sheet by a coaching institute or a question bank book to start reading the concept and do practice from them. There are some good books. Similarly, there are good question banks and coaching material. Every student starts from the beginning and travels as he or she flips the pages.
                </p>
                <p className="mb-4 text-justify">
                  One problem is the sequence of theory and question. They are mostly separate. Fewer theoretical parts can only be understood unless prior theory has been understood completely and that comes only when you have practiced it enough. This is critical in learning as the student's mental state gets affected and in turn, mental states compound over the years that results in a better or worse student. These minor events create a huge difference in overall performance of a student over the year.
                </p>
                <p className="mb-4 text-justify">
                  Now imagine someone is sitting right by the side of the student at his private study hour. That someone knows the book, syllabus and its every detail of it. And he gives a page to the student for the immediate study. He watches the student carefully while the learning process goes on. And when it ends he hands over another sheet. Then the student learns this one. Again, at the end of the session that someone analyzes all the previous sessions and gives the student another sheet. And the process continues like that…Crafting the learning process. When and what to read. When and what question to solve. We do this.
                </p>
                <p className="mb-4 text-justify">
                  Another problem arises when he gets stuck. Either he needs to wait for another day or see the solution. Some smart students go back, read the question and try it back. This process is very emotional. Many students see the solution and make up their minds whether it is easy or hard. Whether he will be able to do the question next time or not. Learning is hard. And anyone who says he learns easily is basically a lie. It takes rigorous training in that particular subject for hours or months that makes a student or a person intuitive enough or smart enough to tackle the question easily or understand that concept. It is also that rigorous moment where the difference occurs. It is very emotional and affects a student psychologically for the subject and the study in general.
                </p>
                <p className="mb-4 text-justify">
                  Now imagine that someone, let's call him Mr. B and I will use this name throughout the document to describe our product as a human, who is already at the study table. When the student gets stuck, Mr. B hands over a small sheet. That sheet contains only a hint to go just one more step for the question. That sheet contains only that concept that needed to be applied to that particular question. That sheet contains only that concept that will help the student to understand the article he is reading. And once the student is done, he takes away the smaller sheet and walks him back to the question or article he was engaged with. Mr. B is different than a human teacher. He never gets frustrated. He never gets bored. He got all the time for that student only. The student feels slight tough, as learning is tough, but he never gets frustrated as a whole. He never goes anywhere else or looks for any alternative. He gets all the help he needs by Mr. B. We do this.
                </p>
              </section>

              {/* By Assessing Section */}
              <section>
                <h2 className="text-3xl text-center font-bold mb-8">By Assessing</h2>
                <p className="mb-4 text-justify">
                  It means trying practice sheets, exams, and trying to understand where they land. Primarily, assessment happens in two ways.
                </p>
                <ol className="list-[lower-alpha] list-inside mb-4 ml-4 space-y-1">
                  <li>When a teacher asks a question to the whole class and demands for the answer.</li>
                  <li>Test series. Many students create their own exam sessions and try to assess them.</li>
                </ol>
                <p className="mb-4 text-justify">
                  The problem with these assessments are:
                </p>
                <ol className="list-decimal list-inside mb-6 ml-4 space-y-1">
                  <li>They are in general.</li>
                  <li>They are on a fixed time.</li>
                  <li>It takes time to get the result.</li>
                  <li>When a student does get the result, they see the performance as a function of the question asked and the subject entertained in the exam.</li>
                  <li>They are also a fixed number of times.</li>
                </ol>
                <p className="mb-4 text-justify">
                  Now imagine if we can create an assessment after a fixed number of concepts. The assessment is unlimited, and the student's number of hours will determine when he gets one.
                </p>
                <p className="mb-4 text-justify">
                  What topic of assessment needs to be done? Remember Mr. B was at the table. He knows where the problem was faced earlier and hence how an assessment should be created to test whether that concept is learned and understood or not!
                </p>
                <p className="mb-4 text-justify">
                  Mr. B has no other thing to do except think about that student. So he hands over the test result immediately. We create a specific assessment for that student. Assessment happens whenever a student has studied enough that can clutter his thought and he needs an assessment. We do all that.
                </p>
              </section>

              {/* By Managing Section */}
              <section>
                <h2 className="text-3xl text-center font-bold mb-8">By Managing</h2>
                <p className="mb-4 text-justify">
                  It means keeping track of what happens in learning and assessing along with exams, schools, and other factors that affect their life and are key aspects of their learning.
                </p>
                <p className="mb-4 text-justify">
                  There is a context of learning and students have some exams to crack. Students constantly need to check whether they are meeting the demands of the exam or not.
                </p>
                <p className="mb-4 text-justify">
                  This is mostly done by none. Only few students do make charts and plan for themselves. Most of them just follow school and college framework. This gets highly unmanaged.
                </p>
                <p className="mb-4 text-justify">
                  This is the reason why 60% of students quit their preparation by the time they reach 12th standard for JEE or NEET. Another 20% also shift to boards six months before the exam. They start going on a zigzag path and it is this mismanagement at this time which affects their outcome hugely.
                </p>
                <p className="mb-4 text-justify">
                  Now imagine if we keep tracking the exam requirement from the beginning. Keep prioritizing the study show that minimum is always insured. Students, based on their number of hours and capacity, get their own particular plan. Imagine while we are teaching we expose them with the questions and study in a way that consecutively takes care of the exam. Since now they do not need to worry for the minimum they can remain calm and feel more confident. No one knows what could be the highest height, but we can, for sure, constrain the minimum threshold height. And when there is this level of management they will do wonders. We do wonders.
                </p>
              </section>

              {/* Call to Action Section */}
              <section className="mt-12 pt-6 border-t text-center">
                <h3 className="text-3xl text-center font-bold mb-8">Crafted for your all academic needs</h3>
                <Link 
                  href="/signup" 
                  className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Get your Entry
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      {/* Only render the footer when mounted to prevent hydration mismatch */}
      <div className="flex-shrink-0">
        {mounted ? <Footer /> : <div className="py-8 px-4 md:px-8 bg-gray-100 dark:bg-[#0B172A]"></div>}
      </div>
    </div>
  );
};

export default OverviewPage;
