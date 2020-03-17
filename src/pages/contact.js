import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ContactForm from '../components/form/contact-form';
import Instagram from '../components/instagram';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero />
      <ContactForm />
      <Instagram
        token="IGQVJYR01Nal8yLTlQb1phdGV5S0VNR3p6VUc5cVRnV0k1S3puSVFyeC1DRkRISTFDSTVLNGllclM0ZAVBGbFNpQ3lGMXB3Vm5XbVQ0ZA2tUNUNLUGMxS3lJY2kyQllWeWtoSnN6NjJVcm12V1JNcHBkZAQZDZD"
        numToDisplay="4"
      />
    </Layout>
  );
};

export default Contact;
