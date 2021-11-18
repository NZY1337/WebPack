
import "./App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from './users/users';
import SingleUser from "./users/single-user";
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



