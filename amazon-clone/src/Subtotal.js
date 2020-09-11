import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    // console.log({basket});
    return (
        <div div className='subtotal' >
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                subtotal({basket?.length} items):  {/* ? help Not to crash app if there is nothing in basket*/} 
                            <strong> {value} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This Order Contains Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"$"}
            />

            {/* link and history: link use to change URL and history helps us to pass the User from One page to another */}
            <button onClick={e => history.push('./Payment')}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
