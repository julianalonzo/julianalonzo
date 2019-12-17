import Link from 'next/link';

export default function ProjectCard({ id, title, description, logoPath }) {
  return (
    <div className="flex relative m-6 w-3/4 sm:w-1/3 lg:w-1/4 lg:m-6">
      <div className="p-6 pb-8 shadow rounded-lg bg-white text-center w-full">
        <img className="w-12 m-auto" src={logoPath} alt={title} />
        <div className="mt-2">
          <h6 className="font-sans font-medium font-bold">{title}</h6>
          <p className="font-sans text-sm text-gray-500 mb-2">{description}</p>
        </div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2"
        style={{ marginLeft: '-60px' }}
      >
        <Link href={`/projects/${id}`}>
          <button className="py-2 px-4 bg-orange-400 font-sans text-xs tracking-widest text-orange-900 rounded-full outline-none focus:outline-none focus:outline-orange-300 shadow-md hover:shadow-lg hover:bg-orange-500 uppercase">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
