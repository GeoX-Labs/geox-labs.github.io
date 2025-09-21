import React from 'react';
import type { TeamMember, Demo } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Background', path: '/background' },
  { name: 'Demos', path: '/demos' },
  { name: 'Team', path: '/team' },
];

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: <GithubIcon/> },
  { name: 'Twitter', url: 'https://twitter.com', icon: <TwitterIcon /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedinIcon/> },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Principal Investigator',
    imageUrl: 'https://picsum.photos/seed/evelyn/400/400',
    bio: 'Pioneering research in geometric deep learning and manifold theory. Expert in understanding the intrinsic structures of high-dimensional data.',
  },
  {
    name: 'Dr. Kenji Tanaka',
    role: 'Senior Researcher',
    imageUrl: 'https://picsum.photos/seed/kenji/400/400',
    bio: 'Focuses on the application of differential geometry to optimize neural network architectures and improve generalization.',
  },
  {
    name: 'Amina Yusuf',
    role: 'PhD Candidate',
    imageUrl: 'https://picsum.photos/seed/amina/400/400',
    bio: 'Investigating symmetries and equivariant networks to build more robust and data-efficient models.',
  },
  {
    name: 'Leo Chen',
    role: 'PhD Candidate',
    imageUrl: 'https://picsum.photos/seed/leo/400/400',
    bio: 'Exploring the topology of loss landscapes to develop novel optimization algorithms that escape local minima.',
  },
    {
    name: 'Sofia Garcia',
    role: 'Research Engineer',
    imageUrl: 'https://picsum.photos/seed/sofia/400/400',
    bio: 'Develops and maintains the open-source software and interactive demos for GeoX Labs.',
  },
   {
    name: 'Dr. Ben Carter',
    role: 'Postdoctoral Fellow',
    imageUrl: 'https://picsum.photos/seed/ben/400/400',
    bio: 'Researches the intersection of information geometry and generative models, aiming to create more powerful and interpretable AI.',
  },
];

export const DEMOS: Demo[] = [
  {
    title: 'Visualizing Loss Landscapes',
    description: 'An interactive exploration of a 2D slice of a neural network\'s loss landscape. See how optimization algorithms navigate complex surfaces to find minima.',
    imageUrl: 'https://picsum.photos/seed/loss-landscape-demo/800/600',
    notebookUrl: 'https://github.com',
  },
  {
    title: 'Manifold Unfolding',
    description: 'Watch how a neural network learns to untangle a complex data manifold, separating distinct classes of data in its latent space.',
    imageUrl: 'https://picsum.photos/seed/manifold-demo/800/600',
    notebookUrl: 'https://github.com',
  },
  {
    title: 'Equivariant CNNs in Action',
    description: 'Compare a standard CNN with an equivariant one on rotated input data. Notice the improved consistency and performance of the equivariant model.',
    imageUrl: 'https://picsum.photos/seed/equivariant-demo/800/600',
    notebookUrl: 'https://github.com',
  },
];
