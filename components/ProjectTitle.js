export default function ProjectTitle({
  logoPath,
  title,
  websiteUrl,
  githubUrl
}) {
  return (
    <div className="mb-8 md:inline-flex items-center">
      <div className="flex items-center mr-4">
        <img className="w-10 mr-4" src={logoPath} alt={title} />
        <h1 className="text-4xl font-sans font-bold mb-2">{title}</h1>
      </div>
      <a href={websiteUrl} target="_blank" className="focus:outline-none">
        <button className="py-2 px-4 mr-2 uppercase inline-flex items-center bg-yellow-400 font-sans text-xs tracking-widest text-yellow-900 rounded-full outline-none focus:outline-none shadow-md hover:shadow-lg hover:bg-yellow-500 focus:shadow-lg focus:bg-yellow-500">
          <svg
            className="fill-current w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
          </svg>
          Visit
        </button>
      </a>
      <a href={githubUrl} target="_blank" className="focus:outline-none">
        <button className="py-2 px-4 inline-flex items-center bg-green-400 font-sans text-xs tracking-widest text-green-900 rounded-full outline-none focus:outline-none shadow-md hover:shadow-lg hover:bg-green-500 focus:shadow-lg focus:bg-green-500 uppercase">
          <svg
            className="fill-current w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z" />
          </svg>
          Code
        </button>
      </a>
    </div>
  );
}
