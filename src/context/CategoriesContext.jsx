import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({children}) => {
    
    const [shopData, setShopData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products => setShopData(products))
    })

    const value = {
        shopData,
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}