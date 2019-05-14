import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/logo--color.svg';

const Header = () => (
  <header className="bg-base-light py-4 text-black">
    <div className="container flex items-center">
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <ul className="ml-16">
        <MenuItem to="/">#GNM2019</MenuItem>
        <MenuItem to="/watch">Watch</MenuItem>
        <MenuItem to="/stream-sights">Streaming Sites</MenuItem>
        <MenuItem to="/beliefs">Our Beliefs</MenuItem>
      </ul>
    </div>
  </header>
);

const Logo = styled.img.attrs({
  className: 'relative',
})`
  height: 40px;
  top: -4px;
`;

const MenuItem = ({ children, ...rest }) => {
  const NavLink = styled(Link).attrs({
    className: 'no-underline font-bold text-black',
    activeClassName: 'active ',
  })`
    transition: var(--link-transition);

    &.active,
    &:hover {
      color: var(--primary);
    }
  `;

  return (
    <li className="mr-8 text-white inline-block">
      <NavLink {...rest}>{children}</NavLink>
    </li>
  );
};

export default Header;
