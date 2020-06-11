import React, { useContext } from 'react';
import { StoreContext } from '../store/store';

const Cart = () => {
    const { cart, removeFromCart, addToCart } = useContext(StoreContext);

    return (
        <div>
            {cart.map((item) => {
                return <div key={item.id}>
                    {item.name} {item.quantity}
                    <button onClick={() => { removeFromCart(item.id) }}>-</button>
                    <button onClick={() => { addToCart(item) }}>+</button>
                </div>
            })}
        </div>
    );
}

export default Cart;