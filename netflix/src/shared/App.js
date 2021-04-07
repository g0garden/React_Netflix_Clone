// import logo from "./logo.svg";
// import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Browse, ProfileSelect } from "../pages";
import { Header, Footer } from "../components";
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment className="App">
      <Grid isRoot>
        <Header />
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Browse} />
        </ConnectedRouter>
        {/* <div className="alignCenter"><img src={logo} className="App-logo" alt="logo" /></div> */}
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
