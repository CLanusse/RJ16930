import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <section className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <div className="row">

                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

            </div>
        </section>
    )
}
