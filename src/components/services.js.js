import React from 'react';
import Image from 'gatsby-image';

import { useGraphQL } from '../hooks/use-graphql';

export default function About() {
  const { aboutJson } = useGraphQL();
  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
        </svg>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              {aboutJson.heading}
            </h4>
            {aboutJson.copy.map((copy, index) => (
              <p key={index} className="mt-3 text-lg leading-7 text-gray-500">
                {copy}
              </p>
            ))}
          </div>

          <div className="relative mt-10 -mx-4 lg:mt-0">
            <svg
              className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="svg-pattern-squares-2"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#svg-pattern-squares-2)"
              />
            </svg>
            <Image
              fluid={aboutJson.image.childImageSharp.fluid}
              alt={aboutJson.alt}
            />
          </div>
        </div>

        <svg
          className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-3"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#svg-pattern-squares-3)" />
        </svg>
      </div>
    </div>
  );
}
