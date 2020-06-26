import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../core/Home";
import AddUser from "./AddUser";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/join' exact component={AddUser} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
