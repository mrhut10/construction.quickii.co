import React from 'react';
import useGraphQL from '../hooks/use-graphql';

export default function About() {
  const {
    site: {
      siteMetadata: { about },
    },
  } = useGraphQL();
  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide uppercase text-brand-600">
            {about.heading1}
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {about.heading2}
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            {about.copy}
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    {about.feature1.heading}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {about.feature1.copy}
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    {about.feature2.heading}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {about.feature2.copy}
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    {about.feature3.heading}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {about.feature3.copy}
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    {about.feature4.heading}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {about.feature4.copy}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
