
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-600 dark:text-primary-400 sm:text-5xl">About GeoX</h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          Uncovering the geometric principles that govern deep learning.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Our mission at GeoX is to develop a foundational understanding of deep learning through the lens of geometry and topology. We believe that by understanding the intrinsic structure of neural network models and their data representations, we can unlock new paradigms for creating more efficient, reliable, and interpretable artificial intelligence.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We envision a future where AI models are not black boxes, but are designed with clear geometric principles. This will lead to AI systems that can generalize better from less data, are inherently more robust to adversarial attacks, and whose decision-making processes are transparent and understandable.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Core Research Areas</h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-600 dark:text-gray-400">
          <li className="flex items-start">
            <span className="text-primary-500 mr-3 mt-1">&#10148;</span>
            <span><strong>Manifold Learning:</strong> Studying how neural networks learn to represent complex, high-dimensional data on lower-dimensional manifolds.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-3 mt-1">&#10148;</span>
            <span><strong>Loss Landscape Geometry:</strong> Analyzing the shape of the loss function to develop smarter optimization algorithms that find better solutions faster.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-3 mt-1">&#10148;</span>
            <span><strong>Equivariance and Symmetry:</strong> Building symmetries from the data's domain directly into the network architecture to improve data efficiency and model performance.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-500 mr-3 mt-1">&#10148;</span>
            <span><strong>Information Geometry:</strong> Applying concepts from information theory to measure distances and curvature in the space of probability distributions learned by models.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
