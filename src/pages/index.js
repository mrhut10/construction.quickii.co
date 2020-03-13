import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Testimonial from '../components/testimonial';
import Pricing from '../components/pricing';
import FAQ from '../components/faq';
import ContactForm from '../components/form/contact-form';
import Banner from '../components/banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Testimonial />
    <Pricing />
    <FAQ />
    <ContactForm />
    <Banner />
  </Layout>
);

export default IndexPage;
