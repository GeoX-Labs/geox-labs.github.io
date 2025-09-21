
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-600 dark:text-primary-400 sm:text-5xl">Meet the Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          The brilliant minds behind GeoX's research and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
