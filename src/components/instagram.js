import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-svg-spinner';

const Instagram = ({ token, numToDisplay }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${token}`
      );
      const resData = await resp.json();
      setData(resData.data.filter(item => item.media_type === 'IMAGE'));
      setLoaded(true);
    }

    fetchData();
  }, []);

  return (
    <>
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
      <div className="flex flex-wrap items-center justify-center max-w-5xl p-4 mx-8 mb-8 border lg:mx-auto">
        {isLoaded ? (
          data.map((item, index) => {
            return (
              index < numToDisplay && (
                <div className="w-1/2 p-2 sm:w-1/4">
                  <div className="igContainer">
                    <a
                      href={item.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        key={item.id}
                        src={item.media_url}
                        alt={item.id}
                        className=""
                      />
                      <div className="igOverlay">
                        <div className="igCaption">
                          {item.caption
                            ? item.caption
                            : 'Click to view on Instagram'}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

Instagram.propTypes = {
  token: PropTypes.string.isRequired,
  numToDisplay: PropTypes.number.isRequired,
};

export default Instagram;
