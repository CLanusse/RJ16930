import { getFirestore } from '../firebase/config'
import firebase from "firebase/app";
import 'firebase/firestore'

export const generarOrden = (buyer, carrito, total) => {

    const db = getFirestore()
    const orders = db.collection('orders')
    
    const newOrder = {
        buyer: buyer,
        items: carrito,
        total: total,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    orders.add(newOrder)
        .then((res) => console.log(res.id))
}