import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";

import ShowPage from "./ShowPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:showId" component={ShowPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
