import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Counter } from '../Counter/Counter'

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    // agregar al carrito
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <img src={img} alt={nombre}/>
                </div>
                <div className="col-6">
                    <h2>{nombre}</h2>
                    <p>Precio: {precio}</p>

                    <p>{desc}</p>

                    <Counter 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        agregar={handleAdd} 
                        agregado={isInCart(id)}
                    />
                </div>

            </div>
            <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}
