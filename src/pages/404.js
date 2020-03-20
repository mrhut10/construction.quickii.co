import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InternalLinkButton from '../components/internal-link-button';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <img
        src="https://images.unsplash.com/gifs/weird/weird-6.gif"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full text-center bg-transparent-black-50">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl">
          404
        </h1>
        <div className="max-w-md mx-auto mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          <p className="text-white">
            Hm, the page you were looking for doesn't seem to exist.
          </p>
          <p className="mt-5 md:mt-8">
            <InternalLinkButton link="/" text="Back to homepage" />
          </p>
        </div>
      </div>
    </Layout>
  );
}
