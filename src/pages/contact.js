import React from 'react';

import { useGraphQL } from '../hooks';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '../components/hero';
import ContactForm from '../components/form/contact-form';
import Instagram from '../components/instagram';

export default function ContactPage() {
  const { contactHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero heroImage={contactHeroImage.childImageSharp.fluid} />
      <ContactForm />
      <Instagram />
    </Layout>
  );
}
