import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'kaagapAI',
      description: 'An automated psychotherapy text analysis tool'
    },
    {
      title: 'kaagapAI',
      description: 'An automated psychotherapy text analysis tool'
    },
    {
      title: 'kaagapAI',
      description: 'An automated psychotherapy text analysis tool'
    }
  ];

  return (
    <div className="min-h-screen-50 h-full bg-gray-100 pb-24">
      <div className="container mx-auto z-10">
        <div className="text-center mb-4">
          <img src="/static/hammers.svg" className="m-auto w-6" />
          <h2 className="text-xl font-bold font-sans text-yellow-900 uppercase tracking-widest uppercase">
            Projects
          </h2>
        </div>
        <div>
          <div className="p-2 flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
