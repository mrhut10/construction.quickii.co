import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGraphQL } from '../hooks';

export default function Map() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const {
    site: { siteMetadata },
  } = useGraphQL();

  const iframeRef = useRef(null);

  useEffect(() => {
    if (inView) {
      iframeRef.current.src = iframeRef.current.dataset.src;
      setTimeout(() => {
        iframeRef.current.removeAttribute('data-src');
      }, 1000);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="mt-6 overflow-hidden bg-white shadow sm:rounded-lg"
      height={450}
    >
      <iframe
        ref={iframeRef}
        data-src={siteMetadata.mapEmbed}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        title="Location"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="w-full bg-gray-100"
      />
    </div>
  );
}
