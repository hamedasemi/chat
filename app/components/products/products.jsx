import React, { useContext, useEffect } from 'react';

import { StoreContext } from '../store/store';

import Product from '../product/product';

const Products = () => {
    const { products, getProducts, loading } = useContext(StoreContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div>PRODUCTS:</div>
            <br/>
            <div>
                {loading ? 'Loading...' : products.map((product) => {
                    return <Product key={product.id} product={product}></Product>
                })}
            </div>
            <br />
        </div>
    );
}

export default Products;