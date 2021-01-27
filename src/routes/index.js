import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../pages/About'
import NewProduct from '../components/store/NewProduct'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
import SingleProduct from '../components/store/SingleProduct'
import ProfileRedirect from '../routes/ProfileRedirect'
import Cart from "../components/cart";
import Dash from "../components/store/Dash";
import Orders from "../components/orders/Orders";
import EditProduct from "../components/store/EditProduct";
import OrderDetails from "../components/orders/OrderDetails";

const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route path="/orders" component={Orders} />
            <Route path="/dashboard" component={Dash} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/orders/:id" component={OrderDetails} />
            <Route path="/cart" component={Cart} />
            <ProfileRedirect path="/login" component={Login} />
            <ProfileRedirect path="/signup" component={Signup} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route exact path="/"><Redirect to="/login" /></Route>
        </Switch>
    );
}

export default Routes;

