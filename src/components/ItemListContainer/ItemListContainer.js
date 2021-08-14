import React, { useEffect, useState } from 'react'


export const ItemListContainer = ( {greeting} ) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const stock = [
        {
            id: 1,
            nombre: "Zapatillas 1",
            precio: 6000,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        },
        {
            id: 2,
            nombre: "Zapatillas 2",
            precio: 8000,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        },
        {
            id: 3,
            nombre: "Remera 1",
            precio: 2000,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        },
        {
            id: 4,
            nombre: "Remera 2",
            precio: 1700,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        },
        {
            id: 5,
            nombre: "Pantalón 1",
            precio: 4000,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        },
        {
            id: 6,
            nombre: "Pantalón 2",
            precio: 4200,
            desc: "Una cosa maravillosa",
            img: "https://via.placeholder.com/200"
        }
    ]
    

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {

                setTimeout(()=>{
                    resolve(stock)
                }, 1000)

        })
    }

    
    
    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [])


    return (
        <div className="container my-5">
            <h2>{greeting}</h2>
            <hr/>

            {
                loading 
                ? <p>Loading ...</p>
                : 
                <ul>
                    { data.map( (prod) =>  (
                        <li key={prod.id}>
                            <img src={prod.img} alt={prod.nombre}/>
                            <h3>{prod.nombre}</h3>
                            <p>{prod.desc}</p>
                            <p>{prod.precio}</p>
                        </li>
                    )) }
                </ul>
            }
            
        </div>
    )
}
