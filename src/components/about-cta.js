import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import InternalLinkButton from './internal-link-button';

export default function About() {
  const { aboutJson } = useGraphQL();
  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight sm:text-3xl sm:leading-9">
              <Link
                to="/about"
                className="transition duration-150 ease-in text-brand-600 hover:text-brand-500"
              >
                {aboutJson.heading}
              </Link>
            </h4>
            {aboutJson.copy.map((copy, index) => (
              <p key={index} className="mt-3 text-lg leading-7 text-gray-500">
                {copy}
              </p>
            ))}
            <p className="mt-8">
              <InternalLinkButton link="/about" text="Learn more &rarr;" />
            </p>
          </div>

          <div className="relative mt-10 -mx-4 lg:mt-0">
            <Image
              fluid={aboutJson.image.childImageSharp.fluid}
              alt={aboutJson.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
