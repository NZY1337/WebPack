
import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from './users/users';
import SingleUser from "./users/single-user";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
//json placeholder

const App = () => {
  return (
      <>
        <Router>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/users/:id"  component={SingleUser} />
            {/*<Route path="/users/:id" exact component={User} />*/}
          </Switch>
        </Router>
      </>)
};

export default App;



