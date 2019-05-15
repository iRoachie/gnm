import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, data: contentful, classes, light }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} light={light} />

        <main className={`flex-1 ${classes}`}>{children}</main>

        <Footer
          socialMedia={contentful.allContentfulSocialMediaNetwork.edges.map(
            a => a.node
          )}
        />
      </Wrapper>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div.attrs({
  className: 'min-h-screen flex flex-col space-between',
})``;

export default Layout;
