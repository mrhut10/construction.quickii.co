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
        allSiteNavigationJson {
          nodes {
            id
            link
            text
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
            hero {
              copy
              line1
              line2
              cta {
                link
                text
              }
            }
          }
        }
      }
    `
  );
  return data;
};
