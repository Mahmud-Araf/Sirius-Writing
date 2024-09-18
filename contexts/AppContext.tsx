"use client"

import {createContext, useState} from "react";
import defaultWritingType, { WritingType } from "@/types/writingType";

interface AppContextProps {
    type: WritingType;
    setType: (type: WritingType) => void;
    difficulty: string;
    setDifficulty: (difficulty: string) => void;
    context: string;
    setContext: (context: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

import { ReactNode } from "react";

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({children}: AppContextProviderProps) => {
    const [type, setType] = useState<WritingType>(defaultWritingType);
    const [difficulty, setDifficulty] = useState("");
    const [context, setContext] = useState("");

    return (
        <AppContext.Provider value={{type, setType, difficulty, setDifficulty, context, setContext}}>
            {children}
        </AppContext.Provider>
    );
};