import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({children}) => {
    
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
        })
    }