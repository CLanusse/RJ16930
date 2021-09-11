import React from 'react'
import { Link } from 'react-router-dom'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {

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
            <div className="d-flex flex-column">
            
                {
                    agregado 
                        ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                        :
                        <div>
                            <div className="d-flex">
                                <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                                <p className="mx-3">{cantidad}</p>
                                <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                            </div>
                            <button className="btn btn-outline-primary my-2" onClick={agregar}>Agregar al carrito</button>
                        </div>
                }



            </div>
        </>
    )
}
