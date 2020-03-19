import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '../components/hero';
import { useGraphQL } from '../hooks';

export default function ServicesPage() {
  const { servicesHeroImage } = useGraphQL();
  return (
    <Layout>
      <SEO title="Services" />
      <Hero heroImage={servicesHeroImage.childImageSharp.fluid} />
    </Layout>
  );
}
