import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

export default function InternalLinkButton({ link, text }) {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <Link
        to={link}
        className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand active:bg-brand-700"
      >
        {text}
      </Link>
    </span>
  );
}

InternalLinkButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};
