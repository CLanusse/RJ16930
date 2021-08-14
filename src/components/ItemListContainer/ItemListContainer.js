import React, { useState } from 'react'


export const ItemListContainer = ( {greeting} ) => {


    const [mensaje, setMensaje] = useState(greeting)


    const clickear = () => { 
        setMensaje("Buen día a todos")
    }

    return (
        <div className="container my-5">
            <h2 onClick={clickear} >{mensaje}</h2>
            <hr/>
        </div>
    )
}
