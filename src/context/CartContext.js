import { createContext, useState } from "react";

// creación del contexto
export const CartContext = createContext()


// custom provider

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {
        setCarrito([
            ...carrito,
            prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setCarrito( carrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(el => el.id === id)
    }

    return (
        <CartContext.Provider value={{carrito, isInCart, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
