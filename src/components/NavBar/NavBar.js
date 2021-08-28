import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {


    return (
        <header className="encabezado">
            <Link to={"/"}><h1>LOGO</h1></Link>
            

            <nav>
                <Link className="mx-1" to={"/"}>Inicio</Link>
                <Link className="mx-1" to={"/category/calzado"}>Calzado</Link>
                <Link className="mx-1" to={"/category/remeras"}>Remeras</Link>
                <Link className="mx-1" to={"/category/pantalones"}>Pantalones</Link>
            </nav>

            <CartWidget/>

        </header>
    )
  
}
