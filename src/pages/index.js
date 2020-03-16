import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import ContactForm from '../components/form/contact-form';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <ContactForm />
  </Layout>
);

export default IndexPage;
