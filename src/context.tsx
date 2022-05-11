import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextValues {
    query: string;
    logged: boolean;
    setQuery: (query: string) => void;
    setLogged: (logged: boolean) => void;
}

const initialGlobalValue: GlobalContextValues = {
    query: "",
    logged: false,
    setQuery: () => { },
    setLogged: () => { }
}

export const globalContext = createContext<GlobalContextValues>(initialGlobalValue);
export const useGlobalContext = () => useContext(globalContext);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [query, setQuery] = useState(initialGlobalValue.query);
    const [logged, setLogged] = useState(initialGlobalValue.logged);
    return (
        <globalContext.Provider value={{
            query,
            setQuery,
            logged,
            setLogged
        }}>
            {children}
        </globalContext.Provider>
    )
}
