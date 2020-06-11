import React, { useContext, useEffect } from 'react';

import { StoreContext } from '../store/store';

import Product from '../product/product';

const Products = () => {
    const { getProducts, filteredProducts, loading } = useContext(StoreContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div>PRODUCTS:</div>
            <br/>
            <div>
                {loading ? 'Loading...' : filteredProducts.map((product) => {
                    return <Product key={product.id} product={product}></Product>
                })}
            </div>
            <br />
        </div>
    );
}

export default Products;