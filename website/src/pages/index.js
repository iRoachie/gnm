import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo--color.svg';

import '../index.css';
import '../main.css';

import { Wrapper } from '../components';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Wrapper>
    <SEO title="Coming Soon" />

    <div className="flex flex-1 bg-white items-center justify-center flex-col px-8">
      <Logo src={logo} className="logo mw-100" />

      <p className="mt-4 text-xl text-center">ECC Good News Campaign 2019</p>

      <div className="flex items-center mt-24 ">
        <a
          href="mailto:hello.gnm@gmail.com?subject=GNM 2019 Support"
          className="no-underline inline-block bg-primary text-white rounded p-4 font-bold sm:mx-4"
        >
          Contact Us
        </a>

        <Link
          to="/privacy"
          className="inline-block sm:mx-4 text-primary no-underline p-4"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </Wrapper>
);

const Logo = styled.img`
  width: 400px;
`;

export default IndexPage;
