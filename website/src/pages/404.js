import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from '../components/styles';

const NotFoundPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="404: Not found" />

    <Container className="text-center pt-8">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
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

export default NotFoundPage;
