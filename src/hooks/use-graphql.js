// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphQL from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

const useGraphQL = () => {
  const data = useStaticQuery(
    graphql`
      {
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
            navigation {
              primary {
                text
                link
              }
              secondary {
                text
                link
              }
            }
            hero {
              copy
              line1
              line2
              primaryButton {
                link
                text
              }
              secondaryButton {
                link
                text
              }
            }
            about {
              heading1
              heading2
              copy
              feature1 {
                heading
                copy
              }
              feature2 {
                heading
                copy
              }
              feature3 {
                heading
                copy
              }
              feature4 {
                heading
                copy
              }
            }
            testimonial {
              quote
              name
              role
            }
            pricing {
              heading
              copy
              package1 {
                name
                price
                features
              }
              package2 {
                name
                price
                features
              }
              package3 {
                name
                price
                features
              }
            }
            banner {
              text
              link
            }
          }
        }
      }
    `
  );
  return data;
};

export default useGraphQL;
