import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 'kaagapAI',
      title: 'kaagapAI',
      description: 'An automated psychotherapy text analysis tool',
      logoPath: '/static/kaagapai/kaagapai-logo.svg'
    },
    {
      id: 'eis',
      title: 'Equipment Inventory System (EIS)',
      description: 'An inventory system for IT equipment',
      logoPath: '/static/eis/eis-logo.svg'
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
        <div className="flex flex-wrap justify-center">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
