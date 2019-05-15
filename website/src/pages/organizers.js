import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout data={data} classes="flex">
    <SEO
      title="Organizers"
      keywords={['organizers', 'aim', 'mission', 'vision']}
    />

    <div class="flex-1 flex flex-col justify-between sm:pt-24">
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
        <div className="container xl:flex px-0 lg:px-4">
          <div class="flex flex-col sm:flex-row flex-1">
            <p className="leading-snug mb-8 text-2xl mb:mb-0 sm:w-1/2 px-4 xl:pr-2 xl:pl-0">
              Our Aim, mission and vision is very simple
            </p>

            <article className="mb-12 sm:w-1/2 px-4">
              <h3 className="text-2xl font-bold">Aim</h3>
              <p className="text-md leading-loose">
                To be transparent, prudent and honest in all spheres of God’s
                business.
              </p>
            </article>
          </div>

          <div class="flex flex-col sm:flex-row flex-1">
            <article className="mb-12 sm:w-1/2 px-4 sm:pr-8 xl:pl-0 xl:pr-8">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-md leading-loose">
                The mission of the East Caribbean Conference of Seventh-day
                Adventists, is to reach every person in its territory with the
                gospel of Jesus Christ and to participate in the Global Mission
                Program of the Seventh-day Adventist Church.
              </p>
            </article>

            <article className="sm:w-1/2 px-4 xl:px-0">
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="text-md leading-loose mb-8">
                Every Congregation, a loving, caring community evangelizing
                every person in its territory for eternity.
              </p>

              <a
                href="http://www.eastcarib.org/"
                className="bg-accent p-2 font-bold inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about our Conference
              </a>
            </article>
          </div>
        </div>
      </section>
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
