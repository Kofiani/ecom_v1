import { createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext();

export function useShoppingCart () {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const getQuant = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseQuant = (id) => {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === id) == null ) {
                return [...currentItem, {id, quantity: 1}]
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                
                })
            }
        })
    }

    const decreaseQuant = (id) => {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === id)?.quantity === 1 ) {
                return currentItem.filter(item => item.id !== id)
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }
                
                })
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems(currentItem => {
            return currentItem.filter(item => item.id !== id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{ getQuant, increaseQuant, removeFromCart, decreaseQuant }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}