import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/logo--color.svg';

const Header = ({ light = false }) => (
  <nav
    className={`${
      light ? 'bg-white shadow' : 'bg-base-light'
    } py-4 text-black z-10`}
  >
    <div className="container flex items-center justify-between">
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <ul className="hidden md:block ml-16">
        <MenuItem to="/">#GNM2019</MenuItem>
        <MenuItem to="/watch" partiallyActive>
          Watch
        </MenuItem>
        <MenuItem to="/sites">Streaming Sites</MenuItem>
        <MenuItem
          href="https://www.adventist.org/en/beliefs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Beliefs
        </MenuItem>
      </ul>
    </div>
  </nav>
);

const Logo = styled.img.attrs({
  className: 'relative',
})`
  height: 40px;
  top: -4px;
`;

const MenuItem = ({ children, ...rest }) => {
  const component = rest.to ? styled(Link) : styled.a;

  const NavLink = component.attrs({
    className:
      'no-underline font-bold text-black hover:text-primary-400 active:text-primary-400',
    activeClassName: 'text-primary-400',
  })`
    transition: var(--link-transition);
  `;

  return (
    <li className="mr-8 text-white inline-block">
      <NavLink {...rest}>{children}</NavLink>
    </li>
  );
};

export default Header;
