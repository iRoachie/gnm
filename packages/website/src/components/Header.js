import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from './styles';
import logo from '../images/logo--color.svg';

const Header = () => (
  <Content>
    <Container className="flex items-center">
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <Menu>
        <MenuItem to="/">#GNM2019</MenuItem>
        <MenuItem to="/lessons">Bible Lessons</MenuItem>
        <MenuItem to="/beliefs">Our Beliefs</MenuItem>
      </Menu>
    </Container>
  </Content>
);

const Content = styled.header.attrs({
  className: 'bg-base-light py-4',
})`
  color: #000;
`;

const Logo = styled.img.attrs({
  className: 'relative',
})`
  height: 40px;
  top: -4px;
`;

const Menu = styled.ul.attrs({
  className: 'list-reset ml-16',
})``;

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
