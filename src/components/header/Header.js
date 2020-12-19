import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.scss';
import Layout from '../Layout'
import './header.scss'
const Header = () => {


    return (
        <>
            <header className="header">
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/cart' className="link">  Cart (3)</Link>
            </header>
            <Layout title="Raouiya Store" description="This is the Store Page" />

        </>
    );
}

export default Header;