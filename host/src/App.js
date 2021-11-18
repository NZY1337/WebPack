import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation/navigation";
import Home from '../src/components/home/home';
const FooterLazy = lazy(() => import("subA/Footer"));
const UsersLazy = lazy(() => import('users/Users'));
const SingleUserLazy = lazy(() => import('users/SingleUser'));

const App = () => {
    return (
        <Suspense fallback="Loading...">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users" exact component={UsersLazy} />
                    <Route path="/users/:id"  component={SingleUserLazy} />
                </Switch>
                <FooterLazy/>
            </Router>
        </Suspense>
    );
}

export default App;
