import React from 'react';

import { useGraphQL } from '../hooks';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '../components/hero';
import { ContactForm } from '../components/contact-form';
import Instagram from '../components/instagram';
import AboutFirstSection from '../components/about-first-section';

export default function AboutPage() {
  const { aboutHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <Hero heroImage={aboutHeroImage.childImageSharp.fluid} />
      <AboutFirstSection />
      <ContactForm />
      <Instagram />
    </Layout>
  );
}
