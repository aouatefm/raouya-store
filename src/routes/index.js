import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Store from '../components/store/Store';
import About from '../components/About'
import NewProduct from '../components/store/NewProduct'
import Login from '../components/Login'
import Signup from '../components/Signup'
import SingleProduct from '../components/store/SingleProduct'
import ProfileRedirect from '../routes/ProfileRedirect'
import Cart from "../icon";
import Dash from "../components/Dash";
import Orders from "../components/orders/Orders";
import EditProduct from "../components/store/EditProduct";

const Routes = () => {
    return (

        <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/newproduct" component={NewProduct} />
            <Route path="/orders" component={Orders} />
            <Route path="/dashboard" component={Dash} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <ProfileRedirect path="/login" component={Login} />
            <ProfileRedirect path="/signup" component={Signup} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route exact path="/"><Redirect to="/login" /></Route>
        </Switch>
    );
}

export default Routes;


<iframe width="675" height="506" src="https://www.youtube.com/embed/GPX_cYkjfgk" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>