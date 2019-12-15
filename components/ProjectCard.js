import React from 'react';

import Link from 'next/link';

export default function ProjectCard({ title, description }) {
  return (
    <div className="w-3/4 m-4 sm:w-1/3 lg:w-1/4 lg:m-6">
      <div className="p-6 pb-8 shadow rounded-lg bg-white text-center">
        <img className="w-12 m-auto" src="/static/kaagapai-logo.svg" />
        <div className="mt-2">
          <h6 className="font-sans font-medium font-bold">{title}</h6>
          <p className="font-sans text-sm text-gray-500 mb-2">{description}</p>
        </div>
      </div>
      <div className="text-center -mt-5">
        <Link href="/projects/[id]" as={`/projects/${title}`}>
          <button className="py-2 px-4 bg-yellow-400 font-sans text-xs tracking-widest text-yellow-900 rounded-full outline-none focus:outline-none focus:outline-yellow-200 shadow-md hover:shadow-lg hover:bg-yellow-500 uppercase">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
