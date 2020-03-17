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
      <Instagram />
    </Layout>
  );
};

export default Contact;
