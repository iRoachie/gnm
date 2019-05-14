import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="404: Not found" />

    <div className="container text-center pt-8">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
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
  }
`;

export default NotFoundPage;
