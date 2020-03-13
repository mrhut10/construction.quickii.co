import PropTypes from 'prop-types';
import React from 'react';

export function ChartIcon({ className }) {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

ChartIcon.propTypes = {
  className: PropTypes.string,
};
