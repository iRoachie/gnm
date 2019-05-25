import React from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "@material-ui/core/Button";
import Helmet from "react-helmet";
import Page from "../components/Page";

const Contacts: React.FunctionComponent<RouteComponentProps> = () => (
  <Page>
    <Helmet>
      <title>Contacts | GNM 2019</title>
    </Helmet>

    <Button variant="contained" color="primary">
      Hey
    </Button>
  </Page>
);

export default Contacts;
