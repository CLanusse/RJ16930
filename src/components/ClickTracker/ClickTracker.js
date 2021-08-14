import React, { useEffect, useState } from 'react'

export const ClickTracker = () => {

    // const [contador, setContador] = useState(0)
    // const [fecha, setFecha] = useState( null )

    // const handleClick = () => {
        
    //     setContador( contador + 1 )
    //     setFecha( new Date().toLocaleString() )

    // }


    const [contador, setContador] = useState(
        {
            clicks: 0,
            fecha: null
        }
    )



    const handleClick = () => {
        setContador({
            clicks: contador.clicks + 1,
            fecha: new Date().toLocaleString()
        })
    }


    useEffect( ()=> {
        console.log("Componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, [])
    
    useEffect( ()=>{
        console.log("Actualizado contador")
    }, [contador])

    return (
        <div className="container" onClick={handleClick} >

            <h2>Click tracker</h2>
            <hr/>

            <p>Clicks: {contador.clicks}</p>
            <p>Clickeado el: {contador.fecha}</p>
        </div>
    )
}
