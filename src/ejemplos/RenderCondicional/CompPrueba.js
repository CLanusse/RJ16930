import React from 'react'

export const CompPrueba = React.memo(({agregado = true}) => {

    const titulo = agregado ? {
        className: 'agregado',
        style: {
            fontSize: '60px'
        } 
    }
    : {}

    console.log('Me rendericé: CompPrueba')

    return ( <h3 {...titulo} >Soy un componente de prueba</h3>
        
    )
})

