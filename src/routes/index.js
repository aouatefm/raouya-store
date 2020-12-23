import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../components/About'
import NewProduct from '../components/store/NewProduct'
import Dashboard from '../components/Dashboard'

const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>

    );
}

export default Routes;
