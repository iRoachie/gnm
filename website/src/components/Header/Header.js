import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { MenuContext } from '../../util/MenuContext';
import { beliefsURL } from '../../constants';

import logo from '../../images/logo--color.svg';

const Header = ({ light = false }) => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <nav
      className={`${
        light ? 'bg-white shadow' : 'bg-base-light'
      } py-4 text-black z-10`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="GNM2019 Logo" className="relative logo" />
        </Link>

        <button onClick={toggleMenu}>
          <svg
            className="menu-icon md:hidden"
            width="385"
            height="193"
            viewBox="0 0 385 193"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#000" fillRule="nonzero">
              <path d="M12.03 24.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.389.243 0 5.633 0 12.273s5.39 12.03 12.03 12.03zM372.939 84.455H12.03C5.389 84.455 0 89.845 0 96.485s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 168.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z" />
            </g>
          </svg>
        </button>

        <ul className="hidden md:block ml-16">
          <MenuItem to="/">#GNM2019</MenuItem>
          <MenuItem to="/watch" partiallyActive>
            Watch
          </MenuItem>
          <MenuItem to="/sites">Streaming Sites</MenuItem>
          <MenuItem href={beliefsURL} target="_blank" rel="noopener noreferrer">
            Our Beliefs
          </MenuItem>
        </ul>
      </div>

      <style jsx>{`
        .menu-icon {
          width: 40px;
          height: 40px;
        }

        .logo {
          top: -4px;
          height: 40px;
        }
      `}</style>
    </nav>
  );
};

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
