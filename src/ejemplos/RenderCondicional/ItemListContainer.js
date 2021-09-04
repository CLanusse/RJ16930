import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'


export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    const [data, setData] = useState([])


    // useEffect(()=>{

    //     const mover = (event) => {
    //         console.log(event)
    //         console.log('Mouse moved')
    //     }
    //     window.addEventListener('mousemove', mover)

    //     return ()=>{
    //         window.removeEventListener('mousemove', mover)
    //     }
    // }, [])

    const handleCargar = () => {
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }
    
    // useEffect( ()=> {
    //     setLoading(true)

    //     pedirDatos()
    //         .then(res => {

    //             if (catId) {
    //                 const arrayFiltrado = res.filter( prod => prod.category === catId)
    //                 setData( arrayFiltrado )
    //             } else {
    //                 setData(res)
    //             }
    //         })
    //         .catch(err => console.log(err))
    //         .finally(()=> {
    //             setLoading(false)
    //         })

    // }, [catId, setLoading])

    // EARLY RETURN
    // if (loading === true) {
    //     return <h2>Cargando...</h2>
    // }
    // return <ItemList productos={data}/>

    // return (
    //     <>
    //         {loading && <h2>Cargando...</h2>}
    //         {!loading && <ItemList productos={data}/>}
    //     </>
    // )

    // TERNARIO
    return (
        <> 
            <h2 style={{
                color: loading ? 'red' : 'green',
                fontSize: loading ? '40px' : '20px'
            }}
            >Hola mundo!</h2>

            <button className={loading ? 'btn-inactivo' : ''}  onClick={handleCargar}>Mostrar listado</button>
            
            {loading 
             ? <Loader/>
             : <ItemList productos={data}/>    
            }
        </>
    )
}
