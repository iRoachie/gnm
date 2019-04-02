import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, data: contentful }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />

        <main className="flex-1">{children}</main>

        <Footer
          socialMedia={contentful.allContentfulSocialMediaNetwork.edges.map(
            a => a.node
          )}
          address={JSON.parse(
            contentful.allContentfulHomePage.edges[0].node.address.address
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
