import React, { useContext } from 'react';
import { AuthContext } from '../util/AuthContext';
import { Button } from '@material-ui/core';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="border py-4">
      <div className="max-w-5xl mx-auto px-4 sm:flex justify-between items-center">
        <svg
          width="182px"
          height="40px"
          viewBox="0 0 91 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="none">
            <g fill="#1A1A1A">
              <path d="M27.145 17.273c1.72 0 3.076-.637 4.072-1.546v-4.09h-4.072v1.818h2.081v1.363c-.543.364-1.176.546-1.99.546-1.63 0-2.896-1.273-2.896-3 0-1.637 1.176-2.91 2.714-2.91 1.086 0 1.72.364 2.443 1l1.267-1.545c-.995-.818-1.99-1.273-3.71-1.273-2.895 0-4.976 2.182-4.976 4.91.09 2.636 2.08 4.727 5.067 4.727M36.193 15.545c-1.176 0-1.9-.909-1.9-2 0-1.09.724-2 1.9-2s1.9.91 1.9 2c0 1.091-.724 2-1.9 2m0 1.728c2.262 0 3.89-1.728 3.89-3.818 0-2.091-1.628-3.728-3.89-3.728-2.262 0-3.89 1.728-3.89 3.818 0 2.091 1.628 3.728 3.89 3.728M44.88 15.545c-1.177 0-1.9-.909-1.9-2 0-1.09.723-2 1.9-2 1.176 0 1.9.91 1.9 2 0 1.091-.724 2-1.9 2m0 1.728c2.262 0 3.89-1.728 3.89-3.818 0-2.091-1.628-3.728-3.89-3.728-2.263 0-3.891 1.728-3.891 3.818 0 2.091 1.628 3.728 3.89 3.728M53.475 15.545c-.995 0-1.81-.818-1.81-2 0-1.181.815-2 1.81-2 .996 0 1.72.819 1.72 2 .09 1.182-.724 2-1.72 2m-.452 1.728c1.086 0 1.72-.546 2.262-1.182v1h2.081V7.273h-2.171v3.545c-.453-.545-1.177-1.09-2.262-1.09-1.72 0-3.258 1.363-3.258 3.727 0 2.454 1.629 3.818 3.348 3.818M59.085 17.09h.996v-4c0-1.272.905-2.18 2.08-2.18 1.268 0 1.9.817 1.9 2.09v4.09h1.087v-4.363c0-1.636-.996-2.818-2.624-2.818-1.177 0-1.9.636-2.353 1.364V10.09h-.995v7h-.09zM67.772 13.182c.18-1.364 1.086-2.364 2.262-2.364 1.357 0 2.08 1.091 2.262 2.364h-4.524zm0 .909h5.52v-.364c0-2.09-1.177-3.727-3.258-3.727-1.9 0-3.348 1.636-3.348 3.636 0 2.182 1.538 3.637 3.438 3.637 1.358 0 2.172-.546 2.896-1.273l-.634-.636c-.543.636-1.266 1-2.171 1-1.267 0-2.353-.819-2.443-2.273z" />
            </g>
            <path
              fill="#1A1A1A"
              d="M76.368 17.182h.904l1.9-5.546 1.81 5.546h.905l2.534-7.091h-1.086l-1.9 5.636-1.81-5.636h-.905l-1.9 5.636-1.81-5.636h-1.085zM87.95 17.273c1.357 0 2.442-.728 2.442-2.091 0-1.273-1.176-1.637-2.262-2-.904-.273-1.81-.546-1.81-1.182 0-.545.544-1 1.358-1 .633 0 1.448.273 2.081.636l.453-.818a4.847 4.847 0 0 0-2.534-.727c-1.357 0-2.353.818-2.353 2 0 1.273 1.177 1.636 2.263 2 .904.273 1.719.545 1.719 1.273 0 .636-.634 1.09-1.448 1.09s-1.629-.363-2.443-.909l-.543.728c.995.636 2.081 1 3.076 1"
            />
            <path
              d="M9.591 9.91C10.767 7.635 11.944 5.272 13.12 3c.09-.182.09-.273.181-.545.09-.91-.271-1.546-.724-2.455.09.727.09 1.364-.905 3.09L8.234 10H9.59v-.09zm5.339-1c.18-.365.271-.455.271-.91.09-.91-.271-1.545-.724-2.455.09.728.181 1.182-.814 2.91l-.724 1.363h1.538l.453-.909zm-2.896 1h-1.357l2.262-4.455c.995-1.728.905-2.182.814-2.91.453 1 .724 1.546.724 2.455 0 .273-.09.364-.18.545-.725 1.455-1.539 2.91-2.263 4.364z"
              fill="#253B7C"
            />
            <path
              d="M14.296 18.91C7.963 21.09.181 19.544.181 11.454c0-4.364 3.529-8 7.872-8.182v3.272c-1.357.091-2.624.819-3.348 1.819-1.176 1.636-1.267 4.181-.271 6 1.447 2.909 3.8 2.545 6.514 2.545v-3.727H8.415v-2.727h5.881v8.454z"
              fill="#253B7C"
            />
          </g>
        </svg>

        <div className="flex items-center mt-4 sm:mt-0 justify-between">
          <div className="mr-4 sm:text-right">
            <p className="text-sm text-primary font-bold">{user!.name}</p>
            <p className="text-sm text-gray-600 leading-none">
              {user!.role.title}
            </p>
          </div>

          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
