import React from "react";
import Header from "./Header";

const Page: React.FunctionComponent = ({ children }) => (
  <>
    <Header />

    <main className="max-w-6xl mx-auto p-4">{children}</main>
  </>
);

export default Page;
