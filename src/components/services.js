import React from 'react';
import Image from 'gatsby-image';

import { useGraphQL } from '../hooks';

export default function Services() {
  const { servicesJson } = useGraphQL();
  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                {servicesJson.heading}
              </h4>
              {servicesJson.copy.map((copy, index) => (
                <p key={index} className="mt-3 text-lg leading-7 text-gray-500">
                  {copy}
                </p>
              ))}
              <ul className="mt-10">
                {servicesJson.services.map((service, index) => (
                  <li key={index} className="mt-10 first:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                          <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-medium leading-6 text-gray-900">
                          {service.service}
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          {service.copy}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <Image
                fluid={servicesJson.image.childImageSharp.fluid}
                alt={servicesJson.alt}
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
