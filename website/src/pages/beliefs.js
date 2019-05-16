import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO
      title="Our Beliefs"
      keywords={['sda', 'believe', 'claudius', 'morgan', 'about', 'bio']}
    />

    <div className="container my-8">
      <h1 className="font-bold text-primary-400 text-4xl">Our Beliefs</h1>
    </div>

    <div className="flex">
      <aside className="bg-primary w-1/3 p-4" />
      <main className="w-2/3" />
    </div>
  </Layout>
);
