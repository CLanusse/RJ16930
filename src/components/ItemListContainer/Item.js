import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {img, nombre, desc, precio, id} ) => {


    return (
        <div className="card col-4 m-2">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>{precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}
