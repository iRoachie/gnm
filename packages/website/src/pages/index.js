import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';
import '../main.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero } from '../components';

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero data={data.allContentfulHomePage.edges[0].node.heroBanner} />
  </Layout>
);

export const pageQuery = graphql`
  {
    allContentfulSocialMediaNetwork {
      edges {
        node {
          name
        }
      }
    }

    allContentfulHomePage {
      edges {
        node {
          address {
            address
          }
          heroBanner {
            title
            label
            thumbnail {
              fluid(maxWidth: 2400, maxHeight: 992) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
