import React, { createContext, useState } from 'react'
import { Children } from 'react'

export const UIContext = createContext()



export const UIContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    return (
        <UIContext.Provider value={{loading, setLoading}}>
            {children}
        </UIContext.Provider>
    )
}
