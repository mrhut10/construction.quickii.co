import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { LogoLandscape, Facebook, Instagram } from './vectors';

const social = [
  {
    icon: Facebook,
    network: 'Facebook',
    link: '#',
    name: 'Facebook',
  },
  {
    icon: Instagram,
    network: 'Instagram',
    link: '#',
    name: 'Instagram',
  },
];

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="bg-black">
      <div className="flex flex-col max-w-screen-xl px-4 py-12 mx-auto text-center md:flex-row md:items-start md:justify-between md:flex-wrap sm:px-6 lg:px-8">
        <div className="flex flex-col mx-auto md:w-1/2 md:mx-0 md:text-left">
          <Link to="/">
            <LogoLandscape
              firstWord="fill-current text-brand-600"
              className="w-56 text-white fill-current"
            />
          </Link>
          <div className="flex mx-auto mt-3 md:mx-0">
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
        </div>
        <div className="mx-auto mt-6 md:order-2 md:w-1/2 md:mt-0 md:mx-0">
          <div className="flex flex-col">
            <div className="leading-5 md:text-right">
              <dl className="mt-3 text-xl font-extrabold text-brand-500 first:mt-0">
                <dt className="inline">Phone: </dt>
                <dd className="inline text-lg font-thin text-white">
                  {siteMetadata.phone}
                </dd>
              </dl>

              <dl className="mt-3 text-xl font-extrabold text-brand-500 first:mt-0">
                <dt className="inline">Address: </dt>
                <dd className="inline text-lg font-thin text-white">
                  {siteMetadata.address.line1}
                  <br /> {siteMetadata.address.line2}
                </dd>
              </dl>

              <dl className="mt-3 text-xl font-extrabold text-brand-500 first:mt-0">
                <dt className="inline">Hours: </dt>
                <dd className="inline text-lg font-thin text-white">
                  {siteMetadata.hours}
                </dd>
              </dl>
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
