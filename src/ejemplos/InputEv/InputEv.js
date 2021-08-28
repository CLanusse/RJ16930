import React, { useState } from 'react'

export const InputEv = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // const handleNombre = (e) => {
    //     setValues({
    //         ...values,
    //         nombre: e.target.value,
    //     })
    // }

    // const handleApellido = (e) => {
    //     setValues({
    //         ...values,
    //         apellido: e.target.value
    //     })
    // }

    // const handleEmail = (e) => {
    //     setValues({
    //         ...values,
    //         email: e.target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    type="text"
                    value={values.apellido}
                    onChange={handleInputChange}
                    name="apellido"
                />
                <input
                    type="email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
