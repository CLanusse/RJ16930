import { getFirestore } from '../firebase/config'
import firebase from "firebase/app";
import 'firebase/firestore'

export const generarOrden =  (buyer, carrito, total) => {

    return new Promise( async (resolve, reject) => {
        const db = getFirestore()
        const orders = db.collection('orders')

        const newOrder = {
            buyer: buyer,
            items: carrito,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(prod => prod.id))
        
        const batch = db.batch()
        const query = await itemsToUpdate.get()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(el => el.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad ) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad })
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        })

        if (outOfStock.length === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            reject({
                error: "Productos sin stock",
                sinStock: outOfStock
            })
        }
 
    })


        // actualizar cada uno por separado

        // carrito.forEach((prod) => {
        //     const docRef = db.collection('productos').doc(prod.id)
        //     docRef.get()
        //         .then(doc => {
        //             docRef.update({
        //                 stock: doc.data().stock - prod.cantidad
        //             })
        //             .then((res) => console.log(res))
        //         })
        // })
}