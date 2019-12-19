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
    <div className="bg-gray-100 mt-8 mb-24 md:mb-40">
      <div className="container mx-auto">
        <div className="text-center mb-4 md:mb-12">
          <img src="/static/hammers.svg" className="w-8 inline mb-2 md:w-10" />
          <h2 className="text-xl font-sans font-bold text-green-900 uppercase tracking-wider md:text-2xl">
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
