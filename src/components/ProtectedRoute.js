import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
    component: Component,
    isAuthenticated: isAuthenticated,
}) {
    return (
        <Route
            render={(props) => {
                if (isAuthenticated) {
                    return <Component />;
                } else {
                    return (
                        <Redirect to="/login" />
                    );
                }
            }}
        />
    );
}

export default ProtectedRoute;