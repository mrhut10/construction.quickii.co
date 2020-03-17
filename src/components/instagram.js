import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';

const Instagram = ({ token, numToDisplay }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`
      );
      const json = await res.json();
      setData(json.data.filter(item => item.media_type === 'IMAGE'));
      setLoaded(true);
    }

    fetchData();
  }, [token]);

  return (
    <article>
      <h2 className="mt-12 mb-8 text-2xl font-bold text-center">
        See our latest projects on{' '}
        <a
          href="https://www.instagram.com/seadoo14/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:text-brand-800"
        >
          Instagram
        </a>
      </h2>
      <div className="flex flex-wrap items-center justify-start p-4 mx-8 mb-8 max-w-7xl lg:mx-auto">
        {isLoaded ? (
          data.map((item, index) => {
            return (
              index < numToDisplay && (
                <a
                  href={item.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
                >
                  <div className="p-2">
                    <img
                      key={item.id}
                      src={item.media_url}
                      alt={item.caption}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col m-2 overflow-hidden">
                      <div className="flex-1 p-4 font-sans text-sm text-white break-words whitespace-pre-wrap transition duration-150 ease-in-out opacity-0 line-clamp hover:opacity-100 hover:bg-transparent-black-75">
                        <div>
                          {item.caption
                            ? item.caption
                            : 'Click to view on Instagram'}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </article>
  );
};

Instagram.propTypes = {
  token: PropTypes.string.isRequired,
  numToDisplay: PropTypes.number.isRequired,
};

export default Instagram;
