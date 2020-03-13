import React, { useState, useContext } from 'react';

import Logo from './icons/logo';
import useGraphQL from '../hooks/use-graphql';
import SiteContext from '../context/site-context';

export default function Hero() {
  const [isNavOpen, setNavOpen] = useState(false);
  const { setSignUpOpen } = useContext(SiteContext);
  const {
    site: {
      siteMetadata: { navigation, hero },
    },
  } = useGraphQL();
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <Logo
                      className="w-auto h-8 fill-current text-brand-600 sm:h-10"
                      aria-label=""
                    />
                  </a>
                  <div className="flex items-center -mr-2 md:hidden">
                    <button
                      onClick={() => setNavOpen(true)}
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
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                {navigation.secondary.map(navItem => (
                  <a
                    key={navItem.text}
                    href={navItem.link}
                    className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out first:ml-0 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    {navItem.text}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div
            className={`${
              isNavOpen
                ? 'scale-100 opacity-100 pointer-events-auto duration-150 ease-out'
                : 'scale-95 opacity-0 pointer-events-none duration-100 ease-in'
            } absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden`}
          >
            <div className="rounded-lg shadow-md">
              <div className="overflow-hidden bg-white rounded-lg shadow-xs">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Logo
                      className="w-auto h-8 fill-current text-brand-600 sm:h-10"
                      aria-label=""
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
                  {navigation.secondary.map(navItem => (
                    <a
                      key={navItem.text}
                      href={navItem.link}
                      className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 first:mt-0"
                    >
                      {navItem.text}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href={navigation.primary.link}
                    className="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out text-brand-600 bg-gray-50 hover:bg-gray-100 hover:text-brand-700 focus:outline-none focus:bg-gray-100 focus:text-brand-700"
                  >
                    {navigation.primary.text}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {hero.line1}
                <br className="xl:hidden" />
                <span className="text-brand-600">{hero.line2}</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {hero.copy}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow hover:shadow-md">
                  <button
                    onClick={() => setSignUpOpen(true)}
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                  >
                    {hero.primaryButton.text}
                  </button>
                </div>
                <div className="mt-3 rounded-md shadow hover:shadow-md sm:mt-0 sm:ml-3">
                  <a
                    href={hero.secondaryButton.link}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-brand-700 bg-brand-100 hover:text-brand-600 hover:bg-brand-50 focus:outline-none focus:shadow-outline focus:border-brand-300 md:py-4 md:text-lg md:px-10"
                  >
                    {hero.secondaryButton.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover object-top w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1529573603507-70ad30917905?&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
