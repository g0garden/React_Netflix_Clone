// import logo from "./logo.svg";
// import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Browse, Login } from "../pages";
import { Header, Footer } from "../components";
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Grid isRoot>
        <ConnectedRouter history={history}>
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/" component={Login} />
        </ConnectedRouter>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
