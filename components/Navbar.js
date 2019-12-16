export default function Navbar() {
  return (
    <nav className="w-full py-2 fixed frosted-glass z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="focus:outline-none focus:bg-dark-fade rounded-lg block"
          >
            <img src="/static/logo.svg" className="h-8" />
          </a>
          <div className="hidden md:block">
            <a
              href="/"
              className="px-3 py-2 rounded-lg text-gray-700 mr-8 text-sm font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
            >
              Projects
            </a>
            <a
              href="/"
              className="px-3 py-2 rounded-lg text-gray-700 text-sm font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden rounded-lg focus:outline-none focus:bg-dark-fade">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 fill-current text-gray-700"
            >
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
