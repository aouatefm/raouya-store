import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Layout from '../Layout'
import './header.scss'
import { useSession } from '../../firebase/UserProvider'
import { logout } from '../../firebase/auth'

const Header = () => {
    const history = useHistory()
    const { user } = useSession()
    const logoutUser = async () => {
        await logout();
        history.push('/');
    };

    return (
        <>
            <header className="header" style={{ marginBottom: "50px" }}>
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/cart' className="link">  Cart (3)</Link>
                {user && <Link to='/dashboard' className="link">Dashboard</Link>}
                {user && <Link className="link" onClick={logoutUser}>Logout</Link>}
                {!user && <Link to='/login' className="link">Login</Link>}
                  </header>
            <Layout title="Raouiya Store" description="This is the Store Page" />

        </>
    );
}

export default Header;

