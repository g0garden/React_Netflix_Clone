import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Browse, Login } from "../pages";
import { Header, Footer } from "../components";
import { Grid } from "../elements";

function App() {
  return (
    <AppGlobal>
      <Header />
      <Grid isRoot>
        <ConnectedRouter history={history}>
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/" component={Login} />
        </ConnectedRouter>
      </Grid>
      <Footer />
    </AppGlobal>
  );
}

const AppGlobal = styled.div`
  ${(props) => (props?.onClick || props?._onClick ? "cursor:pointer;" : "")}
`;

export default App;
