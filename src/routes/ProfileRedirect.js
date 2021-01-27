import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSession } from '../components/contexts/cart/UserProvider'
const ProfileRedirect = ({ component: Component, ...rest }) => {
    const { user } = useSession()
    return (
        <Route
            {...rest}
            render={(props) =>
                !user ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: `/dashboard`,
                                state: { from: props.location },
                            }}
                        />
                    )
            }
        />
    );
};

export default ProfileRedirect;