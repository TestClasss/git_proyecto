import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    const providerValue = {
        
    };
    return <UserContext.Provider value={providerValue}>
        {props.children}
    </UserContext.Provider>
};

export const useUserContext = (    ) => { 
    const context = useContext(UserContext);
    return context;
};