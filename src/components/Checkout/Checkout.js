import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'


export const Checkout = () => {

    const {carrito, totalCarrito} = useContext(CartContext)

    const buyer = {
        nombre: "Conrado Lanusse",
        tel: 123123123,
        email: "a@b.com"
    }

    

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>
            <button onClick={() => generarOrden(buyer, carrito, totalCarrito())}>Generar orden</button>
        </div>
    )
}
