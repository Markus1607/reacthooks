import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;
