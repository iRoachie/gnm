import React from 'react';

import '../index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout classes="sm:pt-24">
    <SEO
      title="The Campaign"
      keywords={['organizers', 'aim', 'mission', 'vision']}
    />

    <div class="container md:flex">
      <section className="py-12 md:pr-12 flex-1 leading-looser">
        <h1 className="font-bold text-primary text-4xl leading-none mb-12">
          The
          <br />
          Campaign
        </h1>

        <p className="mb-12">
          The <strong>#GNM2019</strong> Good News Gospel Explosion is an
          islands-wide evangelistic event. The intent is to spread the gospel of
          the Lord Jesus Christ throughout Barbados and Dominica. The scope of
          this campaign is wide, with every Seventh-day Adventist church in
          Barbados and Dominica playing an active role.
        </p>

        <p className="mb-12">
          <strong>#GNM2019</strong> will be based in Barbados at the Oldbury
          Campsite and Technical College in Oldbury, St. Philip. This site will
          service the parishes of St. Philip, Christ Church, St. John and St.
          George.
        </p>

        <p>
          All nightly services and Sabbath festivals will be lived streamed to
          Seventh-day Adventist churches in both Barbados and Dominica.
        </p>
      </section>

      <section className="bg-primary py-8 sm:py-16 mb-8 md:mb-0 text-white flex-1">
        <div class="px-4 sm:px-12 lg:px-24">
          <article className="mb-12">
            <p className="leading-snug text-2xl">Campaign Start</p>
            <p className="font-bold text-4xl">Sunday, May 19</p>
          </article>

          <article className="mb-12">
            <p className="leading-snug text-2xl">Runtime</p>
            <p className="font-bold text-4xl">5 weeks</p>
          </article>

          <article className="mb-12">
            <p className="leading-snug text-2xl">Nightly Service Start time</p>
            <p className="font-bold text-4xl">7pm</p>
          </article>

          <article>
            <p className="leading-snug text-2xl">Sabbath Festivals start</p>
            <p className="font-bold text-4xl">Sabbath June 1, 9am</p>
          </article>
        </div>
      </section>
    </div>
  </Layout>
);
