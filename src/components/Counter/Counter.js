import React, { useState } from 'react'

export const Counter = ({max, cantidad, setCantidad, agregar}) => {

   

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
                <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
            </div>
        </>
    )
}
