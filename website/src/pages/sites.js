import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SiteCollapsible from '../components/SiteCollapsible';
import { reduceSites } from '../util';

export default ({ data }) => {
  const [open, setOpen] = useState('');
  const sites = data.allContentfulStreamingSite.edges.map(a => a.node);

  const barbados = reduceSites(
    sites.filter(a => a.country.name === 'Barbados')
  );
  const dominica = reduceSites(
    sites.filter(a => a.country.name === 'Dominica')
  );

  const toggleOpen = key => {
    if (open === key) {
      setOpen('');
    } else {
      setOpen(key);
    }
  };

  return (
    <Layout classes="sm:pt-24">
      <SEO
        title="Streaming Sites"
        keywords={['streaming', 'church', 'site', 'barbados', 'dominica']}
      />

      <section className="container py-12 md:flex flex-1 items-center">
        <h1 className="font-bold text-primary-400 text-4xl leading-tight mb-4 md:max-w-1/3 lg:max-w-1/4">
          Find a Streaming Site Near you
        </h1>

        <div className="flex-1 md:px-16 lg:px-32">
          <p className="mx-auto text-lg">
            If you’re in Barbados and reside in St. Philip, St. John, St. George
            or Christ Church, feel free to join us at{' '}
            <strong>The Oldbury Campsite, Oldbury, St. Philip.</strong>
          </p>
        </div>
      </section>

      <section className="bg-primary py-8 sm:py-16 text-white">
        <div className="container sm:flex">
          <div className="sm:w-1/3">
            <h2 className="text-4xl font-bold mb-8">Barbados</h2>

            {barbados.map(a => (
              <SiteCollapsible
                key={`barbados-${a.parish}`}
                title={a.parish}
                sites={a.sites}
                open={open === `barbados-${a.parish}`}
                onOpen={() => toggleOpen(`barbados-${a.parish}`)}
              />
            ))}
          </div>

          <div className="mt-12 sm:w-1/3 sm:mt-0">
            <h2 className="text-4xl font-bold mb-8">Dominica</h2>

            {dominica.map(a => (
              <SiteCollapsible
                key={`dominica-${a.parish}`}
                title={a.parish}
                sites={a.sites}
                open={open === `dominica-${a.parish}`}
                onOpen={() => toggleOpen(`dominica-${a.parish}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allContentfulStreamingSite {
      edges {
        node {
          name
          parish
          country {
            name
          }
          location
        }
      }
    }
  }
`;
