/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import SignUp from './sign-up';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
            <main className="flex flex-col flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
      <SignUp />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
