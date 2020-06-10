import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/store';

const Products = () => {
    const { products, addToCart, getProducts } = useContext(StoreContext);
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            {products.map((product) => {
                return <div key={product.id}>{product.name}<button onClick={() => { addToCart(product) }}>Add to cart</button></div>
            })}
        </div>
    );
}

export default Products;