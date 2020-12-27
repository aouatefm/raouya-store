import React from 'react'
import { Switch, Route } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../components/About'
import NewProduct from '../components/store/NewProduct'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
        </Switch>

    );
}

export default Routes;
