import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Users from "./components/users/users";
import Navigation from "./components/navigation/navigation";
import User from "./components/users/user";

export default function MainApp() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" exact component={User} />
        </Switch>
      </Router>
    </>
  );
}
