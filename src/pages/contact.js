import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/form/contact-form';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
