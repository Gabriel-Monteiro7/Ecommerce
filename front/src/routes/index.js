import { Switch } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" component={Home} exact>
        {props.children}
      </Route>
      <Route path="/register" component={Register} exact>
        {props.children}
      </Route>
    </Switch>
  );
}
