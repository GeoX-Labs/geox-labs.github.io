
import React from 'react';

const BackgroundPage: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-600 dark:text-primary-400 sm:text-5xl">The Geometry of Deep Learning</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Why does the shape of data and models matter?
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">What is a Loss Landscape?</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <p>Imagine you're trying to train a neural network. The "loss" is a number that tells you how wrong the network's predictions are. The lower the loss, the better the model.</p>
            <p>The "loss landscape" is a way to visualize this. Think of it as a vast, high-dimensional mountain range. Each point in this landscape represents a specific configuration of the network's parameters (its weights and biases). The altitude at that point is the loss value.</p>
            <p>Training a network is like being a hiker in this mountain range, blindfolded, trying to find the lowest valley. The path you take is determined by your optimization algorithm (like Gradient Descent), which always tries to walk downhill.</p>
          </div>
          <div className="flex-1">
             <img src="https://picsum.photos/seed/landscape/600/400" alt="Abstract loss landscape" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">The Importance of Shape</h2>
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1 space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <p>The shape of this landscape is incredibly complex and crucial for training. A landscape full of steep, narrow valleys (sharp minima) can be hard to navigate and often leads to models that don't generalize well to new data. They've essentially just memorized the training set.</p>
            <p>In contrast, wide, flat valleys (flat minima) are desirable. Models found in these regions are more robust; small changes to the input data don't drastically alter their output. By studying the geometry of this landscape, we can design algorithms that are better at finding these flat, generalizable solutions.</p>
          </div>
          <div className="flex-1">
             <img src="https://picsum.photos/seed/shape/600/400" alt="Abstract shape visualization" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Data as a Manifold</h2>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
          <p>Real-world data, like images of cats, is high-dimensional. An image with 100x100 pixels has 10,000 dimensions! However, the "data manifold" of all possible cat images is a much smaller, twisted surface within that huge space.</p>
          <p>A good neural network learns to "un-twist" this manifold. It transforms the data so that different categories (like cats and dogs) are easily separable, for instance, by a simple plane. Geometric deep learning studies these transformations to understand how networks perceive and organize information.</p>
        </div>
      </section>
    </div>
  );
};

export default BackgroundPage;
