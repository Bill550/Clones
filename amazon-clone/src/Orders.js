import React, { useEffect, useState } from 'react';
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider"
import Order from "./Order"


function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
         // useEffect: this will only run when the app component loads...
        
        if (user) {
            
            db.collection('users') /// users: user Logged in
                .doc(user?.uid) /// uid: Specific uid in firebase 
                .collection('orders') /// orders: all orders of user woh logged in
                .orderBy('created', 'desc') /// created: created date , desc: descending 
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })

        }else{
            
            setOrders([])
        }
        
    }, [])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order
                        order = { order }
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders 