import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../components/About'
import NewProduct from '../components/store/NewProduct'
import Dashboard from '../components/Dashboard'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Store} />
                <Route exact path="/about" component={About} />
                <Route exact path="/newproduct" component={NewProduct} />
                <Route exact path="/dashboard" component={Dashboard} />

            </Switch>
        </Router>
    );
}

export default Routes;
