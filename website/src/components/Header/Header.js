import React, { useContext, useState, useEffect } from 'react';
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
      } text-black z-20`}
    >
      <div className="container bar flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="GNM2019 Logo" className="relative logo" />
        </Link>

        <button onClick={toggleMenu} aria-label="Menu Toggle">
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

        <ul className="hidden md:flex ml-16 h-full items-stretch">
          <DropDown />
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

        .bar {
          height: 72px;
        }

        .logo {
          top: -4px;
          height: 40px;
        }
      `}</style>
    </nav>
  );
};

const DropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setMenuOpen(false);
    });

    return () => {
      document.body.removeEventListener('click', () => {}, false);
    };
  }, [menuOpen]);

  const onOpen = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    }
  };

  return (
    <li className={`inline-block relative ${menuOpen ? 'bg-primary' : ''}`}>
      <button
        className={`font-bold p-4 h-full ${
          menuOpen ? 'text-white' : 'text-black hover:text-primary'
        }`}
        onClick={onOpen}
      >
        #GNM2019
      </button>

      <ul
        className={`absolute px-2 shadow bg-primary ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="py-2">
          <Link
            className="text-white inline-block hover:text-accent"
            to="/campaign"
            activeClassName="font-bold"
          >
            The Campaign
          </Link>
        </li>

        <li className="py-2">
          <Link
            className="text-white inline-block hover:text-accent"
            to="/morgan"
            activeClassName="font-bold"
          >
            Ps Dr Morgan
          </Link>
        </li>

        <li className="py-2">
          <Link
            className="text-white inline-block hover:text-accent"
            to="/organisers"
            activeClassName="font-bold"
          >
            The Organisers
          </Link>
        </li>
      </ul>

      <style jsx>{`
        ul {
          width: 150px;
        }
      `}</style>
    </li>
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
    <li className="px-4 text-white flex items-center">
      <NavLink {...rest}>{children}</NavLink>
    </li>
  );
};

export default Header;
