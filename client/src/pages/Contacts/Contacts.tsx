import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Helmet from 'react-helmet';
import debounce from 'lodash.debounce';

import Page from '../../components/Page';
import ContactList from './components/ContactList';

const Contacts: React.FunctionComponent<RouteComponentProps> = () => {
  const [search, setSearch] = useState('');
  const [dbSearch, setdbSearch] = useState('');

  const searchDb = debounce((value: string) => {
    setdbSearch(value);
  }, 500);

  const updateSearch = (value: string) => {
    setSearch(value);
    searchDb(value.toLowerCase().trim());
  };

  return (
    <Page>
      <Helmet>
        <title>Contacts | GNM 2019</title>
      </Helmet>

      <input
        className="relative transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal ds-input"
        type="text"
        placeholder="Search contacts"
        autoComplete="off"
        spellCheck={false}
        aria-label="search input"
        value={search}
        onChange={e => updateSearch(e.target.value)}
      />

      <ContactList search={dbSearch} />
    </Page>
  );
};

export default Contacts;
