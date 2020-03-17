// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import { useGraphQL } from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

export const useGraphQL = () => {
  const data = useStaticQuery(
    graphql`
      {
        allSiteNavigationJson {
          nodes {
            id
            link
            text
          }
        }
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
            facebook
            instagram
            phone
            hours
            address {
              line1
              line2
            }
            hero {
              copy
              line1
              line2
              cta {
                link
                text
              }
            }
            contact {
              heading
              copy
            }
          }
        }
        aboutJson {
          alt
          copy
          heading
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        servicesJson {
          alt
          copy
          heading
          id
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          services {
            service
            copy
          }
        }
      }
    `
  );
  return data;
};
