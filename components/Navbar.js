import { useState } from 'react';

import Link from 'next/link';

export default function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <nav className="w-full py-2 fixed frosted-glass z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a
              className="focus:outline-none focus:bg-dark-fade rounded-lg block"
              onClick={() => setIsNavMenuOpen(false)}
            >
              <img
                src="/static/logo.svg"
                className="h-10 lg:h-8"
                alt="Julian Alonzo"
              />
            </a>
          </Link>
          <div className="hidden md:block">
            <Link href="/#projects">
              <a className="px-3 py-2 rounded-lg text-gray-700 mr-8 text-sm font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade">
                Projects
              </a>
            </Link>
            <Link href="#contacts">
              <a className="px-3 py-2 rounded-lg text-gray-700 mr-8 text-sm font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade">
                Contact
              </a>
            </Link>
            <a
              href="/static/Julian-Alonzo-Resume.pdf"
              target="_blank"
              className="px-3 py-2 rounded-lg text-gray-700 text-sm font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
            >
              Resume
            </a>
          </div>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:bg-dark-fade"
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-10 fill-current text-gray-700"
            >
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
        {isNavMenuOpen ? (
          <div className="pt-8 pb-2 md:hidden">
            <Link href="/#projects">
              <a
                className="block px-3 py-2 mb-2 rounded-lg text-gray-700 font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
                onClick={() => setIsNavMenuOpen(false)}
              >
                Projects
              </a>
            </Link>
            <Link href="#contacts">
              <a
                className="block px-3 py-2 mb-2 rounded-lg text-gray-700 font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
                onClick={() => setIsNavMenuOpen(false)}
              >
                Contact
              </a>
            </Link>
            <a
              href="/static/Julian-Alonzo-Resume.pdf"
              target="_blank"
              className="block px-3 py-2 rounded-lg text-gray-700 font-sans focus:outline-none focus:bg-dark-fade hover:bg-dark-fade"
              onClick={() => setIsNavMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
