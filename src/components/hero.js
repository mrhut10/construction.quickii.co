import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { useGraphQL } from '../hooks';
import SiteContext from '../context/site-context';
import Logo from './logo';

export default function Hero() {
  const { isNavOpen, setNavOpen } = useContext(SiteContext);
  const {
    heroImage,
    site: {
      siteMetadata: { hero },
    },
  } = useGraphQL();
  const { allSiteNavigationJson } = useGraphQL();
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 w-full h-full">
        <Image
          fluid={heroImage.childImageSharp.fluid}
          className="w-full h-full"
        />
      </div>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-transparent-black-50">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
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
                <a
                  key={navItem.id}
                  href={navItem.link}
                  className="ml-10 font-medium text-gray-200 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:text-white first:ml-0"
                >
                  {navItem.text}
                </a>
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
                    <a
                      key={navItem.id}
                      href={navItem.link}
                      className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md first:mt-0 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >
                      {navItem.text}
                    </a>
                  ))}
                </div>
                <div>
                  {/* <a
                    key={navigation.primary.id}
                    href={navigation.primary.link}
                    className="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out text-brand-600 bg-gray-50 hover:bg-gray-100 hover:text-brand-700 focus:outline-none focus:bg-gray-100 focus:text-brand-700"
                  >
                    {navigation.primary.text}
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl">
              {hero.line1} <br className="xl:hidden" />
              <span className="text-brand-600">{hero.line2}</span>
            </h2>
            <div className="max-w-md mx-auto mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {hero.copy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
