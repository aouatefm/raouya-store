import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../components/Login";
import Store from "../components/store/Store";
import About from "../pages/About";
import NewProduct from "../components/store/NewProduct";
import Orders from "../components/orders/Orders";
import Dash from "../components/store/Dash";
import SingleProduct from "../components/store/SingleProduct";
import OrderDetails from "../components/orders/OrderDetails";
import Cart from "../components/cart";
import ProfileRedirect from "./ProfileRedirect";
import Signup from "../components/Signup";
import EditProduct from "../components/store/EditProduct";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/dashboard" component={Dash} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/orders/:id" component={OrderDetails} />
            <Route path="/cart" component={Cart} />
            <ProfileRedirect path="/login" component={Login} />
            <ProfileRedirect path="/signup" component={Signup} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <ProfileRedirect path="/dash" component={Signup} />
            <Route exact path="/"><Redirect to="/login" /></Route>
        </Switch>
    );
}

export default Routes;

