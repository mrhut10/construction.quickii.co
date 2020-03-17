import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';

import { useGraphQL } from '../hooks/use-graphql';

export default function Instagram({ token }) {
  const [data, setData] = useState([]);
  const {
    site: {
      siteMetadata: { instagram },
    },
  } = useGraphQL();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,permalink&access_token=${token}`
      );
      const json = await res.json();
      setData(json.data.filter(item => item.media_type === 'IMAGE'));
    }

    fetchData();
  }, [token]);

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

Instagram.propTypes = {
  token: PropTypes.string.isRequired,
};

function Image({ item, extraClasses }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const imgRef = React.useRef(null);

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <a
      ref={ref}
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative ${extraClasses && extraClasses}`}
    >
      <img
        onLoad={() => setImgLoaded(true)}
        ref={imgRef}
        data-src={item.media_url}
        alt={item.caption}
        loading="lazy"
        height="192"
        width="192"
        className="object-cover w-full h-full bg-gray-500"
      />
      {!imgLoaded && (
        <div className="absolute w-full h-full -mt-2 -ml-2 top-1/2 left-1/2">
          <Spinner />
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
