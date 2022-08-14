import React, { createContext, useContext } from "react";

const LoginContex = createContext();

const LogincontextProvider = ({ children }) => {

    const LoingGust = async () => {
        console.log("hello");
    }

    return (
        <LoginContex.Provider value={{ LoingGust }}>
            {children}
        </LoginContex.Provider>
    )

}

const useAuthCotext = () => useContext(LoginContex)

export { useAuthCotext, LogincontextProvider }