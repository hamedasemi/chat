import React, { useContext } from 'react';
import { StoreContext } from '../context/store';

const Cart = () => {
    const { cart } = useContext(StoreContext);

    return (
        <div>
            {cart.map((item) => {
                return <div key={item.id}>{item.name}</div>
            })}
        </div>
    );
}

export default Cart;