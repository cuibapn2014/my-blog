import React, { createContext, useState } from 'react';

const MenuContext = createContext()



const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const value = {
        isOpen,
        toggleMenu
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuProvider };