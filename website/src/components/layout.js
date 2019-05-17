import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import '../index.css';

import { mobileMenuWidth } from '../constants';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { MenuProvider, MenuContext } from '../util/MenuContext';

const Layout = ({ children, classes, light }) => (
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
    render={({ site }) => (
      <MenuProvider>
        <MenuContext.Consumer>
          {({ menuOpen }) => (
            <>
              <Wrapper className="page-wrapper" menuOpen={menuOpen}>
                <Header siteTitle={site.siteMetadata.title} light={light} />

                <main className={`flex-1 ${classes}`}>{children}</main>

                <Footer />
              </Wrapper>

              <MobileMenu />
            </>
          )}
        </MenuContext.Consumer>
      </MenuProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div.attrs({
  className:
    'min-h-screen flex flex-col space-between relative shadow-lg z-10 bg-white',
})`
  transform: translateX(
    ${props => (props.menuOpen ? `-${mobileMenuWidth}` : '0')}
  );
  transition: transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1);
`;

export default Layout;
