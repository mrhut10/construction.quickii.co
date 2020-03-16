import React, { useState } from 'react';

import { Link } from 'gatsby';
import { useGraphQL } from '../hooks/use-graphql';
import Logo from './icons/logo';

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const {
    site: {
      siteMetadata: { navigation },
    },
  } = useGraphQL();
  return (
    <nav className="shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <Logo
                className="w-auto h-8 fill-current text-brand-600 sm:h-10"
                aria-label=""
              />
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex">
            <a
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-brand-500 focus:outline-none focus:border-brand-700"
            >
              Dashboard
            </a>
            {navigation.secondary.map(navItem => (
              <Link
                key={navItem.link}
                to={navItem.link}
                activeClassName="text-gray-900 border-brand-500 focus:text-gray-900 focus:border-brand-700"
                className="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent first:ml-0 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                {navItem.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            <button
              onClick={() => setOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  // :class="{'hidden': open, 'inline-flex': !open }"
                  className={isOpen ? 'hidden' : 'inline-flex'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'inline-flex' : 'hidden'}
                  // :class="{'hidden': !open, 'inline-flex': open }"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          // :class="{'block': open, 'hidden': !open}"
          className="sm:hidden"
        >
          <div className="pt-2 pb-3">
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 text-brand-700 border-brand-500 bg-brand-50 focus:outline-none focus:text-brand-800 focus:bg-brand-100 focus:border-brand-700"
            >
              Dashboard
            </a>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            >
              Team
            </a>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            >
              Projects
            </a>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
