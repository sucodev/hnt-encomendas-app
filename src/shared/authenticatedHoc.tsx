import { NextComponentType } from "next";
import Router from "next/router";
import { useEffect } from "react";

import { useSelectorAuth } from "../hooks/useSelectorAuth";

const withAuth = (Component: NextComponentType) => {

    const AuthenticationComponent = () => {
        const { isAuthenticated, authenticatedFailed } = useSelectorAuth();

        useEffect(() => {
            if(!isAuthenticated || authenticatedFailed) { 
                Router.push('/')
                return;
            }
        }, [isAuthenticated, authenticatedFailed]);

        return isAuthenticated && <Component />
    }

    return AuthenticationComponent;
}

export { withAuth }