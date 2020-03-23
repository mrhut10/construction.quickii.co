import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import ContactForm from '../components/form/contact-form';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <ContactForm />
  </Layout>
);

export default IndexPage;
