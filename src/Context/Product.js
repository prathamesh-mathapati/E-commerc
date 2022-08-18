// import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { products } from './../backend/db/products'

const productContext = createContext();


const reduser = (state, action) => {

    switch (action.type) {
        case 'Fast':
            return { ...state, Fast: !state.Fast };
        case 'Instock':
            return { ...state, Instock: !state.Instock };
        case "CATEGORY": {
            if (!state.byCategory.includes(action.payload)) {
                return { byCategory: [...state.byCategory, action.payload] }
            } else {
                const array = state.byCategory.filter(prod => prod !== action.payload);
                return { ...state, byCategory: array };
            }
        }
        case 'redio': {
            return { ...state, redio: action.payload }
        }
        case 'high': {
            return { ...state, high: action.payload }
        }
        case 'range': {
            return { ...state, Reage: action.payload }
        }
        case 'search': 
            return { ...state, search: action.payload }
        
        case 'Cart': 
            return { ...state, cart: [...state.cart, action.payload] }
        case 'REMOVE_FROM_CART':
            return {...state,cart: state.cart.filter(element => element._id!==action.payload._id ) }
            case 'REMOVE_FROM_LIKE':
                return {...state,Like: state.Like.filter(element => element._id!==action.payload._id ) }
    
        case 'like':
            console.log(state.Like);
            return { ...state, Like: [...state.Like, action.payload] }
        default: return state;
    }
}
const ProductProvider = ({ children }) => {

    const [state, despatch] = useReducer(reduser, {
        Instock: false,
        Fast: false,
        byCategory: [],
        redio: 0,
        high: [],
        low: [],
        Reage: 190000,
        search: 0,
        cart: [],
        Like:[]
    })


    const [data, setData] = useState(products);

    return (
        <productContext.Provider value={{ data, despatch, setData, state, reduser }}>
            {children}
        </productContext.Provider>

    )
}

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider }

