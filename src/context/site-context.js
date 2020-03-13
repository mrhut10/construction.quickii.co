import React from 'react';
import PropTypes from 'prop-types';

const SiteContext = React.createContext({
  isSignUpOpen: false,
  setSignUpOpen: () => {},
});

const SiteProvider = ({ children }) => {
  const [isSignUpOpen, setSignUpOpen] = React.useState(false);

  return (
    <SiteContext.Provider
      value={{
        isSignUpOpen,
        setSignUpOpen,
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
