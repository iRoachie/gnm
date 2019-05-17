import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { beliefsURL } from '../constants';

export default () => (
  <Layout light>
    <SEO
      title="Home"
      keywords={[
        '#GNM2019',
        'claudius',
        'morgan',
        'Good News',
        'Gospel Explosion',
        'barbados',
        'dominica',
        'Seventh-day Adventists',
      ]}
    />

    <section className="main-banner bg-no-repeat bg-cover bg-top flex items-end py-16 text-white">
      <div className="container">
        <div className="sm:w-5/12">
          <p className="text-2xl">#GNM2019</p>
          <h1 className="text-5xl font-bold leading-tight">
            “My name is Claudius Morgan”
          </h1>

          <Link to="/watch/1" className="flex items-center mt-4">
            <img
              className="mr-4 youtube-logo"
              src={require('../images/icon-youtube.png')}
              alt="Youtube"
            />

            <span className="text-white font-bold">Play Video</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-primary py-16 text-white">
      <div className="container md:flex">
        <div className="flex-1">
          <img
            src={require('../images/logo-full.png')}
            alt="#GNM2019 - GoodNews Gospel Explosion"
            className="md:mt-12 mb-12 pr-8 full-logo"
          />
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-4xl mb-4">About #GNM2019</h1>

          <p className="leading-looser mb-8 text-gray-300">
            The{' '}
            <strong className="text-white">
              #GNM2019 Good News Gospel Explosion
            </strong>{' '}
            is an islands-wide evangelistic event. The intent is to spread the
            gospel of the Lord Jesus Christ throughout Barbados and Dominica.
            The scope of this campaign is wide, with every Seventh-day Adventist
            church in Barbados and Dominica playing an active role.
          </p>

          <Link
            to="/campaign"
            className="bg-accent font-bold text-white px-4 py-2"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 lg:pb-0">
      <div className="container flex">
        <div className="flex-1">
          <h2 className="text-primary-400 font-bold text-4xl mb-4">
            Meet Evangelist Claudius Morgan
          </h2>

          <p className="leading-looser md:w-2/3 lg:w-full">
            For 5 weeks Evangelist Dr Claudius Morgan will share the good News
            about Jesus Christ from the bible, carefully showing us how the
            life, ministry and sacrifice of Jesus affects us even to this day.
            Evangelist Morgan is currently Evangelism and Communications
            Director of the Caribbean Union of Seventh-day Adventists.
          </p>

          <div className="sm:flex items-center mt-12">
            <a href="" className="flex items-center">
              <img
                className="mr-4 youtube-logo"
                src={require('../images/icon-youtube.png')}
                alt="Youtube"
              />

              <span className="text-primary-400 font-bold">
                Watch his testimony
              </span>
            </a>

            <Link
              to="/morgan"
              className="inline-block mt-12 sm:mt-0 sm:ml-12 px-4 py-2 font-bold text-white bg-accent"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex-1 hidden lg:block">
          <img src={require('../images/morg-2.png')} alt="" />
        </div>
      </div>
    </section>

    <section className="bg-base-light py-20">
      <div className="container flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className="pr-4 lg:pr-12">
            <p className="font-bold text-xl mb-4">
              We want to worship with you!
            </p>
            <p className="mb-12 text-xl">
              Share this experience of fellowship and spiritual growth with
              friends in your area.
            </p>

            <Link
              to="/sites"
              className="bg-accent px-4 py-2 font-bold text-white"
            >
              View the streaming sites
            </Link>
          </div>
        </div>

        <div className="flex-1 mb-12">
          <h3 className="text-4xl font-bold text-primary-400 leading-tight lg:w-10/12">
            Join us at a Seventh-day Adventist church near you
          </h3>
        </div>
      </div>
    </section>

    <section className="relative flex flex-col believe py-20 bg-no-repeat bg-cover bg-center text-white justify-end">
      <div className="absolute top-0 left-0 w-full h-full gradient" />

      <div className="container z-20">
        <h3 className="font-bold text-4xl">What we Believe</h3>

        <div className="sm:flex items-end">
          <p className="leading-loose mb-8 sm:mb-0 sm:mr-12 believe-sub">
            Learn about the doctrines and lifestyle of Seventh-day Adventists
          </p>

          <a
            href={beliefsURL}
            className="bg-accent font-bold px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <style jsx>{`
      .full-logo {
        max-width: 500px;
        width: 100%;
      }

      .believe {
        background-image: url(${require('../images/believe-banner.jpg')});
        min-height: 600px;
      }

      .believe-sub {
        max-width: 290px;
      }

      .gradient {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #1a1b23);
      }

      .youtube-logo {
        height: 40px;
      }

      .main-banner {
        background-image: url(${require('../images/morg-large.jpg')});
        min-height: 500px;
      }
    `}</style>
  </Layout>
);
