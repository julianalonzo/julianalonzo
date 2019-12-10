import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen-50 h-full bg-gray-100 pb-24">
      <div className="container mx-auto z-10">
        <div className="text-center mb-4">
          <img src="../static/hammers.svg" className="m-auto w-6" />
          <h2 className="text-xl font-bold font-sans text-yellow-900 uppercase tracking-wider">
            Projects
          </h2>
        </div>
        <div className="p-2 flex flex-wrap justify-center">
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
          <ProjectCard
            title="kaagapAI"
            description="An automated psychotherapy text analysis tool"
          />
        </div>
      </div>
    </div>
  );
}
