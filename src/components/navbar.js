import React, { useContext } from 'react';
import { Link } from 'gatsby';

import SiteContext from '../context/site-context';
import { useGraphQL } from '../hooks';
import Logo from './logo';

export default function Navbar() {
  const { isNavOpen, setNavOpen } = useContext(SiteContext);
  const {
    allSiteNavigationJson,
    site: {
      siteMetadata: { hero },
    },
  } = useGraphQL();
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto md:pb-6 md:border-b md:border-transparent-white-25 sm:px-6">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="flex-shrink-0 w-12 h-12">
                <Logo
                  bgClassName="fill-current text-white"
                  className="w-auto fill-current text-brand-600 hover:text-brand-500"
                />
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  onClick={() => setNavOpen(true)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-200 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                  <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {allSiteNavigationJson.nodes.map(navItem => (
              <Link
                key={navItem.id}
                to={navItem.link}
                className="ml-10 font-medium text-gray-200 transition duration-150 ease-in-out hover:text-brand-600 focus:outline-none focus:text-brand-600 first:ml-0"
              >
                {navItem.text}
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
              <a
                href={hero.cta.link}
                className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-brand-600 hover:text-brand-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-brand-700"
              >
                {hero.cta.text}
              </a>
            </span>
          </div>
        </nav>
      </div>
      {isNavOpen && (
        <div className="absolute inset-x-0 top-0 p-2 md:hidden">
          <div
            className={`transition origin-top-right transform rounded-lg shadow-md ${
              isNavOpen
                ? 'duration-100 ease-in opacity-100 scale-100'
                : 'duration-150 ease-out opacity-0 scale-95'
            }`}
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-xs">
              <div className="flex items-center justify-between px-5 pt-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <Logo
                    bgClassName="fill-current text-gray-50"
                    className="w-auto fill-current text-brand-600 hover:text-brand-500"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setNavOpen(false)}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {allSiteNavigationJson.nodes.map(navItem => (
                  <Link
                    key={navItem.id}
                    to={navItem.link}
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md first:mt-0 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    {navItem.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
