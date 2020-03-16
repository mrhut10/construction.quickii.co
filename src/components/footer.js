import React from 'react';

import { useGraphQL } from '../hooks/use-graphql';
import {
  Facebook,
  Instagram,
  // Twitter,
  // GitHub,
  // Dribbble
} from './vectors';

const social = [
  {
    network: Facebook,
    link: '#',
  },
  {
    network: Instagram,
    link: '#',
  },
  // {
  //   network: Twitter,
  //   link: '#',
  // },
  // {
  //   network: GitHub,
  //   link: '#',
  // },
  // {
  //   network: Dribbble,
  //   link: '#',
  // },
];

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          {social.map((socialNetwork, index) => (
            <a
              key={index}
              href={socialNetwork.link}
              className="ml-6 text-gray-400 hover:text-gray-500 first:ml-0"
            >
              <span className="sr-only">{socialNetwork.network}</span>
              <socialNetwork.network className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base leading-6 text-center text-gray-400">
            &copy; 2020 {siteMetadata.title}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
