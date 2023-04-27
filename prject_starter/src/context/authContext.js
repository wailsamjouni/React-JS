import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);

    const login = () => {
        setCurrentUser({
            id: 1,
            name: 'Wail Samjouni',
            profilePic: 'https://images.unsplash.com/photo-1535182539448-8bf2aee81484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        })
    };

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
}