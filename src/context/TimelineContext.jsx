import { Children, createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

    const [history, setHistory] = useState([]);

    const addTimelineFunction = (type, friendName) => {

        const newEntry = {
            id: Date.now(),
            title: `${type} with ${friendName}`,
            date: new Date().toLocaleString(),
            type: type
        };

        setHistory(prev => [newEntry, ...prev]);
    };


    return <TimelineContext.Provider value={{history, addTimelineFunction}}>
        {children}
    </TimelineContext.Provider>
}