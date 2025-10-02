"use client";

const { createContext, useState } = require("react");


export const scoreContext = createContext();

export const ScoreProvider = ({children}) => {

    const [score, setScore] = useState(0);

    
    return <scoreContext.Provider value={{score, setScore}}>
        {children}
    </scoreContext.Provider>
}   