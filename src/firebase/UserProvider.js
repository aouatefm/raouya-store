import React, {useEffect, useState, useContext} from 'react';
import firebase from 'firebase/app';
import {db} from "../components/firebase";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [role, setRole] = useState('user')
    const [session, setSession] = useState({user: null, loading: true, role: 'user'});
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setSession({loading: false, user})
            if (session.user) {
                db.collection('users').doc(user.uid).get()
                    .then((snapshot) => {
                        const newRole = snapshot.data();
                        setRole(newRole.role);
                        // setSession({role: role})
                        setSession(prevState => ({
                                user: prevState.user,
                                role:newRole.role,
                                loading: prevState.loading
                            }
                        ))
                    })
            }

        })
        return () => unsubscribe();
    }, []);
    return (
        <UserContext.Provider value={session}>
            {!session.loading && props.children}
        </UserContext.Provider>
    )
}
export const useSession = () => {
    const session = useContext(UserContext);
    return session;
}