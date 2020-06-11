import React, { useContext } from 'react';

import { StoreContext } from '../store/store';

const Product = (props) => {
    const { addToCart } = useContext(StoreContext);

    return (
        <div>{props.product.name} {props.product.price}<button onClick={() => { addToCart(props.product) }}>Add to cart</button></div>
    );
}

export default Product;