import { useReducer } from "react/cjs/react.production.min";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    return
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemFromCartHandler = (item) => { };
    const removeItemFromCartHandler = (id) => { };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;