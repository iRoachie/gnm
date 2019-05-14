import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import '../index.css';
import '../main.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout data={data} classes="flex">
    <SEO
      title="Organizers"
      keywords={[`organizers`, `aim`, `mission`, `vision`]}
    />

    <div class="flex-1 flex flex-col justify-between pt-24">
      <section className="container py-12 flex-1">
        <div className="md:max-w-1/2 leading-looser">
          <h1 className="font-bold text-primary text-4xl leading-snug mb-4">
            About the organisers
          </h1>

          <p>
            The Good News Ministries #GNM2019 is an initiative of the{' '}
            <strong>East Caribbean Conference of Seventh-day Adventists</strong>{' '}
            which serves the islands of Barbados and Dominica.
          </p>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <Columns>
          <p className="leading-snug mb-8 text-2xl mb:mb-0">
            Our Aim, mission and vision is very simple
          </p>

          <article className="">
            <h3 className="text-2xl font-bold">Aim</h3>
            <p className="text-md leading-loose">
              To be transparent, prudent and honest in all spheres of God’s
              business.
            </p>
          </article>

          <article className="">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="text-md leading-loose">
              The mission of the East Caribbean Conference of Seventh-day
              Adventists, is to reach every person in its territory with the
              gospel of Jesus Christ and to participate in the Global Mission
              Program of the Seventh-day Adventist Church.
            </p>
          </article>

          <article className="">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="text-md leading-loose mb-8">
              Every Congregation, a loving, caring community evangelizing every
              person in its territory for eternity.
            </p>

            <a
              href="http://www.eastcarib.org/"
              className="bg-accent p-2 px-3 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about our Conference
            </a>
          </article>
        </Columns>
      </section>
    </div>
  </Layout>
);

const Columns = styled.div.attrs({
  className: 'container',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

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
