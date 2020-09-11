import React, { useEffect, useState } from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";
import axios from "./axios";






function Payment() {

    //Hooks
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    //
    
    // Sate To handel disable Button
    const [ error, setError ] = useState(null); 
    const [disable, setDisable] = useState(true);
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    //

    useEffect(() => {       // useEffect: this will only run when the app component loads...
        // Generate the Special Stripe Secret Which allow us to charge the a customer

        const getClientSecret = async () => {
            const response = await axios({  // asios: Making Requst Push , get
                method: 'post',
                //Stripe expects the total in a currencies subunit  
                //this URL is API CAll
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            }); 

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    
    console.log('The SECERET is >>>  ', clientSecret )

    //Function
    const handleSubmit = async (e) => {     // e: Event
        // Stripe Stuff
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {   // .then((response)) Destructuring Using {} the we have this (its a stripe) .then(({paymentIntent}))  paymentIntent = payment confirmation
            setSucceded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('/orders')
        });
    }   

    const handleChange = e => {     // e: Event
        // Listen for changes in cardElement
        // display ant error as the customer type their card details
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to='./Checkout'>{basket?.length} Items</Link>)</h1>
                {/* Payment Section - Dilivery Address */}
                <div className="payment__seaction">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React</p>
                        <p>Lahore, Pakistan</p>
                    </div>
                </div>

                {/* Payment Section - Review Product */}
                <div className="payment__seaction">
                    <div className="payment__title">
                        <h3>Review Item & Delivery</h3>
                    </div>
                    <div className="payment__item">
                        
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                        
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__seaction">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Method */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Oder Totals: { value }</h3> 
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeprator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disable || succeded}>
                                    <span>{ processing? <p>Processing</p> : "Buy Now" }</span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div> { error } </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
