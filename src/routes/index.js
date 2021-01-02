import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../components/About'
import NewProduct from '../components/store/NewProduct'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'
import SingleProduct from '../components/store/SingleProduct'
import ProfileRedirect from '../routes/ProfileRedirect'
const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product" component={SingleProduct} />
            <ProfileRedirect path="/login" component={Login} />
            <ProfileRedirect path="/signup" component={Signup} />
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
        </Switch>

    );
}

export default Routes;
