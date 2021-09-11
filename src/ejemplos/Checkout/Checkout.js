import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase/config'
import firebase from "firebase/app";
import 'firebase/firestore'


export const Checkout = () => {

    const {carrito} = useContext(CartContext)

    console.log(carrito)
    const db = getFirestore()
    const orders = db.collection('orders')

    useEffect(async () => {
        
        const newOrder = {
            buyer: {name: "yo", email: "conrado.lanusse@gmail.com"},
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: carrito.reduce( (acc, el) => acc + el.precio, 0)
        }
    
        const itemToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(prod => prod.id))
        
        const query = await itemToUpdate.get()
        const batch = db.batch()
        const outOfStock = []

        query.docs.forEach((doc)=>{
            const itemInCart = carrito.find( prod => prod.id === doc.id)
            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        })
        
        if (outOfStock.length === 0) {
            await batch.commit()
            orders.add(newOrder)
                .then((res) => alert(res.id))
        }
    
    }, [])

    return (
        <div>
            <h2>Checkout</h2>
        </div>
    )
}
