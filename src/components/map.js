import React from 'react';

const Map = () => {
  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8">
        <iframe
          title="googlemap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22899.451400780363!2d152.88909482263685!3d-31.44101125712551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff5c34ecc9c1%3A0x50609b490442e40!2sPort%20Macquarie%20NSW%202444!5e0!3m2!1sen!2sau!4v1584325334956!5m2!1sen!2sau"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          aria-hidden="false"
        />
      </div>
    </>
  );
};

export default Map;
