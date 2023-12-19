import * as React from "react";
import { useContext, useState, useEffect, createContext } from "react";

import { setToken } from "@/services";

const AuthContext = createContext([{}, () => {}]);

export const useAuth = () => {
    const [state, setState] = useContext(AuthContext);

    const logout = () => {
        // setState(false);
        setToken(false);
    };

    // const login = (auth) => {
    //     setState(auth);
    //     setToken(auth.token);
    // };

    return [state, { logout }];
};

export const AuthProvider = ({ children } : {children: React.ReactNode}) => {
    const [state, setState] = useState(() => {
        const data = window.localStorage.getItem("auth");

        const auth = data && JSON.parse(data);

        if (auth?.token) {
            setToken(auth.token);
        }

        return auth;
    });

    useEffect(() => {
        window.localStorage.setItem("auth", state && JSON.stringify(state));
    }, [state]);

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};
