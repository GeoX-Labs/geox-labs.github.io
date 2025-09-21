import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative text-center py-20 md:py-32 lg:py-40 px-4 overflow-hidden rounded-lg">
       <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"></div>
       <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 via-transparent to-primary-800/10 dark:from-primary-500/5 dark:to-primary-900/10"></div>
       
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-500">
          Exploring the Geometric<br></br>Frontiers of Deep Learning
        </span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
        GeoX Labs investigates the underlying geometric structures of neural networks to build more powerful, robust, and interpretable AI models.
      </p>
    </div>
  );
};

export default HomePage;