import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../Layout'
import './header.scss'
const Header = () => {

    return (
        <>
            <header className="header" style={{ marginBottom: "50px" }}>
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/cart' className="link">  Cart (3)</Link>
                <Link to='/dashboard' className="link">Dashboard</Link>

                <Link to='/login' className="link">Login</Link>

            </header>
            <Layout title="Raouiya Store" description="This is the Store Page" />

        </>
    );
}

export default Header;