import React from 'react';

import { useGraphQL } from '../hooks/use-graphql';
import { Facebook, Instagram } from './vectors';

const social = [
  {
    icon: Facebook,
    network: 'Facebook',
    link: '#',
  },
  {
    icon: Instagram,
    network: 'Instagram',
    link: '#',
  },
];

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center max-w-screen-xl px-4 py-12 mx-auto md:justify-between sm:px-6 lg:px-8">
        <div className="hidden leading-none md:block">
          <h2 className="text-6xl font-extrabold uppercase text-brand-500">
            Quickii
          </h2>
          <h3 className="pl-12 text-4xl font-bold text-white">Construction.</h3>
        </div>
        <div className="md:order-2">
          <div className="flex flex-col">
            <div className="flex justify-end">
              {social.map((socialNetwork, index) => (
                <a
                  key={index}
                  href={socialNetwork.link}
                  className="ml-2 text-gray-400 hover:text-gray-500 first:ml-0"
                >
                  <span className="sr-only">{socialNetwork.network}</span>
                  <socialNetwork.icon className="w-6 h-6 bg-transparent rounded-full text-brand-600" />
                </a>
              ))}
            </div>
            <div className="mt-4 text-right">
              <p className="text-xl font-extrabold text-brand-500">
                Phone:{' '}
                <span className="text-lg font-thin text-white">
                  1-800-QUICKII-CO
                </span>
              </p>

              <p className="text-xl font-extrabold text-brand-500">
                Address:{' '}
                <span className="text-lg font-thin text-white">
                  23 Quickii St,
                  <br /> Port Macquarie NSW 2444
                </span>
              </p>
              <p className="text-xl font-extrabold text-brand-500">
                Hours:{' '}
                <span className="text-lg font-thin text-white">
                  9AM - 5PM Monday-Friday
                </span>
              </p>
            </div>
          </div>
          <div />
        </div>
      </div>
      <p className="px-2 mb-4 text-base leading-6 text-center text-gray-400">
        &copy; 2020 {siteMetadata.title}. All rights reserved.
      </p>
    </div>
  );
}
