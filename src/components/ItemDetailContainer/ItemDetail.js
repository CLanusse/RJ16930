import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const [cantidad, setCantidad] = useState(1)
    // agregar al carrito
    const agregarAlCarrito = () => {
        console.log({
            id, nombre, category, desc, img, precio, cantidad
        })
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>


            <img src={img} alt={nombre}/>
            <p>{desc}</p>

            <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregarAlCarrito}/>
            <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}
