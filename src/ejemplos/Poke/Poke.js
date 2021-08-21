import React, { useEffect, useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'

export const Poke = () => {

    const [pokemon, setPokemon] = useState({})
    const [busqueda, setBusqueda] = useState('')
    const [id, setId] = useState(1)

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleBuscar = (e) => {
        e.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then( resp => resp.json())
            .then( data => {
                setPokemon({
                    nombre: data.name,
                    imagen: data.sprites.front_default
                })
            })
    }


  
    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( resp => resp.json())
            .then( data => {
                setPokemon({
                    nombre: data.name,
                    imagen: data.sprites.front_default
                })
            })

    }, [id])


    return (
        <div>
            <h2>Poke</h2>
            <hr/>

            <button className="btn btn-primary my-3" onClick={handleSiguiente}>
                Siguiente
            </button>

            <Form onSubmit={handleBuscar}>
                <FormControl 
                    type="text"
                    value={busqueda}
                    onChange={handleInputChange}
                />
                
                <button type="submit" className="btn btn-success my-1">
                    Buscar
                </button>
            </Form>

            <h3>{pokemon.nombre}</h3>
            <img src={pokemon.imagen} alt={pokemon.nombre}/>
            
        </div>
    )
}
