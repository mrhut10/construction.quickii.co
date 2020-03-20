import React from 'react';

import { useGraphQL } from '../hooks';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '../components/hero';
import { ContactForm } from '../components/contact-form';
import Instagram from '../components/instagram';

export default function IndexPage() {
  const { heroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="Home" />
      <Hero heroImage={heroImage.childImageSharp.fluid} />
      <About />
      <Services />
      <ContactForm />
      <Instagram />
    </Layout>
  );
}
