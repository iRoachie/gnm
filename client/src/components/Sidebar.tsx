import React from 'react';
import { Link } from '@reach/router';
import { Icon } from '@material-ui/core';
import clsx from 'clsx';

const NavLink: React.FunctionComponent<{
  className?: string;
  to: string;
}> = props => (
  <Link
    {...props}
    getProps={linkProps => ({
      className: clsx(props.className, linkProps.isCurrent && 'text-primary'),
    })}
  />
);

const Sidebar = () => (
  <aside className="w-1/4 hidden sm:block">
    <ul>
      <li className="py-2">
        <NavLink to="/contacts" className="items-center flex text-xl">
          <Icon className="mr-4">face</Icon> Contacts
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
