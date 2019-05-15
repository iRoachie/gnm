import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout data={data} classes="flex">
    <SEO
      title="Our Beliefs"
      keywords={['sda', 'believe', 'claudius', 'morgan', 'about', 'bio']}
    />

    <div className="flex-1">
      <header className="container my-8">
        <h1 className="font-bold text-primary-400 text-4xl">Our Beliefs</h1>
      </header>

      <div className="flex">
        <sidebar class="bg-primary w-1/3 p-4" />
        <main class="w-2/3" />
      </div>
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
