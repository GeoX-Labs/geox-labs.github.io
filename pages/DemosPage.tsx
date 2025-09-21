import React from 'react';
import { DEMOS } from '../constants';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const DemosPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-600 dark:text-primary-400 sm:text-5xl">Demos & Notebooks</h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          Explore our research through interactive examples and code. Each demo is accompanied by a GitHub notebook for a deeper dive.
        </p>
      </div>

      <div className="space-y-16">
        {DEMOS.map((demo, index) => (
          <div 
            key={demo.title} 
            className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {demo.imageUrl && (
              <div className="md:w-1/2 w-full">
                <img 
                  src={demo.imageUrl} 
                  alt={demo.title} 
                  className="rounded-lg shadow-md object-cover w-full h-64 md:h-80" 
                />
              </div>
            )}
            <div className={`flex-1 ${!demo.imageUrl && 'w-full max-w-2xl text-center'}`}>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">{demo.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {demo.description}
              </p>
              <a
                href={demo.notebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <GithubIcon />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemosPage;
