import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({category, id, nombre, desc, img, precio}) => {


    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>


            <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}
