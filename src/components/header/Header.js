import React, {useContext, useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import Layout from '../Layout'
import './header.scss'
import { useSession } from '../../firebase/UserProvider'
import { logout } from '../../firebase/auth'
import {CartContext} from "../contexts/CartContext";
import {CartIcon} from "../../assets/icons";
import {getUserById} from "../../firebase/user";

const Header = () => {
    const [userRole,setUserRole] = useState()
    const {itemCount} = useContext(CartContext);
    const history = useHistory()
    const { user } = useSession()
    const logoutUser = async () => {
        await logout();
        history.push('/');
    };
    useEffect(async () => {
        if(user)
        {const role = await getUserById(user.uid);
            await setUserRole(role.data().role)}

    }, []);

    return (
        <>
            <header className="header" style={{ marginBottom: "50px" }}>
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/cart' className="link"> <CartIcon width={18}/> Cart ({itemCount})</Link>
                {user && userRole==='admin' && <Link to='/dashboard' className="link">Dashboard</Link>}
                {!user && <Link to='/login' className="link">Login</Link>}
                {user && userRole==='admin' && <Link to='/orders' className="link" >Order</Link>}
                {user && userRole==='admin' &&<Link to='' className="link" >Hello {userRole} !</Link>}
                {user && <Link className="link" onClick={logoutUser} to=''>Logout</Link>}

            </header>
            <Layout title="Raouiya Store" description="This is the Store Page" />

        </>
    );
}

export default Header;

