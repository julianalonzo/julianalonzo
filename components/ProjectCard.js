import Link from 'next/link';

import ScrollAnimation from 'react-animate-on-scroll';

export default function ProjectCard({
  id,
  title,
  description,
  logoPath,
  index
}) {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      offset={50}
      delay={(index + 1) * 100}
      className="flex relative m-6 w-3/4 sm:w-1/3 lg:w-1/4 lg:m-6"
    >
      <div className="p-6 pb-8 shadow rounded-lg bg-white text-center w-full">
        <img className="w-12 m-auto" src={logoPath} alt={title} />
        <div className="mt-2">
          <h6 className="font-sans font-medium font-bold">{title}</h6>
          <p className="font-sans text-sm text-gray-500 mb-2">{description}</p>
        </div>
      </div>
      <div
        className="absolute -bottom-2 left-1/2"
        style={{ marginLeft: '-60px' }}
      >
        <Link href={`/projects/${id}`}>
          <a className="py-2 px-4 bg-yellow-400 font-sans text-xs tracking-widest text-yellow-900 rounded-full focus:outline-none shadow-md hover:shadow-lg hover:bg-yellow-500 focus:shadow-lg focus:bg-yellow-500 uppercase">
            Learn More
          </a>
        </Link>
      </div>
    </ScrollAnimation>
  );
}
