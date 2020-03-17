import React from 'react';
import { useGraphQL } from '../hooks/use-graphql';

export default function Map() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="mt-6 overflow-hidden bg-white shadow sm:rounded-lg">
      <iframe
        src={siteMetadata.mapEmbed}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        title="Location"
        tabIndex={0}
        className="w-full"
      />
    </div>
  );
}
