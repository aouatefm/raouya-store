import React, {useContext, useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import './header.scss'
import { useSession } from '../../firebase/UserProvider'
import { logout } from '../../firebase/auth'
import {CartContext} from "../contexts/cart/CartContext";
import {CartIcon} from "../../assets/icons";
import {db} from "../firebase";
import {checkUserIsAdmin} from "../../helpers/checkUserIsAdmin";
function GetUser(id) {
    const [user, setUser] = useState([]);
        db.collection('users').doc(id).get()
            .then((snapshot) => {
                const currentUser= snapshot.data();
                setUser(currentUser);
            })
    return user
}
const Header = () => {
    const [userRole, setUserRole] = useState('user');
    const {itemCount} = useContext(CartContext);
    const history = useHistory()
    const { user,role } = useSession()
    console.log(role)
    const logoutUser = async () => {
        await logout();
        history.push('/');
    };
    return (
        <>
            <header className="header" style={{ marginBottom: "50px" }}>
                {user && role==='admin' && <Link to='' className="link" >Hello ! admin</Link>}
                <Link to='/' className="link">Store</Link>
                <Link to='/about' className="link">About</Link>
                {/*{user && userRole==='admin' &&*/}
                {user && role==='admin' && <Link to='/dashboard' className="link">Dashboard</Link>}
                {/*{user && userRole==='admin' &&*/}
                {user && role==='admin' && <Link to='/orders' className="link">Order</Link>}
                <Link to='/cart' className="link"> <CartIcon width={18}/> Cart ({itemCount})</Link>
                {user && <Link className="link" onClick={logoutUser} to=''>Logout</Link>}
                {!user && <Link to='/login' className="link">Login</Link>}
            </header>

        </>
    );
}

export default Header;

