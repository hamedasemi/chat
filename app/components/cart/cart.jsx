import React, { useContext } from 'react';

import { StoreContext } from '../store/store';

const Cart = () => {
    const { cart, removeFromCart, addToCart } = useContext(StoreContext);

    return (
        <div>
            <div>CART:</div>
            <br/>
            {cart.length ? cart.map((item) => {
                return <div key={item.id}>
                    {item.name} {item.price} {item.quantity}
                    <button onClick={() => { removeFromCart(item.id) }}>-</button>
                    <button onClick={() => { addToCart(item) }}>+</button>
                </div>
            }) : 'The cart is empty.'}
        </div>
    );
}

export default Cart;