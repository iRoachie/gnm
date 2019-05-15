import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
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
