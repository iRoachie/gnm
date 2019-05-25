import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Page: React.FunctionComponent = ({ children }) => (
  <>
    <Header />

    <div className="max-w-5xl mx-auto p-4 flex">
      <Sidebar />
      <main className="w-full sm:w-3/4">{children}</main>
    </div>
  </>
);

export default Page;
