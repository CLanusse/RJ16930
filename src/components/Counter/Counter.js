import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {
    console.log(agregado)

    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex">

                {
                    agregado 
                        ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                        :
                        <div>
                            <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                            <p>{cantidad}</p>
                            <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
                        </div>
                }



            </div>
        </>
    )
}
