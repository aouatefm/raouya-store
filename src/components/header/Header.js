import React, {useContext, useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import Layout from '../../pages/Layout'
import './header.scss'
import { useSession } from '../contexts/cart/UserProvider'
import { logout } from '../../firebase/auth'
import {CartContext} from "../contexts/cart/CartContext";
import {CartIcon} from "../../assets/icons";
const Header = () => {
    const {itemCount} = useContext(CartContext);
    const history = useHistory()
    const { user } = useSession()
    const logoutUser = async () => {
        await logout();
        history.push('/');
    };
    return (
        <>
            <header className="header" style={{ marginBottom: "50px" }}>
                {user && <Link to='' className="link" >Hello ! admin</Link>}
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                {/*{user && userRole==='admin' &&*/}
                <Link to='/dashboard' className="link">Dashboard</Link>
                {/*{user && userRole==='admin' &&*/}
                <Link to='/orders' className="link" >Order</Link>
                <Link to='/cart' className="link"> <CartIcon width={18}/> Cart ({itemCount})</Link>
                {user && <Link className="link" onClick={logoutUser} to=''>Logout</Link>}
                {!user && <Link to='/login' className="link">Login</Link>}
            </header>
            <Layout title="Raouiya Store" description="This is the Store Page" />

        </>
    );
}

export default Header;

