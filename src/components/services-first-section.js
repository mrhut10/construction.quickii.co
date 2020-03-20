import React from 'react';

import { useGraphQL } from '../hooks';
import { HomeIcon } from './vectors';

const Icon = [
  <HomeIcon className="w-6 h-6" />,
  <HomeIcon className="w-6 h-6" />,
  <HomeIcon className="w-6 h-6" />,
  <HomeIcon className="w-6 h-6" />,
];

export default function ServicesFirstSection() {
  const {
    servicesJson,
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide uppercase text-brand-600">
            Services
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {siteMetadata.title}
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {servicesJson.services.map((node, index) => (
              <li className="mt-10 md:mt-0 first:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-500">
                      {Icon[index]}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-medium leading-6 text-gray-900">
                      {node.service}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {node.copy}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
