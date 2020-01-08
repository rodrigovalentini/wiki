import React from "react";
import logo from "./logo.svg";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Portal from "./pages/portal";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/portal" component={Portal}></Route>
      </Switch>
    </div>
  );
}

export default App;
