import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap navigation
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Navigation from "./components/navigation/navigation";
import Home from '../src/components/home/home';
import Users from "../../users/src/users/users";
import SingleUser from "../../users/src/users/single-user";
const FooterLazy = lazy(() => import("footer/Footer"));
const UsersLazy = lazy(() => import('users/Users'));
const SingleUserLazy = lazy(() => import('users/SingleUser'));
const UsersAppLazy = lazy(() => import('users/App'));


const App = () => {
    return (
        <Suspense fallback={<h4>Loading...</h4>}>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/" exact component={UsersLazy} />
                    <Route path="/:id" component={SingleUserLazy} />
                </Switch>
                <FooterLazy/>
            </Router>
        </Suspense>



       // <>
       //     <Suspense fallback={<h4>Loading...</h4>}>
       //         <Router>
       //             <Navigation />
       //
       //             <Switch>
       //                 <Route path="/" exact component={Home} />
       //                 <UsersAppLazy/>
       //             </Switch>
       //             <FooterLazy/>
       //         </Router>
       //     </Suspense>
       // </>
    );
}

export default App;
