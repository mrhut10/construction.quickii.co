import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import resolveConfig from 'tailwindcss/resolveConfig';

import { useGraphQL } from '../hooks/use-graphql';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

export default function Instagram() {
  const [data, setData] = useState([]);
  const {
    site: {
      siteMetadata: { instagram, instagramAccessToken },
    },
  } = useGraphQL();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,permalink&access_token=${instagramAccessToken}`
      );
      const json = await res.json();
      setData(json.data.filter(item => item.media_type === 'IMAGE'));
    }

    fetchData();
  }, [instagramAccessToken]);

  return (
    <article>
      <h2 className="mt-12 mb-8 text-2xl font-bold text-center">
        See our latest projects on{' '}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:text-brand-800"
        >
          Instagram
        </a>
      </h2>
      <div className="grid items-center justify-start grid-cols-2 gap-4 p-4 mx-8 mb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-7xl lg:mx-auto">
        {data.map((item, index) => {
          return (
            <Image
              item={item}
              extraClasses={`${
                index > 5 && index < 8 ? 'hidden md:block' : ''
              }${index > 7 ? 'hidden lg:block' : ''}`}
            />
          );
        })}
      </div>
    </article>
  );
}

function Image({ item, extraClasses }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const imgRef = React.useRef(null);

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
      setTimeout(() => {
        imgRef.current.removeAttribute('data-src');
      }, 1000);
    }
  }, [inView]);

  return (
    <a
      ref={ref}
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative h-0 pb-full bg-gray-100 ${extraClasses &&
        extraClasses}`}
    >
      <img
        onLoad={() => setImgLoaded(true)}
        ref={imgRef}
        data-src={item.media_url}
        alt={imgLoaded && item.caption}
        className="absolute inset-0 object-cover w-full h-full"
      />
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Spinner
            size={fullConfig.theme.spacing[8]}
            color={fullConfig.theme.colors.brand[600]}
            thickness={3}
          />
        </div>
      )}

      <div className="absolute inset-0 flex overflow-hidden font-sans text-sm text-white break-words whitespace-pre-wrap transition duration-200 ease-in-out opacity-0 hover:opacity-100 hover:bg-transparent-black-75">
        <div className="m-4 line-clamp">
          {item.caption && imgLoaded
            ? item.caption
            : 'Click to view on Instagram'}
        </div>
      </div>
    </a>
  );
}

Image.propTypes = {
  item: PropTypes.any,
  extraClasses: PropTypes.string,
};
