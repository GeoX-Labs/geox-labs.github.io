
import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={member.imageUrl} alt={member.name} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">{member.name}</h3>
        <p className="text-md font-light text-gray-700 dark:text-gray-300 mt-1">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
