/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans antialiased bg-gray-100">
        <main className="relative flex flex-col flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
