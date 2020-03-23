import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SiteContext = createContext({
  isSignUpOpen: false,
  setSignUpOpen: () => {},
  isNavOpen: false,
  setNavOpen: () => {},
});

const SiteProvider = ({ children }) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        isSignUpOpen,
        setSignUpOpen,
        isNavOpen,
        setNavOpen,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

SiteProvider.propTypes = {
  children: PropTypes.node,
};

export default SiteContext;
export { SiteProvider };
