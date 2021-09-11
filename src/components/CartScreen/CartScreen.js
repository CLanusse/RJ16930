import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div className="container my-5">
            <h1>Resumen de compra</h1>

            {carrito.map(prod => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <button className="btn btn-danger">
                        <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                    </button>
                </div>
            ))}

            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to="/checkout">
                <button className="btn btn-success mx-3">
                    Terminar mi compra
                </button>
            </Link>
        </div>
    )
}
