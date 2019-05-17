import React from 'react';

import { screens } from '../../tailwind.config';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO
      title="Ps Dr Morgan"
      keywords={['pastor', 'dr', 'claudius', 'morgan', 'about', 'bio']}
    />

    <section className="container flex items-end py-12 lg:pb-0 faded-bg bg-no-repeat">
      <div className="lg:max-w-1/2 leading-looser flex-1 pb-10">
        <h1 className="font-bold text-primary-400 text-4xl leading-snug mb-4">
          Pastor Dr Claudius Morgan
        </h1>

        <p className="mb-12">
          Pastor Claudius Morgan is a pastor/evangelist in the St.Vincent Region
          of the Caribbean Union of Seventh-day Adventists. He is one of the
          leading evangelist in the Inter American Division and the World
          Church.
        </p>

        <p>
          He is a member of the Evangelism Council of the General Conference. He
          has authored one book, Preaching the Good News and is presently
          preparing part 2 of Preaching the Good News. His newest book soon to
          be released is, Innovative Appeals - Moving Masses to the Watery
          Grave. He has also created a CD of over 180 evangelistic songs for
          Pastors and Laity.
        </p>
      </div>

      <img
        src={require('../images/morg-2.png')}
        className="hidden lg:block promo-bg md:max-w-1/2"
        alt="Pastor Claudius Morgan"
      />
    </section>

    <section className="text-white bg-primary relative">
      <div className="morgan-promo hidden absolute top-0 h-full w-full bg-no-repeat bg-cover bg-center sm:block sm:max-w-45" />

      <div className="container flex justify-end">
        <div className="sm:w-55 py-16 px-4 sm:px-12">
          <h2 className="font-bold text-4xl mb-4">Ministry</h2>

          <p className="leading-looser mb-12">
            Pastor Morgan has so far led 20,000+ people to Christ and
            established 15 churches in the Caribbean, and North America. He is
            the one of the few evangelists in the World Church who effectively
            combines singing and preaching in his ministry.
          </p>

          <p className="leading-looser">
            Presently he also serves as the Assistant to the President of the
            Caribbean Union with responsibility for Evangelism, Training and
            Development.
          </p>
        </div>
      </div>
    </section>

    <style jsx>{`
      .morgan-promo {
        background-image: url(${require('../images/morg-1.jpg')});
        right: 55%;
      }

      .faded-bg {
        background-image: url(${require('../images/morg-2-opacity.png')});
        background-position: top center;
        min-height: 400px;
      }

      @media (min-width: ${screens.lg}) {
        .faded-bg {
          background: none;
        }
      }
    `}</style>
  </Layout>
);
