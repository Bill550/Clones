export const initialState = {
    basket: [],
    user: null,

};
//Selector: Use In Production Enviroment => For  Calculating Price in Subtotal.js
export const getBasketTotal = (basket) => basket?.reduce((amount, item)=>item.price + amount, 0); // ? help Not to crash app if there is nothing in basket 


// State: State of app , Action: add,remove(any Action)
const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state, // ... for Current State
                basket: [...state.basket, action.item], // ... for Current State

            }
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id = action.id
            );
            let newBaasket = [...state.basket]; // ... for Current State

            if (index >= 0) {
                newBaasket.splice(index, 1);
            } else {
                console.warn(`Cant remove the product (id: ${action.id}) as its not in basket` )
            }

            return {
                ...state, // ... for Current State
                basket: newBaasket
            }
        
        case 'SET_USER': 
            return {
                ...state, // ... for Current State
                user: action.user,
            }
            
        default:
            return state;
    }
};

export default reducer;