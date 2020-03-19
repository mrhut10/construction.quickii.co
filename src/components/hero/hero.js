import PropTypes from 'prop-types';
import React from 'react';
import Image from 'gatsby-image';

import { useGraphQL } from '../../hooks';
import Navbar from '../navbar';

export function Hero({ heroImage }) {
  const {
    site: {
      siteMetadata: { hero },
    },
  } = useGraphQL();
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 w-full h-full">
        <Image fluid={heroImage} className="w-full h-full" />
      </div>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-transparent-black-50">
        <Navbar />

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

Hero.propTypes = {
  heroImage: PropTypes.object.isRequired,
};
